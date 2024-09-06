import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Card from './Card'

const Home = () => {
  return (
    <>
      <Navbar/>
     <div className='flex'>
     <Card 
        image="https://via.placeholder.com/300"
        title="Card One"
        description="This is a description for the first card."
        buttonLabel="Learn More"
     />
      <Card image="https://via.placeholder.com/300/0000FF/808080"
        title="Card Two"
        description="This is a description for the second card."
        buttonLabel="Explore"/>
      <Card image="https://via.placeholder.com/300/0000FF/808080"
        title="Card Two"
        description="This is a description for the second card."
        buttonLabel="Explore"/> 
     </div>
    </>
  )
}

export default Home