import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Form from '@/components/Forms/ContactForm'
import Banner from '@/components/Banner'
import Divider from "@/components/Divider"

import { createClient } from 'contentful'
import { ContentfulImage } from '../types'
import { getImageBuffer } from 'eliasfrigard-reusable-components'
import { getPlaiceholder } from 'plaiceholder'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'contactPage',
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.banner

  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page.textContent,
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
      textContent: page.textContent,
    },
  }
}

export default function Nuottivihko({
  banner,
  textContent,
} : {
  banner: ContentfulImage,
  textContent: any 
}) {
  return (
    <Layout pageTitle='Yhteystiedot'>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className='flex flex-col w-full justify-center items-center py-8 lg: gap-8 lg:gap-16'>
        <TextLayout text={textContent} className='text-primary-600' />
        <Divider className='w-2/3' />
        <Form subtitle="Voit ottaa meihin yhteyttä tällä lomakkeella." />
      </div>
    </Layout>
  )
}
