import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="bg-primary1 h-full w-full lg:w-2/5 rounded-tl-lg rounded-bl-lg rounded-tr-lg lg:rounded-tr-none relative">
      <div className="h-[350px] lg:h-full w-full relative">
        <Image
          alt='Foto Muhammad Maulana Saputra'
          src='/assets/images/foto-diri-hd.png'
          priority={true}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className="absolute bottom-0 p-5 text-white text-center w-full bg-secodary1 rounded-bl-lg">
        <h2 className="font-bold text-primaryText2">Muhammad Maulana Saputra</h2>
        <h2 className='text-sm font-light text-primaryText1'>Front-End Web Developer</h2>
        <div className="flex-1 flex-row justify-center items-center mt-5">
          {/* <a target="_blank" rel='noreferrer' href="https://www.facebook.com/yangngambiltaik/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.instagram.com/andrio.sirait/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/muhammadmaulanasaputra/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faLinkedin} className='text-primaryText2' size="xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile