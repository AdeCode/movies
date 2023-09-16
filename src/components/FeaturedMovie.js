import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'


function FeaturedMovie() {
    const apiKey = '0347dccb667750cc190ce37b2ca674a6'
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchMovies = () => {
        setLoading(true)
        try {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=${true}`)
                .then(res => {
                    setMovies(res.data.results.slice(0, 10))
                    console.log(res.data.results.slice(0, 10))
                    // console.log(movies)
                    setLoading(false)
                })
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchMovies()
    }, [])


    return (
        <div className='bg-white px-[100px] flex flex-col py-[70px]'>
            <div className='flex justify-between mb-11'>
                <h2 className='text-black text-4xl font-bold'>Featured Movie</h2>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#BE123C] text-lg'>See more</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-y-14'>
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
                        movies.map(movie => (
                            <MovieCard
                                title={movie.title}
                                imagePath={movie.poster_path}
                                key={movie.id}
                                release_date={movie.release_date}
                                id={movie.id}
                                movieGenres={movie.genre_ids}
                            />
                        ))
                }
                {/* <MovieCard/> */}
            </div>
        </div>
    )
}

export default FeaturedMovie