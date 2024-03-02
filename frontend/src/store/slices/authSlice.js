import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: localStorage.getItem("username") || "",
  email: localStorage.getItem("email") || "",
  token: localStorage.getItem("token") || "",
  isLoggedin: localStorage.getItem("isLoggedin") === "true",
  loading:false
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

        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
        localStorage.setItem("token",token);
        localStorage.setItem("isLoggedin",true);
      },
      editAuth: (state, action) => {
        const {username,email} = action.payload;
        state.username = username;
        state.email = email;

        localStorage.setItem("username",username);
        localStorage.setItem("email",email);
      },
      logOutAuth:(state,action) => {
        state.isLoggedin = false;
        state.token = "";
        state.username = "";
        state.email = "";

        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedin");
      },
      setLoading:(state,action) => {
        state.loading = action.payload;
      }
    },
})
  
// Action creators are generated for each case reducer function
export const { logInAuth, editAuth, logOutAuth, setLoading } = authSlice.actions
  
export default authSlice.reducer