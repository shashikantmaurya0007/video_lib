import React from "react";
import { useSelector } from "react-redux";
import styles from "./NoVideoExplore/NoVideoExplore.module.css";
const NoSearchResult = () => {
  const filterBySearchResult = useSelector(
    (state) => state.filter.filterBySearchResult
  );
  return (
    <div className={`${styles.no_searchResult}`}>
      <img src="/assets/NotFound.svg" alt="NoSearchResult" />
      <p>No Video found for "{filterBySearchResult}" </p>
    </div>
  );
};

export { NoSearchResult };
