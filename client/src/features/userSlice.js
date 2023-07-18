import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch('http://localhost:5000/todos/user/login', requestOptions);
      

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
  
        const response = await fetch('http://localhost:5000/todos/user/register', requestOptions);
        
  
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userObject;
        state.error = action.payload.message;
        state.loggedOut = false
        localStorage.setItem("user",JSON.stringify(state));
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userObject;
        state.error = action.payload.message;
        state.loggedOut = false
        localStorage.setItem("user",JSON.stringify(state));
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default userSlice.reducer;
export const { setUser, logout } = userSlice.actions