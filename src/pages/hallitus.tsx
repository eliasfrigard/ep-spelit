import Image from 'next/image'
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Card from '@/components/Card'
import DownloadItem from '@/components/DownloadItem'
import Title from '@/components/Title'

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
    content_type: 'hallitus',
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
      members: page.boardMembers,
      files: page.files,
    },
  }
}

export default function Home({
  banner,
  textContent,
  members,
  files
} : {
  banner: ContentfulImage,
  textContent: any
  members: any[]
  files: any[] 
}) {
  return (
    <Layout transparent={true} pageTitle='Hallitus'>
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

      <div className='w-full flex flex-col justify-center items-center pb-4 pt-4 md:py-16 gap-8 px-6'>
        {/* <TextLayout text={textContent} className='text-primary-600 text-left max-w-3xl' /> */}
        <div className="container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 flex-wrap">
          {
            members.map((member: any) => {
              const photograph = member.fields.photo ? {
                url: 'https:' + member.fields.photo.fields.file.url,
                altText: member.fields.photo.fields.title,
              } : undefined

              return (
                <Card
                  key={member.sys.id} 
                  name={member.fields.name} 
                  role={member.fields.role}
                  location={member.fields.location}
                  image={photograph}
                />
              );
            })
          }
        </div>

        <div className='w-2/3 h-[2px] rounded-full opacity-20 my-2 md:my-8 bg-primary-500'></div>

        {files.length > 0 && (
          <div className='container flex flex-col gap-2 md:gap-12 md:px-0'>
            {/* <Title title='Downloads' textColor='text-primary-950' borderColor='border-primary-500' /> */}
            <div
              className={`grid grid-flow-row gap-6 md:gap-8 ${files.length > 1 && 'md:grid-cols-2'
            }`}
            >
              {files.map((file) => (
                <DownloadItem
                  key={file.sys.id}
                  title={file.fields.title}
                  filename={file.fields.file.fileName}
                  file={`https:${file.fields.file.url}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
