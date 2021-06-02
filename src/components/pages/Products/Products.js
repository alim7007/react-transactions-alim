import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjFour } from './Data'
import Pricing from '../../Pricing'

const Products = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Products
