import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, registration } from '../../service/auth.service.ts';

export type AuthState = {
  user: any, // TODO implement types
  loading: boolean,
  error: Error,
}

export type UserRegistrationData = {
  name: string;
  email: string;
  password: string;
  type: boolean;
}

export type UserLoginData = {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/registration",
  async ({ name, email, password, type }: UserRegistrationData, { rejectWithValue }) => {
    try {
      const response = await registration(JSON.stringify({ name, email, password, type: type ? 'local' : 'tourist' }));

      sessionStorage.setItem("user", JSON.stringify(response));

      const data = await response.data;
      return data.user; // Returns data.user
    } catch (error) {
      // @ts-ignore
      // TODO implement types
      return rejectWithValue(error.message || error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: UserLoginData, { rejectWithValue }) => {
    try {
      const response = await login(JSON.stringify({ email, password }));

      sessionStorage.setItem("user", JSON.stringify(response));
      const data = await response.data;
      return data.user; // Returns data.user
    } catch (error) {
      // @ts-ignore
      // TODO implement types
      return rejectWithValue(error.message || error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        // TODO implement types
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        // TODO implement types
        state.error = action.payload;
      });

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
