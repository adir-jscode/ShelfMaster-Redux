import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  books: IBook[];
};

const initialState: InitialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
