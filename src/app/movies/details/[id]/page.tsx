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
  const [more, setMore] = useState([]);


  const getMoviesById = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/' +
      `/movie/${params.id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setDetails(res.data);
  }
  const getMoreLikeThis = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/' +
      `/movie/${params.id}/similar?language=en-US&page=2`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setMore(res.data);
    console.log(res);

  }

  useEffect(() => {
    getMoviesById();
    getMoreLikeThis();
  }, [])

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className='w-[1300px] mx-auto'>
        <div>
          <h1 className='text-[36px] font-bold'>{details.title}</h1>

          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <p>{details.release_date}</p>
              <p>•</p>
              <p>{details.runtime}min</p>
            </div>

            <div>
              <p className='text-[12px]'>Rating</p>
              <div className='flex'>
                <div className='flex'>
                  <img className='w-[30x] h-[30px]' src='/star.png'></img>
                </div>
                <div>
                  <div className='flex'>
                    <p className='text-[18px] font-bold'>{details.vote_average}</p>
                    <p className='text-[18px] text-gray-400'>/10</p>
                  </div>
                  <p className='text-gray-400'>{details.vote_count} vote(s)</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            {details.poster_path && (
              <img className="rounded-[8px] w-[1300px]" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}></img>
            )}
          </div>
        </div>

        <div className='border-1 border-gray-300 mt-8'></div>

        <div className='mt-6'>
          <div>
            <p className='text-[16px]'>{details.overview}</p>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default Details