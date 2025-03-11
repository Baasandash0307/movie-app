"use client";
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Slideshow from "./components/slideshow";


export default function HOME() {

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
  //     Authorization: `Bearer ${ACCESS_TOKEN}`,
  //   },
  // };
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
    <div>
      <Header></Header>
      <Slideshow></Slideshow>
      {movieList.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
          )}
        </div>
      ))}
    </div>
  );
}

