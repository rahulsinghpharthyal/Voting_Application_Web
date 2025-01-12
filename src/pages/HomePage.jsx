import React from 'react'
import Carousel from '../components/Carousel'
import Timeline from '../components/TImeLineData'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100"> 
     <Carousel /> 
     <Timeline/>
    </div>
  )
}

export default HomePage
