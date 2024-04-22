import Layout from "@/layouts/default"
import Card from '@/components/Card'
import Banner from "@/components/Banner"
import DownloadItem from '@/components/DownloadItem'
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
    content_type: 'hallitus',
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.banner
  
  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page.textContent,
        members: page.boardMembers,
        files: page.files,
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
      members: page.boardMembers,
      files: page.files,
    },
  }
}

export default function Home({
  banner,
  members,
  files
} : {
  banner: ContentfulImage,
  members: any[]
  files: any[] 
}) {
  return (
    <Layout transparent={true} pageTitle='Hallitus'>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className='w-full flex flex-col justify-center items-center pb-5 pt-5 lg:py-16 gap-8 px-6'>
        {/* <TextLayout text={textContent} className='text-primary-600 text-left max-w-3xl' /> */}
        <div className="container w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:gap-y-12 flex-wrap">
          {
            members.map((member: any, index) => {
              const photograph = member.fields.photo ? {
                url: 'https:' + member.fields.photo.fields.file.url,
                altText: member.fields.photo.fields.title,
              } : undefined

              return (
                <>
                  <Card
                    key={member.sys.id} 
                    name={member.fields.name} 
                    role={member.fields.role}
                    location={member.fields.location}
                    image={photograph}
                  />

                  {
                    index !== members.length - 1 && <Divider className="sm:hidden" />
                  }
                </>
              )
            })
          }
        </div>

        <Divider className="hidden sm:block w-2/3 my-2 md:my-8"/>

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
