import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

import pp1 from '../../../Assets/img/pp1.png'
import pp2 from '../../../Assets/img/pp2.png'
import pp3 from '../../../Assets/img/pp3.png'

const Nosotros = () => {
  return (
    <div>
      <h2 className="text-center mt-5 mb-3">Nosotros</h2>
      <Row className="mt-5">
        <Col>
          <Card className="border-0">
            <Card.Img className="mx-auto" style={{ width: '150px' }} variant="top" src={pp1} />
            <Card.Body className="py-5">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
        </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img className="mx-auto" style={{ width: '150px' }} variant="top" src={pp2} />
            <Card.Body className="py-5">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
          content.{' '}
              </Card.Text>
            </Card.Body>
           {/*  <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img className="mx-auto" style={{ width: '150px' }} variant="top" src={pp3} />
            <Card.Body className="py-5">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
        </Card.Text>
            </Card.Body>
           {/*  <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Nosotros
