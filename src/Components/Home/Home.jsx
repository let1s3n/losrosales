import React from 'react'
import Carousel from './Carousel/Carousel'
import Nosotros from './Nosotros/Nosotros'
import Equipo from './Equipo/Equipo'
import { Container } from 'react-bootstrap-v5'
const Body = () => {
  return (
    <div>
      <Carousel />
      <Container fluid>
        <Container className="py-3 big-section">

          <Nosotros />

        </Container>
      </Container>
      <Container fluid className="bg-dark bg-gradient text-white py-3">
        <Equipo />
      </Container>
    </div>
  )
}

export default Body
