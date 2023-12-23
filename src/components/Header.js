import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.svg'
import search from '../images/search.svg'
import plus from '../images/jpg/plus.jpg'
export default function Header() {
  return (
    <div className='font-sans' >
      <div className='h-64px bg-primary text-white font-sans font-semibold text-[14px] flex items-center text-center' >
        <div className='mx-auto h-10 w-full max-w-1300 flex justify-between items-center px-10'>
          <div className='flex w-485px '>
            <Link to='/moviedbdemo' className='w-2/6 mr-4'><img src={logo}/></Link>
            <div className='w-1/6'>Movies</div>
            <div className='w-1/6'>TV Shows</div>
            <div className='w-1/6'>People</div>
            <div className='w-1/6'>More</div>
          </div>
          <div className='w-380px flex justify-between items-center '>
            <div className='w-1/12'>
              <img className='w-[20px] h-[20px]' src={plus} />
            </div>
            <div className='w-[28px] flex flex-col justify-center'>
              <div className='w-full h-[28px] border rounded-lg flex flex-col justify-center text-center '> VI</div>
            </div>
            <Link to='login' className='w-3/12' >Đăng nhập</Link>
            <div className='w-4/12'>Tham gia TMDB</div>
            <div className='w-1/12'><img src={search}/></div>
          </div> 
        </div>
      </div>
      <Outlet />
    </div>
  )
}
