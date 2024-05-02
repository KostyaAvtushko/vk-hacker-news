import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews } from "./types";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({baseUrl: 'https://hacker-news.firebaseio.com/v0'}),
  tagTypes: ["news"],
  endpoints: (build) => ({
    fetchItem: build.query<INews, number>({
      query: (id: number) => ({
        url: `/item/${id}.json`,
        method: 'GET',
      }),
    }),
    fetchLatestNews: build.query<number[], null>({
      query: () => ({
        url: `/topstories.json`,
        method: 'GET',
      }),
    }),
  })
})