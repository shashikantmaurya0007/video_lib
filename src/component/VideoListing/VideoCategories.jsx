import React from "react";
import { useCategory } from "../../services/categoryServices";
import styles from "./VideoCategories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../store/Explore/filtervideo-slice";
const VideoCategories = () => {
  const { categories } = useCategory();
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.filterByCategory);
  const changeSelectedCategory = (categorySelected) => {
    dispatch(filterAction.setFilterCategory(categorySelected));
  };

  return (
    <div className={`${styles.category_chip_container}`}>
      <p
        onClick={() => changeSelectedCategory("All")}
        className={`category_chip_text ${
          activeCategory === "All" && "active"
        } ${styles.category_chip}`}
      >
        All
      </p>
      {categories?.map((category) => (
        <p
          onClick={() => changeSelectedCategory(category.clickValue)}
          className={`category_chip_text ${
            activeCategory == category.clickValue && "actives"
          } ${styles.category_chip}`}
        >
          {category.categoryName}
        </p>
      ))}
    </div>
  );
};

export { VideoCategories };
