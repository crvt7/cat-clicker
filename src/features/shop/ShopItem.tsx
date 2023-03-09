import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, setIncrement } from "../counter/counterSlice";
import { addUpgrade } from "../statScreen/statScreenSlice";
import styles from "./shopItem.module.css";

interface ShopObject {
  name: string;
  power: number;
  displayName: string;
}

const ShopItem: React.FC<ShopObject> = (props) => {
  const dispatch = useAppDispatch();
  const catCount = useAppSelector((state) => state.counter.value);
  const upgrades = useAppSelector((state) => state.stats.upgrades);
  const disabledClass =
    catCount < upgrades[props.name as keyof typeof upgrades].cost
      ? styles.disabled
      : null;

  const purchase = (props: ShopObject) => {
    if (catCount >= upgrades[props.name as keyof typeof upgrades].cost) {
      dispatch(decrement(upgrades[props.name as keyof typeof upgrades].cost));
      dispatch(addUpgrade(props));
      dispatch(setIncrement(props.power))
    }
    return;
  };
  return (
    <div
      className={styles.main + " " + disabledClass}
      onClick={() => purchase(props)}
    >
      <div className={styles.info}>
        <p className={styles.bigText}>
          {upgrades[props.name as keyof typeof upgrades].amount}x{" "}
          {props.displayName}
        </p>
        <p className={styles.smallText}>
          Grants {props.power} {props.power !== 1 ? "cats" : "cat"} per second
        </p>
      </div>
      <p className={styles.cost}>
        Costs{" "}
        <span className={styles.costNumber}>
          {upgrades[props.name as keyof typeof upgrades].cost}
        </span>{" "}
        cats
      </p>
    </div>
  );
};

export default ShopItem;
