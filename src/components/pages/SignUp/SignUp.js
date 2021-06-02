import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjThree } from './Data'
import Pricing from '../../Pricing'

const SignUp = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjThree} />
        </>
    )
}

export default SignUp
