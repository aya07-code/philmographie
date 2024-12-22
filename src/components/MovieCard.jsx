import React from "react";
import styles from "../styles/movieCard.module.css";
const MovieCard=(props)=>{
    const {title,releaseYear,genre,rating,favoris,id}=props.movie;
    const {onFavorite}=props;
   
    return(
        <div  className={styles.cardContainer}>
            <div onClick={props.onClicked} className={styles.cardContainer2}>
                <div className={styles.title}>{title}</div>
                <div>Genre : {genre}</div>
                <div>Rating:{rating}</div>
                <div>Realase Year:{releaseYear}</div>
            </div>
            <button  onClick={()=>{onFavorite(id)}}> <img src={favoris===true?'./images/favoris.png':"./images/non-favoris.png"} alt="" /> </button>
        </div>
    )
}
export default MovieCard;
