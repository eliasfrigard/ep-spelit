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
    'fields.eventType': 'spelit',
    select: ['fields.applicationFormBanner'],
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.applicationFormBanner

  if (!banner) {
    return {
      props: {
        banner: null,
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
      headerData,
    },
  }
}

export default function Home({
  banner,
  headerData,
} : {
  banner?: ContentfulImage,
  headerData: any
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
          <EventForm subtitle="Tästä voit ilmoittautua esiintyjäksi Lokakuun loiskeisiin 4.-6.10.2024" />
        </div>
      </div>
    </Layout>
  )
}
