import Image from 'next/image'
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Artist from '@/components/Artist'

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
    content_type: 'artistsPage',
  })

  const page = pageRes.items[0].fields

  const banner: any = page?.banner

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
      artists: page.artists,
    },
  }
}

export default function Home({
  banner,
  textContent,
  artists
} : {
  banner: ContentfulImage,
  textContent: any
  artists: any[]
}) {
  return (
    <Layout pageTitle='Esiintyjät'>
        <div className='relative h-[50vh]'>
          <Image
            className={`object-cover`}
            alt={banner.altText}
            src={banner.url + '?w=3440'}
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            placeholder={banner?.blur ? 'blur' : 'empty'}
            blurDataURL={banner?.blur}
            />
        </div>
        <div className='py-16 flex flex-col gap-16'>
        {/* <div>
          <TextLayout text={textContent} className='text-primary-600' />
        </div> */}

        {
          artists.map((artist: any) => {
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
