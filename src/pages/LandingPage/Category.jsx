import React from "react";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import { useCategory } from "../../services/categoryServices/index";
import styles from "./LandingPage.module.css";
import DoubleArrowTwoToneIcon from "@mui/icons-material/DoubleArrowTwoTone";
import { filterAction } from "../../store/Explore/filtervideo-slice";
import { useDispatch } from "react-redux";
const Category = () => {
  const { categories } = useCategory();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToSelectedCategory = (selectedCategory) => {
    dispatch(filterAction.setFilterCategory(selectedCategory));
    navigate("/explore");
  };

  return (
    <div>
      <div className={`sub-header ${styles.category_main_container_heading} `}>
        <h1>Courses </h1>
        <img src="/assets/brush_stroke.png" alt="" />
      </div>
      {categories?.map(
        ({ _id, categoryName, imgsrc, description, clickValue }, index) => {
          return (
            <Transition key={_id} in={true} mountOnEnter unmountOnExit>
              {
                // ${styles["category_left_"+state]}
                (state) => (
                  <section className={` ${styles.category_card}`}>
                    <section className={`${styles.category_desc}`}>
                      <h1 className="category-heading">{categoryName}</h1>
                      <p className="category-paragraph">{description}</p>
                      <button
                        className={`rounded_btn ${styles.category_redirect_btn}`}
                        onClick={() => navigateToSelectedCategory(clickValue)}
                      >
                        <DoubleArrowTwoToneIcon />
                      </button>
                    </section>

                    <section className={`${styles.category_img_con}`}>
                      <img src={imgsrc} className="img-rounded" alt="" />
                    </section>
                  </section>
                )
              }
            </Transition>
          );
        }
      )}
    </div>
  );
};

export { Category };
