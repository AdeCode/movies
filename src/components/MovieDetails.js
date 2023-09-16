import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'


function MovieDetails() {
  const {id} = useParams()
  const api_key= '0347dccb667750cc190ce37b2ca674a6'
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)

  const img_1200 = 'https://image.tmdb.org/t/p/w1280'
  const backdropImage = `${img_1200}/${details?.backdrop_path}`
  console.log(backdropImage)


  const fetchMovie = async() => {
    setLoading(true)
    try{
      const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      setDetails(data.data)
      console.log(data.data)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [id])
  
  const convertStoMs = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    //minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds< 10 ? "0" + extraSeconds : extraSeconds;
    return minutes + 'h ' + extraSeconds+'m'
  }

  return (

    <div className='grid grid-cols-7 h-[100vh]'>
        <SideBar/>
        <div className="col-span-6 px-[38px] pt-[38px]">
          {
            loading ?
            <div className='flex w-full justify-center'>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
            :
            <div className='flex flex-col'>
            <div className={`h-[449px] w-full bg-no-repeat mb-[31px]`}>
              <img src={`${backdropImage}`} alt='movie' className='h-[449px] bg-no-repeat w-full'/>
            </div>
            <div className='grid grid-cols-4'>
              <div className='col-span-3'>
                <div className='flex mb-[25px]'>
                  <h2 data-testid='movie-title' className='text-[#404040] text-[23px] font-medium'>{details.original_title} • 2022 • PG-13 • </h2>
                  <span className='text-[#404040] text-[23px] font-medium mr-[17px]' data-testid='movie-title'>{convertStoMs(details.runtime)}</span>
                  <div className='text-[#B91C1C] flex items-center gap-3'>
                    {
                      details?.genres?.map(({name, id}) => (
                        <span className='border px-4 border-[#F8E7EB] rounded-[15px]'>{name}</span>
                      ))
                    }
                  </div>
                </div>
                <p data-testid='movie-overview' className='text-black mb-[36px] font-normal text-xl'>{details.overview}</p>
                <div className='flex gap-7 mb-[30px] flex-col'>
                  <div className='flex gap-2'>
                    <h3 className='text-black text-xl'>Director: </h3>
                    <span className='text-[#BE123C] text-xl'>Joseph Kosinski</span>
                  </div>
                  <div className='flex gap-2'>
                    <h3 className='text-black text-xl'>Writers: </h3>
                    <span className='text-[#BE123C] text-xl'>Jim Cash, Jack Epps Jr, Peter Craigi</span>
                  </div>
                  <div className='flex gap-2'>
                    <h3 className='text-black text-xl'>Stars: </h3>
                    <span className='text-[#BE123C] text-xl'>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                  </div>
                </div>
                <div className=''>
                    <button className='text-white bg-[#BE123C] rounded-[10px] px-5 py-3'>Top rated movie #65</button>
                </div>
              </div>
              <div className=''></div>
            </div>
          </div>
          }
          
        </div>
    </div>
  )
}

export default MovieDetails