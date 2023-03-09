import { createSlice } from "@reduxjs/toolkit";


interface User  {
    name: string
}

const initialState: User = {
  name: "Cat Lover"
};

export const userSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setUser: (state,action) => {
        state.name = action.payload
    }
    },
  },
);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
