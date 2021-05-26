import './App.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import React,{useEffect} from 'react'
import Navbar from './Components/General/Navbar/Navbar'
import Footer from './Components/General/Footer/Footer'
import Home from './Components/Home/Home'
import Nosotros from './Components/Nosotros/Nosotros'
import Ambiental from './Components/Ambiental/Ambiental'
import Puno from './Components/Puno/Puno'

import Noticias from './Components/Medios/Noticias'
import Media from './Components/Medios/Media'
import RedesSociales from './Components/Medios/RedesSociales'
import ResultadosFinancieros from './Components/Medios/ResultadosFinancieros'

import { Container } from 'react-bootstrap-v5'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
function App() {
  useEffect(() => {
    const element = document.querySelector('#main-header');
    
    window.onscroll = () => {
      console.log('X: ' + window.scrollX + ', Y: ' + window.scrollY)
      if (window.scrollY >= 500) {
        element.classList.remove("sticky-md-top");
        element.classList.remove("zvalue-1");
      }else{
        element.classList.add("sticky-md-top");
        element.classList.add("zvalue-1");
      }
    }
  }, []);
  return (
    <div>
      <Router>
        <Container fluid id="main-header" className="header p-0 sticky-md-top bg-white">

          <Container>
            <Navbar />
          </Container>
        </Container>

        <Switch>
          <Route path="/nosotros" component={withRouter(Nosotros)} />
          <Route path="/ambiental" component={withRouter(Ambiental)} />
          <Route path="/puno" component={withRouter(Puno)} />

          <Route path="/medios/noticias" component={withRouter(Noticias)} />
          <Route path="/medios/media" component={withRouter(Media)} />
          <Route path="/medios/redes-sociales" component={withRouter(RedesSociales)} />
          <Route path="/medios/resultados-financieros" component={withRouter(ResultadosFinancieros)} />

          <Route exact path="/losrosales" component={withRouter(Home)} />
          
        </Switch>
      </Router>
      <Container fluid className="py-sm-5 bg-light">
        <Container>
          <Footer />
        </Container>
      </Container>

    </div>
  );
}

export default App;
