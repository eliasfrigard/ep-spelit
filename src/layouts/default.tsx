import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {
  InformationCircleIcon,
  ClockIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
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
        description: "Find the perfect solution for your needs.",
        icon: CalendarDaysIcon,
      },
      {
        label: "Esiintyjät",
        href: "/esiintyjat",
        description: "Meet and learn about our dedication",
        icon: MusicalNoteIcon,
      },
      {
        label: "Ohjelma",
        href: "/ohjelma",
        description: "Meet and learn about our dedication",
        icon: ClockIcon,
      },
      {
        label: "Info",
        href: "/info",
        description: "Meet and learn about our dedication",
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/spelit', label: 'spelit', type: 'dropdown', items: [
      {
        label: "Spelit 2024",
        href: "/",
        description: "Find the perfect solution for your needs.",
        icon: CalendarDaysIcon,
      },
      {
        label: "Esiintyjät",
        href: "/esiintyjat",
        description: "Meet and learn about our dedication",
        icon: MusicalNoteIcon,
      },
      {
        label: "Ohjelma",
        href: "/ohjelma",
        description: "Meet and learn about our dedication",
        icon: ClockIcon,
      },
      {
        label: "Info",
        href: "/info",
        description: "Meet and learn about our dedication",
        icon: InformationCircleIcon,
      },
    ]},
    { href: '/nuottivihko', label: 'nuottivihko', type: 'link' },
    { href: '/historia', label: 'historia', type: 'link' },
    { href: '/hallitus', label: 'hallitus', type: 'link' },
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
        className={`minContainerHeight bg-primary-100 pt-[85px] fade-in ${loading ? 'opacity-0' : 'opacity-100'} ${className}`}
      >
        {children}
      </main>

      {footer && <Footer author={author} pageName={pageName} />}
    </>
  )
}
