import type { Metadata } from 'next'

const APPLICATION_NAME = 'Eteläpohjalaiset Spelit Kansanmusiikkiyhdistys ry.'
const KEYWORDS = ['Kansanmusiikki', 'Spelit', 'Loiskeet', 'Eteläpohjalaiset Spelit', 'Kansantanssi', 'Kansanlaulu', 'Eteläpohjalainen kulttuuri', 'Kulttuuriperinne', 'Kulttuuritapahtuma', 'Kulttuurifestivaali', 'Kulttuuritapahtuma', 'Kulttuuritapahtumat', 'Kulttuurifestivaalit', 'Kulttuuriperinteet', 'Kulttuuriperintö']

const CommonMetadata = (
  title: string, 
  description: string, 
  imageUrl: string, 
  url: string, 
  siteName: string,
  author: string,
): Metadata => {
  const common: Metadata = {
    generator: 'Next.js',
    applicationName: APPLICATION_NAME,
    keywords: KEYWORDS,
    referrer: 'origin-when-cross-origin',
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    }
  }

  const robots: Metadata = {
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }

  const openGraph = {
    openGraph: {
      title,
      description,
      url,
      siteName: siteName,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
        }
      ],
      locale: 'fi_FI',
      type: 'website',
    },
  }

  return {
    ...common,
    ...robots,
    ...openGraph,
  }
}

export default CommonMetadata
