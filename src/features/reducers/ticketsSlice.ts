import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from '../../service/tickets.service.ts';

export type TicketsState = {
  tickets: any,
  loading: boolean,
  error: Error,
  page: number,
  pages: number,
}

export type TicketsParams = {
  userType: string;
  page?: number;
  query?: string;
}

export const loadTickets = createAsyncThunk(
  "tickets/get_tickets",
  async ({ userType, page = 1, query = '' }: TicketsParams, { rejectWithValue }) => {
    try {
      const response = await getTickets(userType, page, query);
      return await response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || error);
    }
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: null,
    loading: false,
    error: null,
    page: 1,
    pages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload.tickets;
        state.page = parseInt(action.payload.page, 10);
        state.pages = action.payload.pages;
      })
      .addCase(loadTickets.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload;
      });

  },
});

export default ticketsSlice.reducer;
