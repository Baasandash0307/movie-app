"use client";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Slideshow from "./components/slideshow";

export default function Home() {

  const [movieList, setMovieList] = useState([])


  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
  };
  const getMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
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

          <div className="w-full h-[600px] pt-[24px]">
            <Slideshow></Slideshow>
          </div>
        </div>

        <div className="w-[1700px] mx-auto mt-[180px]">
          <div className="flex justify-between">
            <h1 className="text-[24px] font-bold">Upcoming</h1>

            <div className="flex items-center gap-1">
              <button>See More</button>
              <img className="w-4 h-4" src="arrow-right.png"></img>
            </div>
          </div>

          <div className="flex flex-around flex-wrap pt-[32px]">
            {movieList.slice(0, 10).map((movie) => (
              <div>
                {movie.poster_path && (
                  <img className="rounded-xl w-auto h-[500px] gap-8" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
                )}
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src="star.png"></img>
                  <p className="font-bold">{movie.vote_average}</p>
                  <p className="text-gray-500">/10</p>
                </div>
                
                <h1 className="text-[18px] font-bold flex flex-wrap">{movie.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
