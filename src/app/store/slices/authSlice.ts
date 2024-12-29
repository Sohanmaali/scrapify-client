import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {_id:string, email: string; name: string, mobile : string, image : string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

interface User {
  _id: string;
  name: string;
  email: string;
  mobile : string,
  image : string,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: { _id:string, mobile: string, email: string; name: string,image:string } }>) { 
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },

    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    

      
  },
});

export const { login, logout,setUser } = authSlice.actions;
export default authSlice.reducer;
