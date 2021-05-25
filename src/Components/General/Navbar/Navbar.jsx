import React from 'react'
import { Navbar, Nav, Form, NavDropdown, FormControl, Button} from 'react-bootstrap-v5';
import logo from '../../../Assets/img/MLRLogo.png'
const CustomNavbar = () => {
  return (
    
      <Navbar expand="lg" className="p-0">
        <Navbar.Brand href="#home" className="p-0">
          <img
            src={logo}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Ambiental</Nav.Link>
            <Nav.Link href="#link">Puno</Nav.Link>
            <NavDropdown title="Medios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Noticias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Imágenes y Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Redes Sociales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Resultados Financieros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="row row-cols-lg-auto">
            <div className="col-12">
              <FormControl type="text" placeholder="Search" className="me-sm-2" />
            </div>
            <div className="col-12">
              <Button variant="outline-success">Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
  
  )
}

export default CustomNavbar
