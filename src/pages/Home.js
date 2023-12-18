import React from 'react'
import { useState, useEffect } from 'react'
import home1 from '../images/img/home.jpg'
import home2 from "../images/img/home-2nd.jpg"
import home3 from '../images/img/home-3rd.jpg'
import Leaderboard from '../components/Leaderboard'
import ListTrailer from '../components/ListTrailer'
import ListFilm from '../components/ListFilm'

import { leaderboard } from '../data/leaderboard'
import { trailers } from '../data/trailers'

// import { trending, popular } from '../api/films'
import { fetchTrendingToday, fetchTrendingThisWeek, fetchTopRatedMovies } from '../api/films';

export default function Home() {
  const [trendingToday, setTrendingToday] = useState([]);
  const [trendingThisWeek, setTrendingThisWeek] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayData = await fetchTrendingToday();
        setTrendingToday(todayData.results);
        console.log(todayData)
        const weekData = await fetchTrendingThisWeek();
        setTrendingThisWeek(weekData.results);

        const topRatedData = await fetchTopRatedMovies();
        setTopRatedMovies(topRatedData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);
  const trending = [
        {
            title:"Today",
            listFilm: trendingToday
        },
        {
            title:"This Week",
            listFilm:trendingThisWeek
        }
   ]
  
  const popular = [
    {
      title: 'Popular',
      listFilm: topRatedMovies
    }
  ]
  return (
    <div className='content w-full max-w-1300 mx-auto font-sans'>
      <div className='w-full h-[360px] relative text-white'>
        <img className='w-full h-full' src={home1}/>
        <div className='w-full h-[244px] absolute top-[56px] px-[40px] py-[30px]  '>
          <div className='h-[88px] mb-[20px]'>
            <p className='h-[48px] text-5xl font-bold'> Welcome.</p>
            <p className='h-[40px] text-3xl  font-sans '>Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          
          <input type='text' className='w-full h-[46px] pl-5 mt-[30px] rounded-3xl text-black' placeholder="Search for a movie, tv show, person......"></input>
        </div>
      </div>

      <ListFilm title="Trending" list={trending} bg={true}/>
      <ListTrailer title="Lastest Trailers" list={trailers}/>
      <ListFilm title="What's Popular" list={popular} /> 
      
      <div className='w-full h-[280px] relative text-white overflow-hidden'>
        <img className='w-full absolute top-[-45%]' src={home3}/>
        <div className='w-full h-auto absolute inset-x-0 inset-y-[30px] px-[40px] font-sans '  >
          <div className=' h-[40px] text-[30px]  font-bold'>Join Today</div>
          <div className='flex h-auto w-auto py-[20px]'>
            <div className='w-2/3 text-[1.2rem] mr-[40px]'>
                Get access to maintain your own &nbsp;
                <span className='italic text-gray-400'>custom personal lists, track what you've seen </span>
                and search and filter for <span className='italic text-gray-400'>what to watch next—</span>
                regardless if it's in theatres, on TV or 
                available on popular streaming services like .
            </div>
            <div className='w-1/3 text-[1em]'>
              <ul className='list-disc opacity-80'>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Leaderboard list={leaderboard}/>
    </div>
  )
}
