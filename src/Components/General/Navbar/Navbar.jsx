import React from 'react'
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap-v5';
import logo from '../../../Assets/img/MLRLogo.png'
import {Link } from 'react-router-dom'
const CustomNavbar = () => {
  return (
    
      <Navbar expand="lg" className="p-0">
        <Link to="/losrosales" className="navbar-brand p-0">
          <img
            src={logo}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/nosotros">Nosotros</Link>
            <Link className="nav-link" to="/ambiental">Ambiental</Link>
            <Link className="nav-link" to="/puno">Puno</Link>
            <NavDropdown title="Medios" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/medios/noticias">Noticias</Link>
              <Link className="dropdown-item" to="/medios/media">Imágenes y Videos</Link>
              <Link className="dropdown-item" to="/medios/redes-sociales">Redes Sociales</Link>
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/medios/resultados-financieros">Resultados Financieros</Link>
            </NavDropdown>
          </Nav>
          <Form className="row row-cols-lg-auto">
            <div className="col-12">
              <FormControl type="text" placeholder="Search" className="me-sm-2 mb-2 mb-sm-0 mt-2 mt-sm-0" />
            </div>
            <div className="col-12">
              <Button variant="outline-success" className="mb-2 mb-sm-0" >Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    
  )
}

export default CustomNavbar
