import Image from 'next/image'
import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"

import { createClient } from 'contentful'

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

  return {
    props: {
      textContent: page.textContent,
    },
  }
}

export default function Home({
  textContent,
} : {
  textContent: any 
}) {
  return (
    <Layout pageTitle='Historia'>
      <div className='relative h-[50vh]'>
      <Image
        alt="Johannes Sarjasto playing accordion in a field"
        src="/etel-pohjalaiset-spelit-logo-copy-1_3.jpeg"
        fill
        sizes="(min-width: 768px) 80vw, 100vw"
        className={`hidden md:block object-cover`}
      />
      </div>

      <div className="py-8">
        <TextLayout text={textContent} className='text-primary-600' />
      </div>
    </Layout>
  )
}
