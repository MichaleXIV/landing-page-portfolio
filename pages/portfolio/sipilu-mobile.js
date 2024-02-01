import React from 'react'
import { Header, Template } from '../../components';
import Image from 'next/image';

const sipiluMobile = () => {
    return (
        <div>
            <Header title='Muhammad Maulana Saputra Site' />
            <Template menu='/portfolio'>
                <h2 className='text-button2 font-bold text-xl mb-5 mt-5'>SIPILU MOBILE</h2>
                <div className='text-center'>
                    <Image
                        src='/assets/images/portfolio-putra/sipilu-logo.png'
                        alt='Image'
                        height={500}
                        width={1000}
                        objectFit='contain'
                    />
                </div>
                <p className='mb-3 mt-10 text-justify'>
                Sipilu is an App that presents a digital innovation designed to win legislative elections based on the Statistical, Geospatial and Artificial intelligence Analytical Application Platform to assist winning process by providing certainty One NIK One Data at each level of selection so that the resulting data is more objective and accurate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
                    <div className='p-3 px-5'>
                        <p className='font-bold'>Access:</p>
                        <a className='text-button1 underline' target='_blank' rel='noreferrer' href="https://sipilu.andomus.com/">
                            Click here
                        </a>
                    </div>
                    <div className='p-3 px-5'>
                        <p className='font-bold'>Role:</p>
                        <p>Back-End Developer</p>
                    </div>
                    <div className='p-3 px-5'>
                        <p className='font-bold'>Technology:</p>
                        <div className='grid grid-cols-3 gap-3  mt-5'>
                            <div className='text-center'>
                                <Image src='/assets/images/laravel.png' alt='laravel' width={100} height={40} objectFit='contain' />
                                <div className='text-sm'>Laravel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </div>
    )
}

export default sipiluMobile;