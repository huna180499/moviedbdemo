import React from 'react'
import { Link } from 'react-router-dom'
export default function DangKy() {
  return (
    <div className='content max-w-1300 mx-auto h-[572px] px-[40px] py-[30px]'>
        <div className='flex h-[100%]'>
            <div className='h-[100%] w-[20%] border rounded-md shadow-option'>
                <div className='h-[90px] w-[100%] rounded-t-md bg-lightBlue text-white text-[16px] font-bold flex flex-col justify-center p-[30px] '>
                    Benefits of being a member
                </div>
                <div className='h-[420px] px-[5px] py-[7px]'>
                    <ul className='ml-[30px] h-[100%] flex flex-col justify-between list-disc'>
                        <li> Find something to watch on your subscribed streaming services</li>
                        <li> Log the movies and TV shows you have watched</li>
                        <li> Keep track of your favourite movies and TV shows and get recommendations from them</li>
                        <li> Build and maintain a personal watchlist</li>
                        <li> Build custom mixed lists (movies and TV)</li>
                        <li> Take part in movie and TV discussions</li>
                        <li> Contribute to, and improve the information in our database</li>
                    </ul>
                </div>
            </div>
            <div className='h-[100%] w-[80%] px-[30px]'>
                <h2 className='font-bold text-[22px] mb-[10px]'>Sign up for an account</h2>
                <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                <div className='my-[30px]'>
                    <div>Username</div>
                    <input type='text' className='w-[100%] h-[40px] mb-[10px] border-2 rounded-md'/>
                    <div>Password (4 characters minimum)</div>
                    <input type='password' className='w-[100%] h-[40px] mb-[10px] border-2 rounded-md'/>
                    <div>Password Confirm</div>
                    <input type='password' className='w-[100%] h-[40px] mb-[20px] border-2 rounded-md'/>
                    <div>Email</div>
                    <input type='email' className='w-[100%] h-[40px] mb-[20px] border-2 rounded-md'/>
                    <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

                    <div className='flex max-w-[200px] h-[40px] my-[20px] text-center items-center'>
                        <div className='w-[60%] h-[100%] rounded-lg bg-lightBlue text-white font-bold flex flex-col justify-center '>Đăng ký</div>
                        <Link to='/moviedbdemo' className='w-[40%] text-lightBlue text-center ' >Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
  )
}
