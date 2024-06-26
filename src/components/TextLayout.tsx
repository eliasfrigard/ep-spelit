import React from 'react'
import Image from 'next/image'
import Video from './Video'
import Container from './Container'
import DownloadItem from './DownloadItem'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (node.data.target.sys.contentType.sys.id === "video") {
        return (
          <Video
            className="pt-0 pb-2 md:pt-4 md:pb-5"
            key={node.data.target.fields.name}
            title={node.data.target.fields.name}
            link={node.data.target.fields.youTubeLink}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const contentType = node.data.target.fields.file.contentType
      const { url, fileName } = node.data.target.fields.file

      if (contentType.includes('image')) {
      return (
          <a href={`http:${url}`}>
            <Image
              src={`https:${url}`}
              alt={fileName}
              width={node.data.target.fields.file.details.image.width}
              height={node.data.target.fields.file.details.image.height}
              className='my-4 rounded'
            />
          </a>
        )
      }

      return (
        <DownloadItem
          key={node.data.target.fields.title}
          title={node.data.target.fields.title}
          filename={fileName}
          file={`https:${url}`}
        />
      )
    },
  },
}

const TextLayout = ({ 
  text, 
  type = 'dynamic', 
  className,
} : {
  text: any
  type?: string
  className?: string
}) => {
  let textLength = 0

  text?.content.forEach((t: any) => {
    if (t.nodeType !== 'paragraph') return

    t.content.forEach((v: any) => {
      const value = v?.value?.length

      if (typeof value === 'number') {
        textLength = textLength + value
      }
    })
  })

  const textContent = text.content.filter((v: any) => {
    if (v.nodeType !== 'paragraph') return true

    return v.content[0].value.length > 0
  })

  const textDocument = {
    ...text,
    content: textContent,
  }

  const maxLengthForTwoColumns = 1500

  if (type === 'presentation') {
    return (
      <div
        className={`prose py-0 my-0 leading-[2rem] font-mont prose-headings:font-mont prose-blockquote:border-primary-500 prose-blockquote:border-opacity-10 prose-blockquote:opacity-80 prose-blockquote:rounded prose-a:text-accent-500 flex flex-col justify-center prose-blockquote:my-0 prose-p:my-0 prose-headings:my-0 space-y-3 px-4 lg:px-0 prose-li:list-none prose-li:pl-0 prose-ul:pl-0 prose-li:mt-0 prose-li:mb-0 ${className}`}
      >
        {documentToReactComponents(textDocument, options)}
      </div>
    )
  }

  if (true) {
    return (
      <Container
        className={`prose py-0 my-0 max-w-4xl leading-[2rem] tracking-wide font-mont text-center prose-headings:fontEnglish prose-blockquote:border-primary-500 prose-blockquote:border-opacity-10 prose-blockquote:opacity-80 prose-blockquote:rounded prose-a:text-accent-500 flex flex-col items-center justify-center prose-blockquote:my-0 prose-p:my-0 prose-headings:my-0 space-y-4 px-4 lg:px-0 prose-li:list-none prose-li:mt-0 prose-li:mb-0 ${className}`}
      >
        {documentToReactComponents(textDocument, options)}
      </Container>
    )
  }

  return (
    <Container
      className={`prose max-w-7xl font-mont prose-headings:font-mont lg:columns-2 gap-10 prose-img:px-1 prose-img:rounded-sm leading-loose text-center md:text-justify prose-headings:underline prose-a:text-accent-500 prose-li:list-none prose-li:mt-0 prose-li:mb-0 ${className}`}
    >
      {documentToReactComponents(textDocument, options)}
    </Container>
  )
}

export default TextLayout
