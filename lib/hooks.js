// Custom hook :

import useSWR from 'swr'
// eslint-disable-next-line import/extensions
import fetcher from './fetcher'

export const useProductsByType = (type) => {
  const { data, error } = useSWR(`/products?productType=${type}`, fetcher)

  return {
    productsByType: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const useRestaurant = () => {
  const { data, error } = useSWR('/restaurant', fetcher)

  return {
    restaurants: data || [],
    isLoading: !data && !error,
    isError: error,
  }
}
