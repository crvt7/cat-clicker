import React from "react";
import Header from "./features/header/Header";
import Shop from "./features/shop/Shop";
import StatScreen from "./features/statScreen/StatScreen";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.game}>
        <StatScreen />
        <Shop />
      </div>
    </div>
  );
}

export default App;
