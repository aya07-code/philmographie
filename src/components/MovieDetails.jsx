import React, { useState } from 'react';

const MovieDetails = ({ movie, onUpdateMovie }) => {
  const [editableMovie, setEditableMovie] = useState(movie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableMovie({ ...editableMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateMovie(editableMovie);
  };

  return (
    <div>
      <h2>Détails du Film</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type="text" name="title" value={editableMovie.title} onChange={handleChange} />
        </label>
        <label>
          Réalisateur:
          <input type="text" name="director" value={editableMovie.director} onChange={handleChange} />
        </label>
        <label>
          Année de sortie:
          <input type="number" name="releaseYear" value={editableMovie.releaseYear} onChange={handleChange} />
        </label>
        <label>
          Genre:
          <input type="text" name="genre" value={editableMovie.genre} onChange={handleChange} />
        </label>
        <label>
          Note:
          <input type="number" name="rating" value={editableMovie.rating} onChange={handleChange} />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};
export default MovieDetails;


