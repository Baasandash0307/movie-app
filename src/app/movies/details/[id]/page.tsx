'use client'
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import { ACCESS_TOKEN } from '@/app/constants';
import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Details = () => {

  const params = useParams();
  const searchParams = useSearchParams();
  const [details, setDetails] = useState([]);


  const getMoviesById = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/' +
      `/movie/${params.id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(res)
    setDetails(res.data);


  }
  useEffect(() => {
    getMoviesById();
  }, [])

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div>
        <div>
          <h1>{details.title}</h1>
          <p>{details.release_date}</p>
          <p>{details.runtime}min</p>
        </div>

        <div>
          <p>Rating</p>
          <img src='/star.png'></img>
          <p>{details.vote_average}/10</p>
          <p>{details.vote_count}</p>
        </div>

        <div>
          {details.poster_path && (
            <img className="rounded-[8px] w-[1000px]" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}></img>
          )}
        </div>
      </div>

      <div>
        {/* {details.genres.map((asd) => (
          <p>{asd}</p>
        ))} */}

        <div>
          <p>{details.overview}</p>
        </div>

        <div>
          
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default Details