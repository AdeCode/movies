import React from 'react'
import Logo from '../images/Logo.png'
import Menu from '../images/Menu.png'
import imdb from '../images/imdb.png'
import fruit from '../images/fruit.png'
import play from '../images/Play.svg'

function Header() {
  return (
    <header className='bg-headerBg lg:h-[600px] px-[100px]'>
        <nav className='flex justify-between py-5 mb-[100px]'>
          <img src={Logo} alt='movieBox'/>
          <div className='border border-white w-[525px] rounded-md flex justify-between items-center px-[10px] py-[6px]'>
            <input type='text' className='text-base bg-transparent w-full' placeholder='what do you want to watch?' name='search'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='flex text-white items-center gap-7'>
            <h2 className='font-bold text-base'>Sign in</h2>
            <span className='bg-red-600 flex justify-center items-center h-[40px] w-[40px] rounded-[50%]'>
              <img src={Menu} alt='menu'/>
            </span>
          </div>
        </nav>
        <div className='w-[404px] text-white flex flex-col gap-4'>
            <h2 className='font-bold text-5xl'>John Wick 3 : Parabellum</h2>
            <div className='flex gap-[34px]'>
              <div className='flex gap-[10px]'>
                <img src={imdb} alt='imdb'/>
                <h3 className='font-normal text-xs'>86.0/100</h3>
              </div>
              <div className='flex gap-[10px]'>
                <img src={fruit} alt='fruit'/>
                <h3 className='font-normal text-xs'>97%</h3>
              </div>
            </div>
            <p className=''>
              John Wick is on the run after killing a member of the international assassins' 
              guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <button className='flex items-center py-2 px-4 bg-[#BE123C] rounded-md gap-2 lg:w-[169px]'>
              <img src={play} alt='play'/>
              <h2 className='font-bold text-sm uppercase'>WATCH TRAILER</h2>
            </button>
        </div>
    </header>
  )
}

export default Header