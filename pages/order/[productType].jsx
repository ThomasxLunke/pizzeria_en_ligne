import React from 'react'
import PizzeriaLayout from '@/components/pizzeriaLayout'
import { useRouter } from 'next/router'
import { useProductsByType } from '@/lib/hooks'
import {Box} from '@chakra-ui/react'


const ProductType = () => {
    const router = useRouter()
    let { productType } = router.query

    if (!productType)
        productType = "menupromo"

    const { productsByType } = useProductsByType(productType.toUpperCase())

    return (
        <PizzeriaLayout productsByType={productsByType} productType={productType}/>
    )
}

export default ProductType
