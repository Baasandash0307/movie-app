import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";

const Header = () => {
  const [genreList, setGenreList] = useState([]);

  const getGenreList = async () => {
    const genres = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setGenreList(genres.data.genres);
  };
  useEffect(() => {
    getGenreList();
  }, []);


  return (
    <div className="w-[1700px] h-[59px] mx-auto flex justify-between items-center">
      <div className="w-[92px] h-[20px] flex items-center gap-2">
        <img className="w-5 h-5" src="film.png"></img>
        <p className="text-indigo-700 text-[16px] font-bold">Movie Z</p>
      </div>

      <div className="w-[438px] h-[36px] flex justify-center gap-3 ">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent className="w-[577px] h-[333px] p-[8px]">
            <div>
              <h1 className="text-[24px] font-bold">Genres</h1>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {
                genreList.map(genre => <SelectItem className="border-1 rounded-xl mt-1" value={genre.id}>{genre.name}</SelectItem>)
              }
            </div>
          </SelectContent>
        </Select>

        <div className="flex justify-between items-center gap-3 border-1 rounded-[8px] pl-4 border-gray-300">
          <img className="w-[16px] h-4" src="magnifier.png"></img>
          <input
            className="w-[379px] h-[36px] outline-0"
            placeholder="Search"
            type="Search"
          ></input>
        </div>
      </div>

      <div className="w-[36px] h-[36px] border-[1px] flex justify-center items-center rounded-xl border-gray-300">
        <button className="cursor-pointer">
          <img className="w-[16px] h-[16px]" src="moon.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
