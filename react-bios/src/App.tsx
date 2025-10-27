import { useEffect, useState } from "react";
import "./App.css";

import Axios from "axios";
import Header from "./components/Header";

interface MovieResponse {
  page: number;
  results: Film[];
}

interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// import movies from "./data/films.json";

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [counter, setCounter] = useState(0);

  const fetchMovies = async () => {
    try {
      // FETCH methode - ingebakken in JS
      // const response = await fetch(
      //   "https://api.themoviedb.org/3/movie/popular",
      //   {
      //     headers: {
      //       Authorization:
      //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGYyZjgzNWQ4MDg5Y2Y5YTczMTk3YTJhMWRkYWJiMyIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.33XyUlqIMYXU2Y2nlLRiBuO5j2SlJAPOXao_dmE7mBo",
      //     },
      //   }
      // );
      // const data = await response.json();

      // AXIOS methode - installatie van third party package

      const response = await Axios.get<MovieResponse>(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGYyZjgzNWQ4MDg5Y2Y5YTczMTk3YTJhMWRkYWJiMyIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.33XyUlqIMYXU2Y2nlLRiBuO5j2SlJAPOXao_dmE7mBo",
          },
        }
      );

      setFilms(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // OPGELET met interval en API requests
    // const timerId = setInterval(() => {
    //   fetchMovies();
    // }, 5000000);

    fetchMovies();

    // Cleanup functie
    // return () => {
    //   clearInterval(timerId);
    // };
  }, []);

  // fetchMovies();

  // const derivedCounter = counter * 5;

  return (
    <div className="p-4 flex flex-col gap-4">
      <Header />
      {/* <h1>{derivedCounter}</h1> */}
      {/* {response.map()} */}
      {/* Zorg er voor dat alle titels in een paragraaf getoond worden */}

      {films.map((m) => {
        return (
          <p key={m.id}>
            {m.backdrop_path}
            {m.title} {m.vote_count}
          </p>
        );
      })}

      <button
        className="bg-teal-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-700"
        onClick={() => {
          setIsRefresh(!isRefresh);
        }}>
        Ververs data
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Verhoog
      </button>
    </div>
  );
}

export default App;
