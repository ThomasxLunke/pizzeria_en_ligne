import React from 'react'
import PizzeriaLayout from '@/components/pizzeriaLayout'
import { useRouter } from 'next/router'
import { useProductsByType } from '@/lib/hooks'

const ProductType = () => {
    const router = useRouter()
    let { productType } = router.query

    

    if (!productType)
        productType = "menupromo"

    const { productsByType, isLoading } = useProductsByType(productType.toUpperCase())
    console.log(isLoading)

    return (
        <PizzeriaLayout productsByType={productsByType} productType={productType} isLoading={isLoading}/>
    )
}

export default ProductType
