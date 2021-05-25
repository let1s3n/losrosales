import React from 'react'
import blogo from '../../../Assets/img/bottom-logo.png'

const Footer = () => {
  return (

    <div>
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={blogo} width="50" height="40" alt="bottom-logo" />
          <h4 className="d-inline align-bottom"> Los Rosales </h4>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h4>Nuestros Sitios</h4>
          <div className="row mt-4">
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-bottom-0">Sitio del grupo</li>
                <li className="list-group-item border-bottom-0">Brasil</li>
                <li className="list-group-item border-bottom-0">Chile</li>
                <li className="list-group-item border-bottom-0">Sudáfrica</li>
                <li className="list-group-item border-bottom-0">Kumba Iron Ore</li>
                <li className="list-group-item border-bottom-0">Reino Unido</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-bottom-0">Australia</li>
                <li className="list-group-item border-bottom-0">China</li>
                <li className="list-group-item border-bottom-0">Finlandia</li>
                <li className="list-group-item border-bottom-0">Grupo Fundación</li>
                <li className="list-group-item border-bottom-0">Platino</li>

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
