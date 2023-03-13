import React, { useEffect } from 'react'
import PizzeriaLayout from '@/components/pizzeriaLayout'
import { useRouter } from 'next/router'
import { useProductsByType } from '@/lib/hooks'
import { useStoreState } from 'easy-peasy'

const ProductType = () => {
    const router = useRouter()
    const chosedRestaurant = useStoreState((state) => state.chosedRestaurant)

    useEffect(() => {
        if (chosedRestaurant === "-1") {
            router.push("/")
        }
    }, [])

    let { productType } = router.query

    if (!productType)
        productType = "menupromo"

    const { productsByType, isLoading } = useProductsByType(productType.toUpperCase())

    return (
        <PizzeriaLayout productsByType={productsByType} productType={productType} isLoading={isLoading} />
    )
}

export default ProductType
