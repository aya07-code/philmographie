import React from "react";
import styles from "../styles/sortButton.module.css";
const SortButtons=(props)=>{
    const {value,clickButton }=props;
    return(
        <div className={styles.buttonContainer}>
            <button onClick={()=>{clickButton()}}>{value}</button>
        </div>
    )
}
export default SortButtons;
