import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import strange from '../images/strange.png'
import fruit from '../images/fruit.png'
import imdb from '../images/imdb.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import moment from 'moment'

function MovieCard({ title, imagePath, release_date, id, movieGenres }) {
  const [genres, setGenres] = useState([])
  const img_300 = 'https://image.tmdb.org/t/p/w300'
  const default_image = 'https://www.movienewz.com/img/films/poster-holder.jpg'
  const date = new Date()
  const apiKey = '0347dccb667750cc190ce37b2ca674a6'

  const fetchGenres = async () => {
    try {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        .then(res => {
          setGenres(res.data.genres)
          console.log(res.data.genres)
          //console.log(genres)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const getGenres = (genreIds) => {
    const genreNames = []
    genreIds.forEach(genreId => {
      for(let i = 0; i < genres.length; i++) {
        if(genreId === genres[i].id){
          genreNames.push(genres[i].name)
        }
      }
    });
    return genreNames
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  // useEffect(() => {
  //   getGenres(movieGenres)
  // }, [movieGenres])
  
  const navigate = useNavigate()

  const gotoDetails = () => {
    navigate(`/movie/${id}/details`)
  }

  const addToFavourites = (event) => {
    event.stopPropagation();
    toast.success('Movie added to favourite', {
      theme: "colored",
    })
  }

  return (
    <div className='flex-col gap-4' data-testid='movie-card' onClick={gotoDetails}>
      <div className='relative'>
        <img data-testid='movie-poster' src={imagePath ? `${img_300}/${imagePath}` : default_image} alt='movie' />
        <Span className='type rounded-xl text-[#111827] text-xs uppercase absolute py-1 px-2 top-5 left-3'>TV series</Span>
        <Span onClick={addToFavourites} className='p-[5px] rounded-[50%] cursor-pointer absolute top-5 lg:right-[30px]'>
          <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB" />
          </svg>
        </Span>
      </div>
      <h3 data-testid='movie-release-date' className='text-[#9CA3AF] font-bold text-xs'>USA, {date.toUTCString(release_date)}</h3>
      <h3 data-testid='movie-title' className='text-[#111827] font-bold text-lg'>{title}</h3>
      <div className='flex gap-[34px] text-[#111827]'>
        <div className='flex gap-[10px]'>
          <img src={imdb} alt='imdb' />
          <h3 className='font-normal text-xs'>86.0/100</h3>
        </div>
        <div className='flex gap-[10px]'>
          <img src={fruit} alt='fruit' />
          <h3 className='font-normal text-xs'>97%</h3>
        </div>
      </div>
      <div className='flex gap-3'>
        {
          getGenres(movieGenres).map((genre,index) => (
            <h3 key={index} className='text-[#9CA3AF] font-bold text-xs'>
              {genre}
            </h3>
          ))
        }
      </div>
      
      {/* <h3 className='text-[#9CA3AF] font-bold text-xs'>
        Action, Adventure, Horror
      </h3> */}
    </div>
  )
}

export default MovieCard

const Span = styled.span`
background: rgba(243, 244, 246, 0.50);
backdrop-filter: blur(1px);
`