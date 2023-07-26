import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch('http://192.168.1.203:5000/todos/user/login', requestOptions);
      
      const data = await response.json();
      return data;
    }
);

export const register = createAsyncThunk(
    'user/register',
    async ({ email, password }) => {
      
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        };
  
        const response = await fetch('http://192.168.1.203:5000/todos/user/register', requestOptions);
        
        const data = await response.json();

        return data;
      }
  );

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
    loggedOut: true,
  },
  reducers: {
    setUser: (state,action) => {
      state.loading= action.payload.loading
      state.user= action.payload.user
      state.error= action.payload.error
      state.loggedOut= action.payload.loggedOut
    },
    logout: state => {
      state.loading= false
      state.user=  null
      state.error=  null
      state.loggedOut=  true
    },
    setError: (state,action) => {
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled,  (state, action) => {
        state.loading = false;
        state.user = action.payload.userObject;
        state.error = action.payload.message;
        if(action.payload.message.length === 0){
        state.loggedOut = false
      }
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled,  (state, action) => {
        state.loading = false;
        state.user = action.payload.userObject;
        state.error = action.payload.message;
        if(action.payload.message.length === 0){
        state.loggedOut = false
      }
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default userSlice.reducer;
export const { setUser, logout, setError } = userSlice.actions