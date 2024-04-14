import Layout from "@/layouts/default"
import TextLayout from "@/components/TextLayout"

import { createClient } from 'contentful'

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
  })

  const pageRes = await contentful.getEntries({
    content_type: 'homePage',
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
    <Layout>
      <div className="py-8">
        <TextLayout text={textContent} className='text-primary-600' />
      </div>
    </Layout>
  )
}
