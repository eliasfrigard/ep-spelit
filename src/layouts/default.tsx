import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {
  InformationCircleIcon,
  ClockIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
  DocumentPlusIcon
} from "@heroicons/react/24/solid"

export default function Layout({
  children,
  pageTitle,
  footer = true,
  transparent = true,
  titleHidden = false,
  className = '',
  headerData,
}: {
  children: React.ReactNode
  pageTitle?: string
  footer?: boolean
  transparent?: boolean
  titleHidden?: boolean
  className?: string
  headerData: any
}) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  const author = 'Elias Frigård'
  const pageName = headerData.websiteInformation.websiteTitle

  const routes = [
    { href: '/', label: headerData.home.pageTitle, type: 'link' },
    { href: '/spelit', label: headerData.spelit.title, type: 'dropdown', items: [
      {
        href: "/",
        label: headerData.spelit.eventPageTitle,
        description: headerData.spelit.eventDescription,
        icon: CalendarDaysIcon,
      },
      {
        href: "/ilmoittautuminen",
        label: headerData.spelit.applicationPageTitle,
        description: headerData.loiskeet.applicationPageDescription,
        icon: DocumentPlusIcon,
      },
      {
        href: "/esiintyjat",
        label: headerData.spelit.artistPageTitle,
        description: headerData.spelit.artistDescription,
        icon: MusicalNoteIcon,
      },
      {
        href: "/ohjelma",
        label: headerData.spelit.programPageTitle,
        description: headerData.spelit.programDescription,
        icon: ClockIcon,
      },
      {
        href: "/info",
        label: headerData.spelit.infoPageTitle,
        description: headerData.spelit.infoDescription,
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/loiskeet', label: headerData.loiskeet.title, type: 'dropdown', items: [
      {
        href: "/",
        label: headerData.loiskeet.eventPageTitle,
        description: headerData.loiskeet.eventDescription,
        icon: CalendarDaysIcon,
      },
      {
        href: "/ilmoittautuminen",
        label: headerData.loiskeet.applicationPageTitle,
        description: headerData.loiskeet.applicationPageDescription,
        icon: DocumentPlusIcon,
      },
      {
        href: "/esiintyjat",
        label: headerData.loiskeet.artistPageTitle,
        description: headerData.loiskeet.artistDescription,
        icon: MusicalNoteIcon,
      },
      {
        href: "/ohjelma",
        label: headerData.loiskeet.programPageTitle,
        description: headerData.loiskeet.programDescription,
        icon: ClockIcon,
      },
      {
        href: "/info",
        label: headerData.loiskeet.infoPageTitle,
        description: headerData.loiskeet.infoDescription,
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/historia', label: headerData.history.title, type: 'link' },
    { href: '/nuottivihko', label: headerData.music.title, type: 'link' },
    { href: '/hallitus', label: headerData.board.title, type: 'link' },
    { href: '/yhteystiedot', label: headerData.contact.title, type: 'link' },
  ]

  const socialMedia = {
    facebook: headerData.websiteInformation.facebookUrl,
    email: headerData.websiteInformation.emailAddress,
    instagram: headerData.websiteInformation.instagramUrl,
    youTube: headerData.websiteInformation.youTubeUrl,
  }

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={headerData.websiteInformation.favicon.fields.file.url} />
      </Head>

      <title>{`${pageTitle ? pageTitle + ' | ' : ''}${pageName}`}</title>

      <Header
        transparent={transparent}
        currentRoute={router.pathname}
        routes={routes} 
        socialMedia={socialMedia}
        pageName={pageName}
        pageSubtitle={headerData.websiteInformation.websiteSubtitle}
        logo={headerData.websiteInformation.menuLogo.fields.file}
        titleHidden={titleHidden}
        font='font-mont'
      />
      <main
        style={{ transition: 'opacity-90 200ms ease-out' }}
        className={`minContainerHeight bg-white pt-[85px] fade-in ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
      >
        {children}
      </main>

      {footer && <Footer socialMedia={socialMedia} author={author} pageName={pageName} />}
    </>
  )
}
