import React from 'react'
import { Card, Button } from 'react-bootstrap-v5'

import big1 from '../../../Assets/img/Equipo/1-1024x768.jpeg'
import big2 from '../../../Assets/img/Equipo/2-1024x768.jpeg'
import medium1 from '../../../Assets/img/Equipo/1-600x390.jpeg'
import medium2 from '../../../Assets/img/Equipo/2-600x390.jpeg'
const Equipo = () => {
  return (
    <div>
      <hgroup className="text-center mt-5 mb-3">
        <h2>Equipo</h2>
        <h5 className="text-white-50">We take pride in our work</h5>
      </hgroup>

      <div class="row row-cols-auto justify-content-sm-evenly my-5 gy-3 gy-lg-0">
        <div class="col p-0">
          <Card className="border-0 custom-card">
            <Card.Img src={big1} alt="Card image" style={{ width: '100%', height: '100%' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
    </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div class="col p-0">
          <Card className="border-0 custom-card">
            <Card.Img src={big2} alt="Card image" style={{ width: '100%', height: '100%' }} />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
    </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>


    </div>
  )
}

export default Equipo