'use client'

import Footer from "./components/footer";
import Header from "./components/header";
import Popular from "./components/popular";
import Slideshow from "./components/slideshow";
import TopRated from "./components/top";
import Upcoming from "./components/upcoming";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div>
        <div>
          <Header></Header>
        </div>

        <div>
          <Slideshow></Slideshow>
        </div>

          <div>
            <Upcoming></Upcoming>
          </div>

          <div>
            <Popular></Popular>
          </div>

          <div>
            <TopRated></TopRated>
          </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
