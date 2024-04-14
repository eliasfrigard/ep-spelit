import { useState, useEffect } from 'react'

const Footer = ({ 
  pageName, 
  author
 } : {
  pageName: string
  author: string
 }) => {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const year = new Date().getFullYear()
    setCurrentYear(year.toString())
  }, [])

  return (
    <div className='bg-primary-50 absolute w-full flex justify-center py-12 px-8 md:px-0 bg-primary-600 text-white'>
      <div className='container flex flex-wrap gap-y-8 px-8'>
        <div className='order-1 w-1/4 min-w-[250px] flex flex-col gap-2 text-sm opacity-60'>
          <p>Eteläpohjalaiset Spelit</p>
          <p className='text-xs'>Kansanmusiikkiyhdistys ry</p>
          <p className='text-xs'>Yrjöntie 4</p>
          <p className='text-xs'>60560 HALKOSAARI</p>
          <a className='text-xs text-accent-500' href="mailto:ep.spelit@gmail.com">ep.spelit@gmail.com</a>
        </div>
        <div className='order-2 w-1/4 min-w-[250px] flex flex-col gap-2 text-sm opacity-60'>
          <p>Puheenjohtaja Timo Saarimäki</p>
          <p className='text-xs'>044 5303 405</p>
          <a className='text-xs text-accent-500' href="mailto:timo.saarimaki@gmail.com">timo.saarimaki@gmail.com</a>
        </div>
        <div className='order-3 w-1/4 min-w-[250px] flex flex-col gap-2 text-sm opacity-60'>
          <p>Puheenjohtaja Timo Saarimäki</p>
          <p className='text-xs'>044 5303 405</p>
          <a className='text-xs text-accent-500' href="mailto:timo.saarimaki@gmail.com">timo.saarimaki@gmail.com</a>
        </div>
        <div className='order-4 w-1/4 min-w-[250px] flex flex-col gap-2 text-sm opacity-60'>
          <p className=''>
            Copyright {currentYear} © {pageName}
          </p>
          <p className='text-xs'>Website by {author}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer