import { useState } from "react";
import "./App.css";

import movies from "./data/films.json";

function App() {
  const [films, setFilms] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGYyZjgzNWQ4MDg5Y2Y5YTczMTk3YTJhMWRkYWJiMyIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.33XyUlqIMYXU2Y2nlLRiBuO5j2SlJAPOXao_dmE7mBo",
          },
        }
      );

      const data = await response.json();

      setFilms(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // fetchMovies();

  return (
    <div>
      {/* {response.map()} */}
      {/* Zorg er voor dat alle titels in een paragraaf getoond worden */}

      {films.map((m) => {
        return <p key={m.id}>{m.title}</p>;
      })}
    </div>
  );
}

export default App;
