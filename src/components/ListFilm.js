import React from 'react'
import { useState, useEffect } from 'react'
export default function ListFilm(props) {
    const [tabID, setTabID] = useState(0)
    const tabs = props.list 
    const title = props.title
    const changeTab = (event) => {
        let id = event.currentTarget.getAttribute('value');
        setTabID(Number(id))
    }
    const isBg = props.bg === true ?  `url(${process.env.PUBLIC_URL}/images/img/bglist.svg)` : "unset"
  
    return (
    <div className="w-full font-sans">
        <div className='mt-[30px] ml-[40px] mb-[20px] w-auto flex justify-start items-center'>
            <div className='w-auto  text-[22px] mr-5'>{title}</div>
            <div className='w-auto border border-slate-950 rounded-[12px] flex justify-center text-center'>
                {tabs.map((x, index) => {
                    const isShowing = index === tabID ? "rgba(3,37,65,1)" : "unset";
                    const isTexting = index === tabID ? "#1ed5a9" : "unset"
                    return (
                        <div onClick={changeTab} value={index} key={index} 
                        className='w-[100px] rounded-xl' 
                        style={{background: isShowing, color:isTexting }}>
                            {x.title}
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='w-full h-[360px] px-[40px]  flex overflow-auto scrollbar scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300'
            style={{
                backgroundImage: isBg,
                backgroundSize: "100%", 
                backgroundPosition: "50% 80%",
                backgroundRepeat:"no-repeat"
            }}>
            {tabs[tabID].listFilm.map((film) => {
                return (
                    <div className='w-[150px] flex-none mr-[20px] relative'>
                        <img className='w-full h-[225px] rounded-xl ' src={"https://image.tmdb.org/t/p/w500/"+film.poster_path} />
                        <div className='w-full absolute top-[60%]' >
                            <div className='w-[40px] h-[40px]'>
                                
                            </div>
                            <div className='w-full'>
                                <p className='font-bold text-[15px]'>{film.original_title}</p> 
                                <p className='font-thin text-[14px] text-gray-500'>{film.release_date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div> 
  )
}
    