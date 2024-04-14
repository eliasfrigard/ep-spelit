import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    { href: '/', label: 'etusivu' },
    { href: '/loiskeet', label: 'loiskeet' },
    { href: '/esiintyjat', label: 'esiintyjät' },
    { href: '/nuottivihko', label: 'nuottivihko' },
    { href: '/historia', label: 'historia' },
    { href: '/hallitus', label: 'hallitus' },
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
        uppercaseLinks={false} 
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
