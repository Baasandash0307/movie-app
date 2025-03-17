'use client'

import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";


const TopRated = () => {

    const [movieList, setMovieList] = useState([])

    const getMovies = async () => {
        const movies = await axios.get(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );
        setMovieList(movies.data.results)

    };
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="w-[1700px] mx-auto mt-[40px]">
            <div className="flex justify-between">
                <h1 className="text-[24px] font-bold">Top Rated</h1>

                <div className="flex items-center gap-1">
                    <button>See More</button>
                    <img className="w-4 h-4" src="arrow-right.png"></img>
                </div>
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-2 mx-auto pt-[32px] gap-[33px]">
                {movieList.slice(0, 10).map((movieList) => (
                    <div>
                        {movieList.poster_path && (
                            <img className="rounded-tl-xl rounded-tr-xl  h-[500px] w-auto gap-8" src={`https://image.tmdb.org/t/p/original${movieList.poster_path}`} alt={`${movieList.title} Poster`}></img>
                        )}
                        <div className="flex items-center gap-1 pt-3 pl-4 bg-gray-100">
                            <img className="w-4 h-4" src="star.png"></img>
                            <p className="font-bold">{movieList.vote_average}</p>
                            <p className="text-gray-500">/10</p>
                        </div>

                        <div className=" h-[100px] bg-gray-100 rounded-bl-xl pl-4 pt-[2px] rounded-br-xl">
                            <h1 className="text-[20px] font-bold flex flex-wrap">{movieList.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRated;