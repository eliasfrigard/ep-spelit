import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
}: {
  children: React.ReactNode
  pageTitle?: string
  footer?: boolean
  transparent?: boolean
  titleHidden?: boolean
  className?: string
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
  const pageName = 'Eteläpohjalaiset Spelit'

  const routes = [
    { href: '/', label: 'etusivu', type: 'link' },
    { href: '/loiskeet', label: 'loiskeet', type: 'dropdown', items: [
      {
        label: "Lokakuun Loiskeet 2024",
        href: "/",
        description: "Lokakuun loiskeet -pelimannitapahtuma 4.-6.10.2024",
        icon: CalendarDaysIcon,
      },
      {
        label: "Ilmoittautuminen",
        href: "/ilmoittautuminen",
        description: "Ilmoittautaudu Lokakuun Loiskeisiin",
        icon: DocumentPlusIcon,
      },
      {
        label: "Esiintyjät",
        href: "/esiintyjat",
        description: "Artistit 2024 (Lokakuun Loiskeet)",
        icon: MusicalNoteIcon,
      },
      {
        label: "Ohjelma",
        href: "/ohjelma",
        description: "Ohjelma 2024 (Lokakuun Loiskeet)",
        icon: ClockIcon,
      },
      {
        label: "Info",
        href: "/info",
        description: "Info yleisölle, artisteille ja pelimanneille",
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/spelit', label: 'spelit', type: 'dropdown', items: [
      {
        label: "Spelit 2024",
        href: "/",
        description: "2.-4.8.2024 Etelä-Pohjanmaan Opistolla Ilmajoella",
        icon: CalendarDaysIcon,
      },
      {
        label: "Ilmoittautuminen",
        href: "/ilmoittautuminen",
        description: "Ilmoittautaudu Lokakuun Loiskeisiin",
        icon: DocumentPlusIcon,
      },
      {
        label: "Esiintyjät",
        href: "/esiintyjat",
        description: "Eteläpohjalaiset spelit artistit 2024",
        icon: MusicalNoteIcon,
      },
      {
        label: "Ohjelma",
        href: "/ohjelma",
        description: "Eteläpohjalaiset spelit ohjelma 2024",
        icon: ClockIcon,
      },
      {
        label: "Info",
        href: "/info",
        description: "Info yleisölle, artisteille ja pelimanneille",
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/nuottivihko', label: 'nuottivihko', type: 'link' },
    { href: '/historia', label: 'historiikki', type: 'link' },
    { href: '/hallitus', label: 'hallitus', type: 'link' },
    { href: '/yhteytstiedot', label: 'yhteystiedot', type: 'link' },
  ]

  const socialMedia = {
    facebook: 'https://www.facebook.com/EtelapohjalaisetSpelit',
    email: 'ep.spelit@gmail.com',
  }

  return (
    <>
      <title>{`${pageTitle ? pageTitle + ' | ' : ''}${pageName}`}</title>

      <Header
        transparent={transparent}
        currentRoute={router.pathname}
        routes={routes} 
        socialMedia={socialMedia}
        pageName={pageName}
        font='font-khorla'
        titleHidden={titleHidden}
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
