
import Footer from "./components/footer";
import Header from "./components/header";
import Popular from "./components/popular";
import Slideshow from "./components/slideshow";
import TopRated from "./components/top";
import Upcoming from "./components/upcoming";

export default function Home() {

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

  return (
    <div className="">


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
