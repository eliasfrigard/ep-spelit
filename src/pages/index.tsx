import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"
import Banner from "@/components/Banner"
import Video from "@/components/Video"

import { createClient } from 'contentful'
import { ContentfulImage } from '../types'
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
    content_type: 'homePage',
  })

  const page = pageRes.items[0].fields
  const banner: any = page?.banner

  if (!banner) {
    return {
      props: {
        banner: null,
        textContent: page.textContent  || null,
        videos: page.videos || [],
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
      textContent: page.textContent || null,
      videos: page.videos || [],
      headerData,
    },
  }
}

export default function Home({
  banner,
  textContent,
  headerData,
  videos
} : {
  banner: ContentfulImage,
  textContent: any
  headerData: any
  videos: any
}) {
  const firstVideo = videos[0]

  return (
    <Layout headerData={headerData} pageTitle={headerData.board.title}>
      {banner && (
        <Banner 
          url={banner.url} 
          altText={banner.altText} 
          blur={banner?.blur}
        />
      )}

      <div className="py-8 lg:py-14 flex flex-col justify-center items-center gap-8 lg:gap-14">
        {
          textContent && (
            <TextLayout text={textContent} className='text-primary-600 prose-headings:text-red-500 prose-h1:text-5xl prose-h2:text-3xl gap-2' />
          )
        }

        {
          videos?.length > 0 && (
            <div className='w-full px-3 flex justify-center items-center'>
              <div className='container flex flex-col justify-center items-center gap-3 lg:gap-6'>
                <div className='w-full aspect-video'>
                  <Video
                    prominent={true}
                    key={firstVideo.fields.youTubeLink}
                    title={firstVideo.fields.title}
                    link={firstVideo.fields.youTubeLink}
                    />
                </div>

                <div className={`w-full grid grid-flow-row ${videos.length > 1 && 'lg:grid-cols-2'} gap-4 lg:gap-6`}>
                  {videos.map((video: any, index: any) => {
                  if (index === 0) return null
                  return (
                      <Video
                      prominent={false}
                      key={video.fields.youTubeLink}
                      title={video.fields.title}
                      link={video.fields.youTubeLink}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </Layout>
  )
}
