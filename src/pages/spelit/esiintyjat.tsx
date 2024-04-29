import Banner from "@/components/Banner"
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Artist from '@/components/Artist'

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
    select: ['fields.artists', 'fields.artistBanner', 'fields.artistText'],
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.artistBanner

  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page.artistText || null,
        artists: page.artists || null,
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
      textContent: page.artistText || null,
      artists: page.artists || null,
      headerData,
    },
  }
}

export default function Home({
  banner,
  textContent,
  artists,
  headerData
} : {
  banner: ContentfulImage,
  textContent: any
  artists?: any[]
  headerData: any
}) {
  return (
    <Layout headerData={headerData} pageTitle={headerData.spelit.artistPageTitle}>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}
        
      <div className='py-8 lg: flex flex-col gap-8 lg:gap-16'>
        {textContent && (
          <TextLayout text={textContent} className='text-primary-600' />
        )}

        {
          artists?.map((artist: any) => {
            return (
              <Artist 
              key={artist.sys.id} 
              name={artist.fields.name}
              textContent={artist.fields.description}
              />
            );
          })
        }
      </div>
    </Layout>
  )
}
