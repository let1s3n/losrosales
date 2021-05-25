import './App.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/General/Navbar/Navbar'
import Footer from './Components/General/Footer/Footer'
import Home from './Components/Home/Home'

import { Container } from 'react-bootstrap-v5'

function App() {
  return (
    <div>
      <Container fluid id="main-header" className="header p-0">

        <Container>
          <Navbar />
        </Container>
        <Home />
        <Container fluid className="py-sm-5">
          <Container>
            <Footer />
          </Container>
        </Container>


      </Container>



    </div>
  );
}

export default App;
