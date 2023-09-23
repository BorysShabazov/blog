import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64fc97af605a026163aea6df.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query(values) {
        return {
          url: API_ENDPOINT,
          method: "POST",
          body: values,
        };
      },

      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query({ id, ...data }) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: "PUT",
          body: data,
        };
      },

      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;
