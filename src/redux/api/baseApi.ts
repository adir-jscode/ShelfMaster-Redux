import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/books",
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/api/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useCreateBookMutation } = baseApi;
