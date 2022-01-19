import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// var options = {
// 	method: 'GET',
// 	url: 'https://bing-news-search1.p.rapidapi.com/news',
// 	params: {safeSearch: 'Off', textFormat: 'Raw'},
// 	headers: {
// 	  'x-bingapis-sdk': 'true',
// 	  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// 	  'x-rapidapi-key': 'aee4072251msh780b2984dbeb734p184ddfjsndb3dc9304348'
// 	}
//   };

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "aee4072251msh780b2984dbeb734p184ddfjsndb3dc9304348",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
