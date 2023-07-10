import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




 const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://glamorex.vercel.app' }),
    endpoints: (builder) => ({
      getFeaturedProducts: builder.query({
        query: () => "/featured-products",
      }),
    }),
  })

export const {useGetFeaturedProductsQuery} = productApi