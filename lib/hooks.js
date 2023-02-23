// Custom hook : 

import useSWR from "swr";
import fetcher from "./fetcher";

export const useProductsByType = (type) => {
    const {data, error} = useSWR(`/products?productType=${type}`, fetcher)

    return {
        productsByType: data,
        isLoading: !data && !error,
        isError: error
    }
}