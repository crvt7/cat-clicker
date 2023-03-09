import React from "react";
import { useAppSelector } from "../../hooks";
import BigCat from "../bigCat/BigCat";
import styles from "./statScreen.module.css";

const StatScreen = () => {
  const catCount = Math.floor(useAppSelector((state) => state.counter.value))
  const catIncrement = useAppSelector((state) => state.counter.incrementValue);
  const timesClicked = useAppSelector((state) => state.counter.timesClicked);

  return (
    <div className={styles.main}>
      <div className={styles.bigCounter}>
        <span>{catCount }</span> {catCount!== 1 ? "cats" : "cat"}
        <div className={styles.catsPerClick}>
          {catIncrement.toFixed(1)} {catIncrement !== 1 ? "cats" : "cat"} per second
        </div>
      </div>

      <BigCat />
      <div className={styles.timesClicked}>
        You have petted the cat {timesClicked}{" "}
        {timesClicked !== 1 ? "times" : "time"}
      </div>
    </div>
  );
};

export default StatScreen;
