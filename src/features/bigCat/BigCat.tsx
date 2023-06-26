import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { tick, incrementClick, increment } from "../counter/counterSlice";
import { swapImage } from "./bigCattSlice";
import catClosed from "./catClosed.svg";
import catOpen from "./catOpen.svg";

const BigCat = () => {
  const clicked = useAppSelector((state) => state.bigCat.clicked);

  const dispatch = useAppDispatch();

  const handleCatClick = () => {
    dispatch(increment(1));
    dispatch(incrementClick());
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(tick());
    }, 1000);
  }, []);

  return (
    <div
      onMouseDown={() => {
        dispatch(swapImage(true));
        handleCatClick();
      }}
      onMouseUp={() => {
        dispatch(swapImage(false));
      }}
      onMouseLeave={() => {
        dispatch(swapImage(false));
      }}
    >
      <img
        draggable={false}
        alt="pet the goddamn cat"
        style={{ width: "30rem", height: "30rem", cursor: "grab" }}
        src={clicked ? catClosed : catOpen}
      />
    </div>
  );
};

export default BigCat;
