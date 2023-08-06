import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../components/assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Cart Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img alt="A table full of Meals" src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
