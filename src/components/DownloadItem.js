import { BsDownload } from 'react-icons/bs'
import AnimateIn from './AnimateIn'

export default function DownloadItem({ title, filename, file, className }) {
  return (
    <a href={file} rel="noopener noreferrer">
      <AnimateIn className={`flex items-center justify-between gap-8 p-6 md:p-8 min-h-[90px] cursor-pointer w-full border-l-8 border-[#283740] rounded-lg bg-[#D2D6D9] shadow-xs hover:bg-[#283740] hover:text-white text-[#283740] hover:text-primary-100 active:scale-[0.97] duration-150 select-none ${className}`}>
        <div className='flex flex-col justify-between gap-1'>
          <p className='text text-base md:text-normal font-medium font-mont tracking-wide leading-relaxed'>{title}</p>
          <p className='text hidden md:block text-sm italic tracking-wide'>{filename}</p>
        </div>

        <BsDownload className={`text-2xl min-w-[30px]`}></BsDownload>
      </AnimateIn>
    </a>
  )
}
