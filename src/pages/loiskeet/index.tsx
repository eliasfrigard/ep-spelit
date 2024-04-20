import Image from 'next/image'
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Dropdown from '@/components/Dropdown'

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
    'fields.eventType': 'loiskeet',
    select: ['fields.banner', 'fields.text'],
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
    <Layout pageTitle='Loiskeet'>
      <div className='relative h-[50vh] w-full'>
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

      <div className='flex flex-col w-full justify-center items-center py-8 lg:py-16 gap-8 lg:gap-16'>
        <TextLayout text={textContent} className='text-primary-600' />
      </div>
    </Layout>
  )
}
