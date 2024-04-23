import { useState, useEffect } from 'react'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify, BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import AnimateIn from './AnimateIn'

const Footer = ({ 
  pageName, 
  author,
  socialMedia
 } : {
  pageName: string
  author: string
  socialMedia: {
    phone?: string
    email?: string
    facebook?: string
    instagram?: string
    spotify?: string
    youTube?: string
  }
 }) => {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const year = new Date().getFullYear()
    setCurrentYear(year.toString())
  }, [])

  return (
    <div className='absolute w-full bg-[#283740] flex justify-center items-center'>
      <AnimateIn className='container flex flex-col justify-between items-center py-10 lg:py-12 px-8 text-white'>
        <div className='container flex flex-wrap flex-col md:flex-row justify-between gap-y-8 lg:px-0'>
          <div className='flex flex-col gap-2 text-sm opacity-60'>
            <p className='font-bold'>Eteläpohjalaiset Spelit</p>
            <p className='text-xs'>Kansanmusiikkiyhdistys ry</p>
            <p className='text-xs'>Yrjöntie 4</p>
            <p className='text-xs'>60560 HALKOSAARI</p>
            <a className='font-medium text-xs text-accent-500' href="mailto:ep.spelit@gmail.com">ep.spelit@gmail.com</a>
          </div>
          <div className='flex flex-col gap-2 text-sm opacity-60'>
            <p className='font-bold'>Puheenjohtaja Timo Saarimäki</p>
            <p className='font-medium text-xs'>044 5303 405</p>
            <a className='font-medium text-xs text-accent-500' href="mailto:timo.saarimaki@gmail.com">timo.saarimaki@gmail.com</a>
          </div>
          <div className='flex flex-col gap-2 text-sm opacity-60'>
            <p className='font-bold'>Sihteeri Elli Asunmaa</p>
            <p className='font-medium text-xs'>040 725 2609</p>
            <a className='font-medium text-xs text-red-500' href="mailto:elli.asunmaa@gmail.com">elli.asunmaa@gmail.com</a>
          </div>
        </div>

        <div className='h-[1px] w-full bg-white my-8 bg-opacity-20'></div>

        <div className='w-full flex flex-col md:flex-row gap-4 justify-between'>
          <div className='flex flex-col gap-2 text-sm opacity-60 w-full'>
            <p className='font-bold'>
              Copyright {currentYear} © {pageName} Kansanmusiikkiyhdistys ry.
            </p>
            <p className='text-xs'>Website by {author}</p>
          </div>

          <div id='right' className='flex gap-4 xl:gap-5 items-center text-white/80 px-1'>
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
    </div>
  )
}

export default Footer
