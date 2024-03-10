import React from 'react'
import HeroQuote from './components/HeroQuote'
import PricingPlans from './components/PricingPlans'
import CompareFeatures from './components/CompareFeatures'
import AdscanDifferent from './components/AdscanDifferent'
import CustomerReviews from './components/CustomerReviews'
import FaqSection from './components/FaqSection'
const page = () => {
  return (
    <div className='mt-32 sm:mt-32 md:mt-40 lg:mt-[184px]'>
      <HeroQuote/>
      <PricingPlans/>
      <CompareFeatures/>
      <AdscanDifferent/>
      <CustomerReviews/>
      <FaqSection/>
    </div>
  )
}

export default page