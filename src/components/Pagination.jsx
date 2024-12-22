import React, { Component } from "react";
import { useState } from "react";
import styles from "../styles/pagination.module.css";
const Pagination=(props)=>{
    const {goToPreviousPage,currentPage,totalPages,goToNextPage}=props;
  
    return (
        <div className={styles.paginationContainer}>
          <button
            className={styles.previousButton}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            style={{border:"2px solid rgb(239, 186, 95)",backgroundColor: "rgb(245, 218, 173)",color: "#333", padding: '10px 20px', marginRight: '10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            Précédent
          </button>
          <span className={styles.numberPage} style={{color:"rgb(245, 218, 173)"}}>
            {currentPage}/ {totalPages}
          </span>
          <button
            className={styles.nextButton}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{border:"2px solid rgb(239, 186, 95)",backgroundColor: "rgb(245, 218, 173)",color: "#333", padding: '10px 20px', marginLeft: '10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            Suivant
          </button>
        </div>
    );
}
export default Pagination;