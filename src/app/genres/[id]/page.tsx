
'use client'

import { ACCESS_TOKEN } from "@/app/constants";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Genre() {
    const params = useParams();

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
        setMovies(res.data.results)
    }
    useEffect(() => {
        getMoviesByGenre();
    }, [])

    return (
        <div>
            <h1>genre {params.name}</h1>
            {movies.map((movie) => <div>{movie.title}</div>)}
        </div>
    )
}