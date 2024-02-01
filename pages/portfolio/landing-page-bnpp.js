import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const LandingPageBPP = () => {

  return (
    <div>
      <Header title='Muhammad Maulana Saputra Site' />
      <Template menu='/portfolio'>
        <h2 className='text-button2 font-bold text-center text-xl mb-5 mt-5'>LANDING PAGE GEOPORTAL BNPP</h2>
        <div className='text-center'>
          <Image
            src='/assets/images/portfolio-putra/landing-page-bnpp2.png'
            alt='Image'
            width={1000}
            height={500}
            objectFit='contain' />
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Smart Center Indonesia is a Tutoring Center, Private Lessons to Home, Courses for All Levels of Education and the General in Pekanbaru. This application manage from scheduling, student attendance to payroll
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-button1 underline' target='_blank' rel='noreferrer' href="https://geoportal.mitratechindonesia.co.id/">
              Click here
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>Front-End Web Developer</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/typescript.png' alt='Typescript' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Typescript</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/next.png' alt='Next Js' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Next JS</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default LandingPageBPP