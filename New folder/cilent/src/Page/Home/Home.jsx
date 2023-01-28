import React from 'react'
import Homebody2 from './Home body 2/Homebody2'
import Homebody1 from './Home body1/Homebody1'
import Homecard from './Home card/Homecard'
import Homeimg from './Home img/Homeimg'
import {Helmet} from "react-helmet";
import Homemap from './Homemap/Homemap'

function Home() {
  return (
    <div>
         <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Homeimg/>
      <Homecard/>
      <Homebody2/>
      <Homebody1/>
      <Homemap/>

      
    </div>
  )
}

export default Home
