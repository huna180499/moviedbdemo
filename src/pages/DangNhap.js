import React from 'react'
import { Link } from 'react-router-dom'

export default function DangNhap() {
  return (
    <div className='content max-w-1300 mx-auto h-[572px] px-[40px] py-[30px]'>
        <p className='font-bold text-[22px] '>Login to your account</p>
        In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. 
        If you do not have an account, registering for an account is free and simple.&nbsp;
        <Link to='/moviedbdemo/signup' className='text-lightBlue hover:underline'>Click here</Link> to get started.
        <br></br> <br></br>
        If you signed up but didn't get your verification email, click here to have it resent.
        <div className='my-[30px]'>
          <div>Username</div>
          <input type='text' className='w-[100%] h-[40px] mb-[20px] border-2 rounded-md'/>
          <div>Password</div>
          <input type='password' className='w-[100%] h-[40px] mb-[20px] border-2 rounded-md'/>
          <div className='flex max-w-[260px] h-[40px] text-center items-center'>
            <div className='w-[50%] h-[100%] rounded-lg bg-lightBlue  text-white font-bold flex flex-col justify-center'>Đăng nhập</div>
            <div className='w-[50%] text-lightBlue'>Reset password</div>
          </div>
        </div>
     
    </div>
  )
}

