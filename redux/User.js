import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLooged: false,
  userData: [],
  profileImage:
    "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top",
};

const User = createSlice({
  initialState,
  name: "user",
  reducers: {
    logIn(state, action) {
      state.userData = action.payload;
      state.isLooged = true;
    },
    logOut(state) {
      state = initialState;
    },
  },
});

export const { logIn, logOut } = User.actions;

export default User.reducer;
