
import Header from "./components/header";
import Slideshow from "./components/slideshow";
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
    <div className="flex justify-center">
      
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
        </div>

      </div>
    </div>
  );
}
