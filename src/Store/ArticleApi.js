import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const articleApi=createApi({

   reducerPath:'articleApi',
   baseQuery: fetchBaseQuery({
    baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key','b9e8eac236msh2581a49617a18f4p12b821jsn451551b48181');

       
     headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

     return headers;
    }



   }),



   endpoints:(builder)=>({
    getSummary :builder.query({
        query:(params)=>`/summarize?url=${encodeURIComponent(params.articleURL)}&length=3`
    })
   })

})

export const {useLazyGetSummaryQuery} = articleApi;