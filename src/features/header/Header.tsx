import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setUser } from "./userSlice";
import styles from "./header.module.css";

const Header = () => {
  const username = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();
  const changeName = () => {
    let name = prompt("New username");
    dispatch(setUser(name));
  };
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <p className={styles.userName} onClick={() => changeName()}>
          {username}'s cat factory
        </p>
        <button
          className={styles.wipeButton}
          onClick={() => {
            if (window.confirm("This will reset ALL of your progress")) {
              dispatch({ type: "purge" });
            }
          }}
        >
          RESET ALL PROGRESS
        </button>
      </div>

      <p className={styles.gameInfo}>Pet the cat game v0.1</p>
    </div>
  );
};

export default Header;
