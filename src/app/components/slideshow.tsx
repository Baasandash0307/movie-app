'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";

const Slideshow = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setMovieList(movies.data.results.slice(0, 4)); 
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movieList.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [movieList]);

  return (
    <Carousel className="w-[2000px] flex justify-center mx-auto overflow-hidden mt-10">
      <CarouselContent
        className="w-full h-[800px] flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movieList.map((movie) => (
          <CarouselItem key={movie.id} className="w-full flex-shrink-0">
            <div className="absolute text-white w-[404px] h-[264px] mt-[258px] ml-[180px]">
              <p className="text-2xl">Now Playing:</p>
              <p className="font-bold text-5xl">{movie.title}</p>
              <div className="flex items-center gap-1 mt-4">
                <img className="w-5 h-5" src="star.png" alt="star icon" />
                <p className="font-bold">{movie.vote_average}</p>
                <p className="text-gray-500">/10</p>
              </div>
              <p className="mt-3">{movie.overview}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setCurrentIndex((currentIndex - 1 + movieList.length) % movieList.length)} />
      <CarouselNext onClick={() => setCurrentIndex((currentIndex + 1) % movieList.length)} />
    </Carousel>
  );
};

export default Slideshow;