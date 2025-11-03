import React from "react";
import { useParams } from "react-router-dom";

const MOVIE_URL_ID = "https://api.themoviedb.org/3/movie/";

const DetailsPage = () => {
  const { movieId } = useParams();

  // TODO: Nieuwe call om details van movie op te vragen!

  return (
    <div>
      <p>{movieId}</p>
    </div>
  );
};

export default DetailsPage;
