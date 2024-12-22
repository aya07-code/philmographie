import React, { useState } from 'react';
import styles from "../styles/addFilmForm.module.css"

const AddFilmForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie,[name]: value   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      director: '',
      releaseYear: '',
      genre: '',
      rating: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Titre:
        <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
      </label>
      <label>
        Réalisateur:
        <input type="text" name="director" value={newMovie.director} onChange={handleChange} />
      </label>
      <label>
        Année de sortie:
        <input type="number" name="releaseYear" value={newMovie.releaseYear} onChange={handleChange} />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={newMovie.genre} onChange={handleChange} />
      </label>
      <label>
        Note:
        <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddFilmForm;