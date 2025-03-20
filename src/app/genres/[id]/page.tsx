
'use client'

import { ACCESS_TOKEN } from "@/app/constants";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Genre() {
    const params = useParams();

    const searchParams = useSearchParams();

    const genreName = searchParams.get('name')

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);

    const getMoviesByGenre = async () => {
        const res = await axios.get('https://api.themoviedb.org/3/' +
            `/discover/movie?language=en&with_genres=${params.id}&page=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );
        console.log(res)
        setMovies(res.data.results);

    }
    useEffect(() => {
        getMoviesByGenre();
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="w-[1700px] mx-auto">

                <div className="text-[24px] font-bold">
                    <h1>{genreName}</h1>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-2 mx-auto pt-[32px] gap-[33px]">
                    {movies.map((movies) => (
                        <button className="cursor-pointer">
                            {movies.poster_path && (
                                <img className="rounded-tl-xl rounded-tr-xl w-auto gap-8" src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}></img>
                            )}
                            <div className="flex items-center gap-1 pt-3 pl-4 bg-gray-100">
                                <img className="w-4 h-4" src="/star.png"></img>
                                <p className="font-bold">{movies.vote_average}</p>
                                <p className="text-gray-500">/10</p>
                            </div>

                            <div className=" h-[100px] bg-gray-100 rounded-bl-xl pl-4 pt-[2px] rounded-br-xl">
                                <h1 className="text-[20px] font-bold flex flex-wrap">{movies.title}</h1>
                            </div>
                        </button>
                    ))}
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}