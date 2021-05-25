import React from 'react'
import blogo from '../../../Assets/img/bottom-logo.png'

const Footer = () => {
  return (

    <div>
      <div className="row gy-5">
        <div className="col-12 col-md-4 text-center">
          <img src={blogo} width="50" height="40" alt="bottom-logo" />
          <h4 className="d-inline align-bottom"> Los Rosales </h4>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h4>Nuestros Sitios</h4>
          <div className="row mt-4">
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-bottom-0 bg-light">Sitio del grupo</li>
                <li className="list-group-item border-bottom-0 bg-light">Brasil</li>
                <li className="list-group-item border-bottom-0 bg-light">Chile</li>
                <li className="list-group-item border-bottom-0 bg-light">Sudáfrica</li>
                <li className="list-group-item border-bottom-0 bg-light">Kumba Iron Ore</li>
                <li className="list-group-item border-bottom-0 bg-light">Reino Unido</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-bottom-0 bg-light">Australia</li>
                <li className="list-group-item border-bottom-0 bg-light">China</li>
                <li className="list-group-item border-bottom-0 bg-light">Finlandia</li>
                <li className="list-group-item border-bottom-0 bg-light">Grupo Fundación</li>
                <li className="list-group-item border-bottom-0 bg-light">Platino</li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h4>Sigue en Contacto</h4>
          <div className="row mt-4">
            <div className="col-12">
              <p>Actualízate en las redes sociales o contáctanos para cualquier otra información</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-12">
          <p className=" d-inline align-bottom">© 2021 All Rights Reserved.</p>
        </div>
      </div>
    </div>


  )
}

export default Footer
