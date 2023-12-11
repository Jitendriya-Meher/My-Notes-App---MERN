import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"",
  email:"",
  token:""
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
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { logInAuth } = authSlice.actions
  
  export default authSlice.reducer