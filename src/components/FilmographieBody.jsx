import React, { useState } from "react";
import styles from "../styles/filmographieBody.module.css";
import SearchBar from "./SearchBar";
import SortButtons from "./SortButtons";
import MovieList from "./MovieList";
import AddFilmForm from "./AddFilmForm";
import MovieDetails from "./MovieDetails";
import MovieFavoris from "./MovieFavorite";
import movies from "../Data/movies.js";

const FilmographieBody = () => {
  const [stateMovies, setMovies] = useState(movies);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onFavorite = (id) => {
    setMovies((movies) =>
      movies.map((movie) =>
        movie.id === id ? { ...movie, favoris: !movie.favoris } : movie
      )
    );
  };

  const handleSearch = (term) => {
    setMovies(() =>
      term.trim()
        ? movies.filter(
            (movie) =>
              movie.title.toLowerCase().includes(term.toLowerCase()) ||
              movie.genre.toLowerCase().includes(term.toLowerCase())
          )
        : movies
    );
  };

  const onSort = (sortType) => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) =>
        sortType === "rating"
          ? b.rating - a.rating
          : sortType === "releaseYear"
          ? b.releaseYear - a.releaseYear
          : 0
      )
    );
  };

  const onAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, { ...newMovie, id: Date.now() }]);
  };

  const onUpdateMovie = (updatedMovie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
    setSelectedMovie(null);
  };

  const closeDetails = () => {
    setSelectedMovie(null);
  };

  const displayMovie = (data) => {
    setSelectedMovie(data);
  };

  const favoriteMovies = stateMovies.filter((movie) => movie.favoris);

  return (
    <div className={styles.filmographieBody}>
      <div className={styles.searchBarButtons}>
        <SearchBar onSearch={handleSearch} />
        <SortButtons clickButton={() => onSort("rating")} value="Trier par note" />
        <SortButtons
          clickButton={() => onSort("releaseYear")}
          value="Trier par année"
        />
        <button
          className={styles.addFilmButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Fermer le formulaire" : "Ajouter un film"}
        </button>
      </div>
      {showAddForm && (
        <div className={styles.addFormContainer}>
          <AddFilmForm onAddMovie={onAddMovie} />
        </div>
      )}
      {selectedMovie ? (
        <div className={styles.movieDetailsCard}>
          <button className={styles.closeButton} onClick={closeDetails}>
            X
          </button>
          <MovieDetails movie={selectedMovie} onUpdateMovie={onUpdateMovie} />
        </div>
      ) : (
        <>
          <div className={styles.films}>
            <h2>Tous les films</h2>
            <MovieList
              movies={stateMovies}
              onFavorite={onFavorite}
              onClicked={displayMovie}
            />
          </div>
          {favoriteMovies.length > 0 && (
            <MovieFavoris
              favoriteMovies={favoriteMovies}
              onFavorite={onFavorite}
              displayMovie={displayMovie}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FilmographieBody;
