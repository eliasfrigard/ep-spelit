import Banner from "@/components/Banner"
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"

import { createClient } from 'contentful'
import { ContentfulImage } from '../../types'
import { getImageBuffer } from 'eliasfrigard-reusable-components'
import { getPlaiceholder } from 'plaiceholder'
import { getHeaderData } from "@/lib/getHeaderData"

export async function getStaticProps() {
  const headerData = await getHeaderData()
  const contentful = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'event',
    'fields.eventType': 'loiskeet',
    select: ['fields.infoBanner', 'fields.infoText'],
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.infoBanner

  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page?.infoText || null,
        headerData,
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
      textContent: page.infoText || null,
      headerData
    },
  }
}

export default function Home({
  banner,
  textContent,
  headerData
} : {
  banner?: ContentfulImage,
  textContent: any
  headerData: any
}) {
  return (
    <Layout headerData={headerData} pageTitle={headerData.loiskeet.infoPageTitle}>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className='py-8 flex flex-col justify-center items-center gap-8 lg:gap-16'>
        {textContent && (
          <TextLayout text={textContent} className='text-primary-600' />
        )}
      </div>
    </Layout>
  )
}
