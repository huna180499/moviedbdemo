import React from 'react'
import { leaderboard } from '../data/leaderboard'

export default function Leaderboard(props) {
    function getTopEdits(arr) {
        const result = arr.reduce(
          (acc, person) => {
            // So sánh và cập nhật giá trị lớn nhất cho "All Time Edits"
            if (person.alltime > acc.maxAllTimeEdits) {
              acc.maxAllTimeEdits = person.alltime;
            }
      
            // So sánh và cập nhật giá trị lớn nhất cho "This Week Edits"
            if (person.thisweek > acc.maxThisWeekEdits) {
              acc.maxThisWeekEdits = person.thisweek;
            }
      
            return acc;
          },
          {
            maxAllTimeEdits: Number.NEGATIVE_INFINITY,
            maxThisWeekEdits: Number.NEGATIVE_INFINITY,
          }
        );
      
        return result;
    }
    const { maxAllTimeEdits, maxThisWeekEdits } = getTopEdits(leaderboard);
    console.log(maxAllTimeEdits)
    console.log(maxThisWeekEdits)
    const updateList = leaderboard.map((x) => {
        return {
            ...x,
            rateAlltime: (x.alltime / maxAllTimeEdits)*100,
            rateThisweek: (x.thisweek / maxThisWeekEdits)*100  
        }
    })
    return (
    <div className='my-[30px] px-[40px]'>
        <div className=' w-[300px] flex justify-center items-center my-[20px]'>
            <div className='w-1/2 text-[22px] font-medium'>Leaderboard</div>
            <div className='w-1/2'>

            </div>

        </div>
        <div className='grid grid-cols-2 gap-[20px] h-[380px] w-full'>
            {updateList.map((x) => {
                x.rateAlltime =  x.rateAlltime*0.9
                x.rateThisweek = x.rateThisweek*0.9
                return <div className='flex h-[56px]'>
                    <div className='w-auto' style={{aspectRatio:'1/1'}}>
                        <div className='w-full h-full m-auto border border-black rounded-full'>
                            {x.avatar !== "" ? (
                            <img src={x.avatar} className='w-full h-full rounded-full' />
                            ) : (
                            <div className='w-full h-full flex flex-col justify-center rounded-full text-center text-white'
                                style={{backgroundColor: x.color}}>
                                    {x.name.charAt(0)}
                            </div>
                            )} 
                        </div>
                    </div>
                    <div className='w-full px-4' >
                        <div className='font-bold'>{x.name}</div>
                        <div className='h-[14%] rounded-xl relative my-1' 
                            style={{
                                width:x.rateAlltime+"%",
                                background:"linear-gradient(to right, rgba(192, 254, 207, 1) 0%, rgba(30, 213, 169, 1) 100%) "
                            }}>
                            <div className='absolute text-[13px] left-[105%] top-[-5px]'>{x.alltime}</div>   
                        </div>
                        <div className='h-[14%] rounded-xl relative' 
                            style={{
                                width:x.rateThisweek+"%",
                                background:"linear-gradient(to right,rgba(253,193,112,1) 0%,rgba(217,59,99,1) 100%)"
                            }}>
                            <div className='absolute text-[13px] left-[105%] top-[-5px]'>{x.thisweek}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
