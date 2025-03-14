"use client";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Slideshow from "./components/slideshow";

export default function Home() {

  const [movieList, setMovieList] = useState([])


  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/discover/movie",
  //   params: {
  //     include_adult: "false",
  //     include_video: "false",
  //     language: "en-US",
  //     page: "1",
  //     sort_by: "popularity.desc",
  //   },
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer ${ACCESS_TOKEN}`
  //   },
  // };
  const getMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    console.log(movies)
    setMovieList(movies.data.results)

  };
  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="flex justify-center">
      <div>
        <div>
          <div className="flex justify-center">
            <Header></Header>
          </div>

          <div className="w-full h-[600px]">
            <Slideshow></Slideshow>
          </div>
        </div>

        <div className="w-[1800px] mx-auto mt-[240px]">
          <div className="flex justify-between">
            <h1 className="text-[24px] font-bold">Upcoming</h1>

            <div className="flex items-center gap-1">
              <button>See More</button>
              <img className="w-4 h-4" src="arrow-right.png"></img>
            </div>
          </div>

          <div className="grid grid-cols-5 pt-[32px] gap-[33px]">
            {movieList.slice(0, 10).map((movieList) => (
              <div>
                {movieList.poster_path && (
                  <img className="rounded-tl-xl rounded-tr-xl w-auto h-[500px] gap-8" src={`https://image.tmdb.org/t/p/original${movieList.poster_path}`} alt={`${movieList.title} Poster`}></img>
                )}
                <div className="flex items-center gap-1 w-[333px] pt-3 pl-4 bg-gray-100">
                  <img className="w-4 h-4" src="star.png"></img>
                  <p className="font-bold">{movieList.vote_average}</p>
                  <p className="text-gray-500">/10</p>
                </div>

                <div className="w-[333px] h-[100px] bg-gray-100 rounded-bl-xl pl-4 pt-[2px] rounded-br-xl">
                  <h1 className="text-[20px] font-bold flex flex-wrap">{movieList.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
