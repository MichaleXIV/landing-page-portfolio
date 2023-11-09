import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const AndomusDocumentation = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-button2 font-bold text-xl mb-5 mt-5'>ANDOMUS DOCUMENTATION</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio-putra/andomus-doc.png' 
            alt='Image'
            height={500}
            width={1000}
            objectFit='contain'
          />
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Andomus Platform Documentation, how to use all Andomus platforms, such as Andomus Mobile, ANTS Mobile, Pilihanku Mobile / Pilihanku Web
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-button1 underline' target='_blank' rel='noreferrer' href="https://docs.andomus.com/">
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
                <Image src='/assets/images/docusaurus.png' alt='docusaurus' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Docusaurus</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default AndomusDocumentation