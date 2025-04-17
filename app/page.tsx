import { ViedeoUpload } from '@/app/components/VideoUploadForm'

import React from 'react'
import { Hero } from './pages/Hero'
import { Nav } from './components/Nav'

export default function Home() {
  return (
    <main className='overflow-hidden w-full h-screen mx-auto bg-[#FFFFFF]'>
      <Nav />
      <Hero />
    </main>
  )
}

