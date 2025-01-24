import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import New_Collection from '../components/new-collections/New_Collection'
import Subscription from '../components/subscription/Subscription'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New_Collection/>
      <Subscription/>
    </div>
  )
}

export default Shop