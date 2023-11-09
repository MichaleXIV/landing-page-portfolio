import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const ChattingApp = () => {

    return (
        <div>
            <Header title='Andrio Pratama Sirait Site' />
            <Template menu='/portfolio'>
                <h2 className='text-button2 font-bold text-center text-xl mb-5 mt-5'>CHATTING APP</h2>
                <div className='text-center xl:flex gap-4'>
                    <Image
                        src='/assets/images/portfolio-putra/chating-app.png'
                        alt='image'
                        width={500}
                        height={300}
                        objectFit='contain' 
                    />
                    <Image
                        src='/assets/images/portfolio-putra/chating-app2.png'
                        alt='Image'
                        width={500}
                        height={300}
                        objectFit='contain' />
                </div>
                <p className='mb-3 mt-10 text-justify'>
                    For practice: create a conversational app
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
                    <div className='p-3 px-5'>
                        <p className='font-bold'>Access:</p>
                        <a className='text-button1 underline' href="#">
                            Click here
                        </a>
                    </div>
                    <div className='p-3 px-5'>
                        <p className='font-bold'>Role:</p>
                        <p>Full-Stack Developer</p>
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

export default ChattingApp