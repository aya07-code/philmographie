import React,{ useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from "./Pagination";
import styles from "../styles/movieList.module.css";
const MovieList = (props) => {
    const {movies}=props;
    const [currentPage, setCurrentPage] = useState(1);
    const nbrBooks = 5;

    const totalPages = Math.ceil(movies.length / nbrBooks);
    const startIndex = (currentPage - 1) * nbrBooks;
    const paginatedBooks = movies.slice(startIndex, startIndex + nbrBooks);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      };
    
      const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };

  return (
    <div className={styles.moveListPagination}>
      <div className={styles.movieListContainer}>
        {paginatedBooks.map(movie => (
            <MovieCard  key={movie.id}onClicked={ ()=> props.onClicked (movie) } movie={movie} onFavorite={(id)=>props.onFavorite(id)} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination goToPreviousPage={goToPreviousPage} currentPage={currentPage} totalPages={totalPages} goToNextPage={goToNextPage} />
      </div>
    </div>
  );
};
export default MovieList;