import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from '../../service/auth.service.ts';

export type User = {
  email: string;
  type: string;
}

export type AuthState = {
  user: User,
  loading: boolean,
  error: Error,
}

export type UserLoginData = {
  email: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email }: UserLoginData, { rejectWithValue }) => {
    try {
      const response = await login(JSON.stringify({ email }));

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
