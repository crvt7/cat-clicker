import React from "react";
import styles from "./shop.module.css";
import ShopItem from "./ShopItem";

const upgradeList = [
  { name: "hands", power: 0.1, displayName: "Additional hand" },
  { name: "mice", power: 1, displayName: "Toy mouse" },
  { name: "laserPointers", power: 11, displayName: "Laser pointer" },
  { name: "boxes", power: 121, displayName: "Cardboard box" },
  { name: "catnip", power: 1330, displayName: "Catnip dispenser" },
  { name: "trees", power: 14500, displayName: "Cat tree" },
  { name: "scratchers", power: 160000, displayName: "Scratching post" },
];

const Shop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.shopHeader}>Upgrade store</div>
      {upgradeList.map((el, idx) => {
        return (
          <ShopItem
            key={idx}
            name={el.name}
            displayName={el.displayName}
            power={el.power}
          />
        );
      })}
    </div>
  );
};

export default Shop;
