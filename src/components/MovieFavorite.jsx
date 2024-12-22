import React from "react";
import styles from "../styles/filmographieBody.module.css";
import MovieList from "./MovieList";

const MovieFavoris = ({ favoriteMovies, onFavorite, displayMovie }) => {
  return (
    <div className={styles.favorites}>
      <h2 >Les favoris</h2>
      <MovieList
        movies={favoriteMovies}
        onFavorite={onFavorite}
        onClicked={displayMovie}
      />
    </div>
  );
};

export default MovieFavoris;
