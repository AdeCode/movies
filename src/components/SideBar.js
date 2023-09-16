import React from 'react'
import Logoblack from '../images/Logoblack.png'
import Logout from '../images/Logout.png'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'


function SideBar() {
  return (
    <NavContainer className='border py-[50px] box-border w-full rounded-r-2xl lg:rounded-r-[50px] grid grid-col-1'>
      
      <img src={Logoblack} alt='logo' />

      <ul className='flex h-fit w-full flex-col items-center text-[666] text-xl'>
          <li className='h-[86px] w-full flex justify-center items-center'>
            <NavLink to='/' className='w-full text-xl font-semibold flex justify-center items-center h-full'>Home</NavLink>
          </li>
          <li className='h-[86px] w-full flex justify-center items-center'>
            <NavLink to='/movie/:id/details' className='w-full text-xl font-semibold flex justify-center items-center h-full'>Movies</NavLink>
          </li>
          <li className='h-[86px] w-full flex justify-center items-center'>
            <NavLink to='/series' className='w-full text-xl font-semibold flex justify-center items-center h-full'>TV Series</NavLink>
          </li>
          <li className='h-[86px] w-full flex justify-center items-center'>
            <NavLink to='/upcoming' className='w-full text-xl font-semibold flex justify-center items-center h-full'>Upcoming</NavLink>
          </li>
        </ul>
        <div className='flex justify-center'>
          <div className='border mb-11 flex flex-col items-center rounded-[20px] w-[170px] pt-[42px] px-4 border-[#BE123C]'>
            <h2 className='font-semibold text-start text-[15px]'>Play movie quizes and earn free tickets</h2>
            <p className='mb-2'>50k people are playing now</p>
            <span className='text-[#BE123C] text-xs font-medium py-[6px] px-[17px] bg-[#fecdd3] rounded-[30px]'>Start playing</span>
          </div>
        </div>
      <div className='flex cursor-pointer justify-center'>
        <img src={Logout} alt='logout' className='w-[30px] h-[30px]'/>
        <h2>Log out</h2>
      </div>
    </NavContainer>
  )
}

export default SideBar

const NavContainer = styled.div`
  ul a.active{
    background: rgba(190, 18, 60, 0.10);
    border-right: 4px solid #BE123C;
  }
`