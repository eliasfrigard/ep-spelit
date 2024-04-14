import React from 'react'
import Script from 'next/script'
import type { AppProps } from "next/app"
import { Montserrat } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

// Define Montserrat font
const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mont',
})

const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <div id="__next" className={`${mont.className} font-mont`}>
          <Script src="/static/script.js" />
          <Component {...pageProps} />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default MyApp
