import Banner from "@/components/Banner"
import Layout from "@/layouts/default"
import EventForm from '@/components/Forms/EventForm'

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
    select: ['fields.applicationFormBanner', 'fields.applicationFormSubtitle'],
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.applicationFormBanner

  if (!banner) {
    return {
      props: {
        banner: null,
        headerData,
        formSubtitle: page.applicationFormSubtitle,
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
      headerData,
      formSubtitle: page.applicationFormSubtitle,
    },
  }
}

export default function Home({
  banner,
  headerData,
  formSubtitle
} : {
  banner?: ContentfulImage,
  headerData: any
  formSubtitle: string
}) {
  return (
    <Layout headerData={headerData} pageTitle={headerData.spelit.applicationPageTitle}>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className='py-8 flex flex-col justify-center items-center'>
        <div className="container flex flex-col justify-center items-center">
          <EventForm subtitle={formSubtitle} />
        </div>
      </div>
    </Layout>
  )
}
