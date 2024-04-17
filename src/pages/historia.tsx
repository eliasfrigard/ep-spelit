import Image from 'next/image'
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Form from '@/components/Form'

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
    content_type: 'contentPage',
    'fields.title': 'Historia'
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
    },
  }
}
export default function Historia({
  banner,
  textContent,
} : {
  banner: ContentfulImage,
  textContent: any 
}) {
  return (
    <Layout pageTitle='Historia'>
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
        <div className='w-2/3 h-[2px] rounded-full opacity-20 bg-primary-500'></div>
        <Form />
      </div>
    </Layout>
  )
}
