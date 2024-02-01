import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const LandingPageOpendataCilegon = () => {

  return (
    <div>
      <Header title='Muhammad Maulana Saputra Site' />
      <Template menu='/portfolio'>
        <h2 className='text-button2 font-bold text-xl mb-5 mt-5'>LANDING PAGE OPENDATA CILEGON</h2>
        <div className='text-center'>
          <Image
            src='/assets/images/portfolio-putra/opendata-cilegon.png'
            alt='Image'
            width={1000}
            height={500}
            objectFit='contain' />
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Cari data tentang Kota Cilegon bisa dengan mudah, dimana saja, dan kapan saja. Di sini Anda bisa akses koleksi data dan artikel terlengkap Kota Cilegon dengan cepat, mudah, dan akurat dengan berbagai fitur bermanfaat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-button1 underline' href="https://satudata.cilegon.go.id/opendata/">
              Click here
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>Front-End Web Developer</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3  mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/html.png' alt='Javascript' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>HTML</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/css.png' alt='Javascript' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>CSS</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/javascript.png' alt='Javascript' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Javascript</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default LandingPageOpendataCilegon