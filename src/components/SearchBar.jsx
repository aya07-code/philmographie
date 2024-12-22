import React,{useState} from "react";
import styles from "../styles/searchBar.module.css"
const SearchBar=({ onSearch })=>{
    return(
        <div className={styles.searchButtonContainers}>
            <input  type="text" placeholder="Rechercher un film..." onChange={(e) => (onSearch(e.target.value))} />
        </div>
    )
}
export default SearchBar;
