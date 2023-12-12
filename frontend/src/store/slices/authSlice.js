import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"",
  email:"",
  token:"",
  isLoggedin:false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logInAuth: (state, action) => {
        const {username,email,token} = action.payload;
        state.username = username;
        state.email = email;
        state.token = token;
        state.isLoggedin = true;
      },
      editAuth: (state, action) => {
        const {username,email} = action.payload;
        state.username = username;
        state.email = email;
      },
      logOutAuth:(state,action) => {
        state.isLoggedin = false;
        state.token = "";
        state.username = "";
        state.email = "";
      }
    },
})
  
// Action creators are generated for each case reducer function
export const { logInAuth, editAuth, logOutAuth } = authSlice.actions
  
export default authSlice.reducer