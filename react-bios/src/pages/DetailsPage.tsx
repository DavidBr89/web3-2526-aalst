import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
// import type { Film } from "../App";

const MOVIE_URL_ID = "https://api.themoviedb.org/3/movie/";

const DetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchMovies = async () => {
    try {
      const response = await Axios.get(`${MOVIE_URL_ID}${movieId}`, {
        headers: {
          Authorization: import.meta.env.VITE_TMDB_KEY,
        },
      });
      setMovie(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // const response = "Axios response";

  // Conditionele rendering
  // if (isLoading) {
  //   return <Loading />;
  // }

  if (error) {
    return <p>Er is een fout gebeurd!</p>;
  }

  return <div>{isLoading ? <Loading /> : <p>{movie?.title}</p>}</div>;
};

export default DetailsPage;
