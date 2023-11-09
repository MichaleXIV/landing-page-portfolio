import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Profile from './Profile'

const Template = ({ children, menu }) => {
  return (
    <main className="bg-primary2 p-3 md:p-20 lg:h-screen">
      <div className="bg-gray-50 rounded-lg lg:h-full relative flex flex-col lg:flex-row justify-start items-start">
        <Profile />
        <div className="ml-auto w-full h-full relative flex flex-col">
          <Menu active={menu} />
          <div className='px-7 md:px-20 flex justify-start items-center flex-col h-full overflow-auto relative'>
            { children }
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}

export default Template