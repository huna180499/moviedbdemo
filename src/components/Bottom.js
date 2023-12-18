import React from 'react'
import biglogo from '../images/biglogo.svg'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
export default function Bottom() {
    const h1Style = {
        fontSize:'18px',
        fontWeight: 'bolder'
    }

  return (
    <div className={`h-[320px] bg-primary pt-[80px] `}>
        <div className='w-full max-w-[880px] h-1/2 m-auto flex justify-between items-start text-white'>
            <div className='w-[25%] relative h-full mr-5'>
                <img className='w-[130px] h-[90px] absolute top-[-40px] right-0' src={biglogo} />
                <div className='rounded-xl h-[40px] w-full bg-white text-center flex flex-col justify-center absolute bottom-[-20px] ' 
                style={{color: "rgb(1,180,228)"}}>JOIN THE COMMUNITY</div>
            </div>
            <div className='w-[17%] '>
                <h1 style={h1Style}>THE BASIC</h1> 
                <a>Giới thiệu về TMDB</a><br/>
                <a>Contact Us</a><br/>
                <a>Support Forums</a><br/>
                <a>API</a><br/>
                <a>System Status</a><br/>
            </div>
            <div className='w-[16%] mr-8'>
                <h1 style={h1Style}>GET INVOLVED</h1>
                <a>Contribution Bible</a><br/>
                <a>Add New Movie</a><br/>
                <a>Add New TV Show</a><br/>
            </div>
            <div className='w-[15%] mr-2'>
                <h1 style={h1Style}>COMMUNUTY</h1>
                <a>Guidelines</a><br/>
                <a>Discussions</a><br/>
                <a>Leaderboard</a><br/>
            </div>
            <div className='w-[13%]'>
                <h1 style={h1Style}>LEGAL</h1>
                <a>Terms of Use</a><br/>
                <a>API Terms of Use</a><br/>
                <a>Privacy Policy</a><br/>
                <a>DMCA Policy</a><br/>

            </div>
        </div>
    </div>
  )
}
