import Banner from "@/components/Banner"
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"

import { createClient } from 'contentful'
import { ContentfulImage } from '../../types'
import { getImageBuffer } from 'eliasfrigard-reusable-components'
import { getPlaiceholder } from 'plaiceholder'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'event',
    'fields.eventType': 'spelit',
    select: ['fields.banner', 'fields.text'],
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.banner

  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page.text,
      },
    }
  }

  const bannerUrl = 'https:' + banner?.fields.file.url
  const bannerBuffer = await getImageBuffer(bannerUrl)
  const { base64: bannerBlur } = await getPlaiceholder(bannerBuffer)

  const bannerImage: ContentfulImage = {
    altText: banner?.fields?.title,
    blur: bannerBlur,
    url: bannerUrl,
  }

  return {
    props: {
      banner: bannerImage,
      textContent: page.text,
    },
  }
}

export default function Loiskeet({
  banner,
  textContent,
} : {
  banner: ContentfulImage,
  textContent: any 
}) {
  return (
    <Layout pageTitle='Esiintyjät'>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className='py-8 lg:pb-16 flex flex-col gap-8 lg:gap-16'>
        {textContent && (
          <TextLayout text={textContent} className='text-primary-600' />
        )}
      </div>
    </Layout>
  )
}
