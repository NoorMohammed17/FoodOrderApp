import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../components/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Cart Meals</h1>
       <HeaderCartButton onClick = {props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img alt="A table full of Meals" src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
