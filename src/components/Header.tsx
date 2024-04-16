import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Hamburger from './Hamburger'
import AnimateIn from './AnimateIn'

import { BsFacebook, BsInstagram, BsYoutube, BsSpotify, BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Header = ({
  routes = [],
  currentRoute,
  pageName,
  socialMedia, 
  transparent = false, 
  uppercaseLinks = true, 
  fadeIn = false,
  font,
  titleHidden = false
} : {
  routes: { href: string, label: string }[]
  currentRoute: string
  pageName: string
  socialMedia: {
    phone?: string
    email?: string
    facebook?: string
    instagram?: string
    spotify?: string
    youTube?: string
  }
  transparent?: boolean
  uppercaseLinks?: boolean
  fadeIn?: boolean
  font: string,
  titleHidden?: boolean
}) => {
  const [currentYear, setCurrentYear] = React.useState('')
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const activeLinkStyling = (path: string) => {
    if (currentRoute !== path) return

    const style = 'font-bold text-accent-500'

    if (currentRoute.startsWith(path)) return style
  }

  React.useEffect(() => {
    const year = new Date().getFullYear()
    setCurrentYear(year.toString())
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <AnimateIn
        disabled={!fadeIn}
        delay={1000}
        className={`
          w-full 
          flex 
          justify-center 
          fixed 
          top-0 
          items-center 
          z-50 
          ${!transparent || scrolled ? 'backdrop-blur bg-primary-700' : ''}
          bg-opacity-80 
          duration-500
          ${transparent ? '' : 'shadow-lg'}
        `}
      >
        <div
          className={`
          hidden
          xl:gap-16
          xl:flex
          justify-between
          items-center
          h-[85px]
          w-full
          ${scrolled ? 'shadow-xl text-primary-300' : 'text-black'}
          duration-500
          tracking-wide
          px-8
          ${font}
        `}
        >
          <div id='left' className='text-center flex gap-3 justify-center items-center'>
            <Image 
              src='/Spelit-logo-pieni-transparent.png'
              alt='Kansanmusiikkiyhdistys ry. logo'
              width={50}
              height={50}
            />
            <Link className='flex flex-col gap-1 cursor-pointer text-sm font-bold tracking-widest uppercase text-start' href='/'>
              <p className='duration-200'>{pageName}</p>
              <p className='duration-200 font-normal text-[12px]'>Kansanmusiikkiyhdistys ry.</p>
            </Link>
          </div>
          <div id='center' className='flex justify-center items-center tracking-widest'>
            {routes.map((route, index) => (
              <Link
                key={route.href}
                href={route.href}
                className={`${activeLinkStyling(route.href)} desktopNavLink hover:text-accent-500 capitalize font-medium`}
                >
                {route.label}
              </Link>
            ))}
          </div>
          <div id='right' className='flex gap-4 xl:gap-5 justify-end items-center min-w-[200px]'>
            {socialMedia?.phone && (
              <a href={`tel:${socialMedia.phone}`}>
                <BsTelephone className='soMeIcon text-lg antialiased' />
              </a>
            )}
            {socialMedia?.email && (
              <a href={`mailto:${socialMedia?.email}?subject=${pageName} Website`}>
                <AiOutlineMail className='soMeIcon text-[1.5rem] antialiased' />
              </a>
            )}
            {socialMedia?.facebook && (
              <a href={socialMedia?.facebook} target='_blank' rel='noopener noreferrer'>
                <BsFacebook className='soMeIcon text-xl' />
              </a>
            )}
            {socialMedia?.instagram && (
              <a href={socialMedia?.instagram} target='_blank' rel='noopener noreferrer'>
                <BsInstagram className='soMeIcon text-lg' />
              </a>
            )}
            {socialMedia?.spotify && (
              <a href={socialMedia?.spotify} target='_blank' rel='noopener noreferrer'>
                <BsSpotify className='soMeIcon text-lg' />
              </a>
            )}
            {socialMedia?.youTube && (
              <a href={socialMedia?.youTube} target='_blank' rel='noopener noreferrer'>
                <BsYoutube className='soMeIcon text-[1.4rem] translate-y-[1px]' />
              </a>
            )}
          </div>
        </div>
      </AnimateIn>

      {/* MOBILE */}

      <div className={`w-screen flex fixed items-center z-50 bg-primary-950`}>
        <div
          className={`
          w-full
          xl:hidden
          flex
          justify-between
          items-center
          h-[85px]
          tracking-wide
          ${mobileNavOpen || scrolled ? 'backdrop-blur bg-primary-700 text-primary-300' : 'text-black'}
          px-6
          duration-300
          ${font}
        `}
        >
          <div>
            <Link className={`${titleHidden ? 'hidden' : 'flex'} flex-col text-center gap-1 cursor-pointer text-[10px] md:text-[14px] font-bold tracking-widest uppercase`} href='/'>
              <div id='left' className='text-start flex gap-3 justify-center items-center'>
                <Image 
                  src='/Spelit-logo-pieni-transparent.png'
                  alt='Kansanmusiikkiyhdistys ry. logo'
                  width={40}
                  height={40}
                />
                <div>
                  <p>{pageName}</p>
                  <p className=' font-normal text-[9px] md:text-[13px]'>Kansanmusiikkiyhdistys ry.</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Hamburger handleClick={toggleMobileNav} active={mobileNavOpen}></Hamburger>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden  px-8 fixed flex flex-col justify-evenly items-center pt-[85px] h-screen w-screen bg-primary-700 z-40 duration-300 transform ${!mobileNavOpen && '-translate-y-[100vh]'
          }`}
      >
        <div className='container flex flex-col justify-center items-center gap-6 text-primary-100 font-khorla'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`${activeLinkStyling(route.href)} mobileNavLink`}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className='flex justify-center items-center gap-6 text-primary-300'>
          {socialMedia?.phone && (
            <a href={`tel:${socialMedia.phone}`}>
              <BsTelephone className='soMeIcon text-xl antialiased' />
            </a>
          )}
          {socialMedia?.email && (
            <a href={`mailto:${socialMedia?.email}?subject=${pageName} Website`}>
              <AiOutlineMail className='soMeIcon text-[1.6rem] antialiased' />
            </a>
          )}
          {socialMedia?.facebook && (
            <a href={socialMedia?.facebook} target='_blank' rel='noopener noreferrer'>
              <BsFacebook className='soMeIcon text-2xl' />
            </a>
          )}
          {socialMedia?.instagram && (
            <a href={socialMedia?.instagram} target='_blank' rel='noopener noreferrer'>
              <BsInstagram className='soMeIcon text-2xl' />
            </a>
          )}
          {socialMedia?.spotify && (
            <a href={socialMedia?.spotify} target='_blank' rel='noopener noreferrer'>
              <BsSpotify className='soMeIcon text-2xl' />
            </a>
          )}
          {socialMedia?.youTube && (
            <a href={socialMedia?.youTube} target='_blank' rel='noopener noreferrer'>
              <BsYoutube className='soMeIcon text-[1.8rem] translate-y-[1px]' />
            </a>
          )}
        </div>
        <div className={`tracking-wide text-sm opacity-70 text-center text-primary-300 ${font}`}>
          <p className='text-s mb-2'>{`Copyright ${currentYear} © ${pageName}`}</p>
          <a href='mailto:' className='text-xs underline'>
            {socialMedia?.email}
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
