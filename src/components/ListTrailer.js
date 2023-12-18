import React from 'react'
import { useState } from 'react'
import home2 from '../images/img/home-2nd.jpg'


const options = {method: 'GET', headers: {accept: 'application/json'}};

export default function ListTrailer(props) {
    const [tabID, setTabID] = useState(0)
    const tabs = props.list 
    const title = props.title
    const changeTab = (event) => {
        let id = event.currentTarget.getAttribute('value');
        setTabID(Number(id))
    }
    return (
    <div className="w-full h-[350px]"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/img/home-2nd.jpg)`,
            backgroundSize: "cover", 
            backgroundPosition: "center center",
        }}
    >
         <div className='w-full h-full text-white pt-[30px] relative'
              style={{background: "linear-gradient(to right,rgba(3,37,65,.75) 0%,rgba(3,37,65,.75) 100%)"}}>
            <div className='w-auto ml-[40px] flex justify-start items-center font-medium'>
                <div className='w-auto  text-[22px] mr-5'>{title}</div>
                <div className='w-auto border border-lgreen rounded-[12px] flex justify-center text-center'>
                    {tabs.map((x, index) => {
                        const isShowing = index === tabID ? "rgba(30,213,169)" : "unset";
                        const isTexting = index === tabID ? "rgba(3,37,65)" : "white"
                        if(x !== "") return (
                            <div onClick={changeTab} value={index} key={index} 
                            className='w-[100px] rounded-xl' 
                            style={{background: isShowing, color:isTexting }}
                            >
                                {x.title}
                            </div>
                        ) 
                    })}
                </div>
            </div>
            <div className='w-full h-[285px] px-[20px] py-[10px] absolute bottom-0 flex overflow-auto scrollbar scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300'>
            {tabs[tabID].listFilm.length > 0 ? (
                 tabs[tabID].listFilm.map((film) => {
                    return (
                        <div className='w-[300px] h-[245px] ml-[20px] flex-none relative'>
                            <img className='w-full h-[170px] rounded-xl ' src={film.poster} />
                            <div className='w-full absolute top-[60%] text-center' >
                                <div className='w-[40px] h-[40px]'></div>
                                <div className='w-full'>
                                    <p className='font-bold text-[15px]'>{film.name}</p> 
                                    <p className='font-thin text-[14px] '>{film.content}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : <div>This panel didn't return any results. Try refreshing it. </div>
            }
            
        </div>
        </div>    
    </div> 
  )
}
