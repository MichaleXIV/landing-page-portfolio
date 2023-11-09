import React from 'react'
import { Header,Template } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const menu = [{
  name: 'Landing Page Andomus',
  description: 'Company Profile From PT. Andomus Tech Universe',
  slug: 'landing-page-adomus',
  thumbnail: '/assets/images/portfolio-putra/andomus-lp.png'
}, {
  name: 'Andomus Documentation',
  description: 'Andomus Platform Documentation, how to use all Andomus platforms, such as Andomus Mobile, ANTS Mobile, Pilihanku Mobile / Pilihanku Web',
  slug: 'doc-andomus',
  thumbnail: '/assets/images/portfolio-putra/andomus-doc.png'
}, {
  name: 'Satudata Cilegon',
  description: 'Web portal for Cilegon City geospasial and opendata',
  slug: 'satudata-cilegon',
  thumbnail: '/assets/images/portfolio-putra/satudata-cilegon.png'
}, {
  name: 'Geospasial Cilegon',
  description: 'Mendukung perencanaan dan pemanfaatan ruang yang terintegrasi dalam rencana tata ruang, kesesuaian dan perizinan pemanfaatan masing masing sektor, penyelesaian tumpang tindih pemanfaatan ruang dan perbaikan data IGT masing masing sektor di Kota Cilegon',
  slug: 'geospasial-cilegon',
  thumbnail: '/assets/images/portfolio-putra/geospasial-cilegon.png'
}, {
  name: 'Opendata Cilegon',
  description: 'Cari data tentang Kota Cilegon bisa dengan mudah, dimana saja, dan kapan saja. Di sini Anda bisa akses koleksi data dan artikel terlengkap Kota Cilegon dengan cepat, mudah, dan akurat dengan berbagai fitur bermanfaat.',
  slug: 'opendata-cilegon',
  thumbnail: '/assets/images/portfolio-putra/opendata-cilegon.png'
}, {
  name: 'Landing Page BNPP',
  description: 'Geoportal Badan Nasional Pengelolaan Perbatasan merupakan Portal Informasi Geospasial untuk mendukung terwujudnya tata kelola perbatasan negara yang efektif dalam rangka perwujudan kawasan perbatasan negara sebagai halaman depan negara yang berdaya saing',
  slug: 'landing-page-bnpp',
  thumbnail: '/assets/images/portfolio-putra/landing-page-bnpp.png'
}, {
  name: 'Web Scrapping',
  description: 'For practice: Web scraping to get all product data with data updates once a day with cron job',
  slug: 'web-scrapping',
  thumbnail: '/assets/images/portfolio-putra/web-scrapping.png'
}, {
  name: 'Chatting App',
  description: 'For practice: create a conversational app',
  slug: 'chatting-app',
  thumbnail: '/assets/images/portfolio-putra/chating-app.png'
}]

const PortfolioItem = ({ item }) => {
  return <Link href={`/portfolio/${item.slug}`}>
    <a className='flex flex-col h-full items-center'>
      <div className="w-72 h-72 md:w-[280px] md:h-[280px] lg:w-[240px] lg:h-[240px] xl:w-[240px] xl:h-[240px] 2xl:h-[280px] 2xl:w-[280px] relative shadow-lg rounded-lg">
        <div className="bg-cover bg-center text-center z-0 rounded-lg">
          <Image 
            src={item.thumbnail} 
            alt='Image Project'
            layout='fill'
            className='rounded-lg'
            objectFit='cover'/>
        </div>
        <div className="opacity-0 rounded-lg hover:opacity-90 px-3 hover:bg-button1 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white font-semibold">
          <p className='font-normal text-center text-sm'>{ item.description }</p>
        </div>
      </div>
      <div className='my-5 w-full'>
        <p className='font-bold text-button1 text-center text-sm'>{ item.name }</p>

      </div>
    </a>
  </Link>
}

const Portfolio = () => {
  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-button2 font-bold text-xl mb-10 mt-5'>MY PORTFOLIO</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10 w-full justify-center items-center relative">
          { menu.map((item, index) => 
            <PortfolioItem key={`portfolio_${index}`} item={item} />
          )}
        </div>
      </Template>
    </div>
  )
}

export default Portfolio