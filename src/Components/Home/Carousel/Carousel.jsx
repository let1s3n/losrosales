import React from 'react'
import slide1 from '../../../Assets/img/slide1.jpeg'
import slide2 from '../../../Assets/img/slide2.jpg'
import slide3 from '../../../Assets/img/slide3.jpg'
/* import { Carousel as BSCarousel } from 'react-bootstrap-v5'; */
const Carousel = () => {


  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="slide-img d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="slide-img d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="slide-img d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    /*  <BSCarousel>
       <BSCarousel.Item>
         <img
           className="slide-img d-block w-100"
           src={slide1}
           alt="First slide"
         />
         <BSCarousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </BSCarousel.Caption>
       </BSCarousel.Item>
       <BSCarousel.Item>
         <img
           className="slide-img d-block w-100"
           src={slide2}
           alt="Second slide"
         />
 
         <BSCarousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </BSCarousel.Caption>
       </BSCarousel.Item>
       <BSCarousel.Item>
         <img
           className="slide-img d-block w-100"
           src={slide3}
           alt="Third slide"
         />
 
         <BSCarousel.Caption>
           <h3>Third slide label</h3>
           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </BSCarousel.Caption>
       </BSCarousel.Item>
     </BSCarousel> */
  )
}

export default Carousel
