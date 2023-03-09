import { createSlice } from "@reduxjs/toolkit";

interface Upgrade {
  amount: number;
  cost: number;
}

interface Stats {
  upgrades: {
    hands: Upgrade;
    mice: Upgrade;
    boxes: Upgrade;
    laserPointers: Upgrade;
    catnip: Upgrade;
    scratchers: Upgrade;
    trees: Upgrade;
  };
  catsPerClick: number;
}

const initialState: Stats = {
  upgrades: {
    hands: {
      amount: 0,
      cost: 10,
    },
    mice: {
      amount: 0,
      cost: 65,
    },
    laserPointers: {
      amount: 0,
      cost: 750,
    },
    boxes: {
      amount: 0,
      cost: 8500,
    },
    catnip: {
      amount: 0,
      cost: 94000,
    },
    trees: {
      amount: 0,
      cost: 1000000,
    },

    scratchers: {
      amount: 0,
      cost: 11000000,
    },
  },
  catsPerClick: 1,
};

export const statScreenSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    addUpgrade: (state, action) => {
      state.upgrades[
        action.payload.name as keyof typeof state.upgrades
      ].amount += 1;
      state.upgrades[action.payload.name as keyof typeof state.upgrades].cost =
        Math.ceil(
          1.2 *
            state.upgrades[action.payload.name as keyof typeof state.upgrades]
              .cost
        );
    },
  },
});

export const { addUpgrade } = statScreenSlice.actions;

export default statScreenSlice.reducer;
