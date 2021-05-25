import React from 'react'
import Carousel from './Carousel/Carousel'
import Nosotros from './Nosotros/Nosotros'
import { Container } from 'react-bootstrap-v5'
const Body = () => {
  return (
    <div>
      <Carousel />
      <Container className="py-3 big-section">

        <Nosotros />

      </Container>
    </div>
  )
}

export default Body
