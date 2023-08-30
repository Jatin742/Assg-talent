import React from 'react'
import { Fragment } from 'react'
import briefcase from "./images/briefcase.svg";
import busfont from "./images/bus-front.svg";
import chatsquare from "./images/chat-square-heart.svg";
import chevronright from "./images/chevron-right.svg";
import family from "./images/family.jpg";
import dog from "./images/dog.jpg";
import moving from "./images/moving-van.jpg";
import Carousel from 'react-material-ui-carousel';
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">Move With Joy</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Welcome to our website, where we are on a mission to provide exceptional moving services to customers in the US. As a startup, we believe that moving doesn't have to be stressful or complicated, and we are passionate about making the process as seamless and enjoyable as possible.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Get a Quote</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div class="container px-5">
            <img src={moving} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Columns with icons</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              {/* <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> --> */}
              <img src={briefcase} alt="" height="30px" />
            </div>
            <h3 class="fs-2 text-body-emphasis">Professional</h3>
            <p>Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail. We understand that your possessions are more than just objects - they are a reflection of your life, memories, and experiences. That's why we take extra care to ensure that everything is packed and transported with the utmost care and attention.</p>
            <a href="#" class="icon-link">
              Get a quote
              <img src={chevronright} alt="" />
              {/* <!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> --> */}
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              {/* <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> --> */}
              <img src={busfont} alt="" height="30px" />
            </div>
            <h3 class="fs-2 text-body-emphasis">Countrywide</h3>
            <p>We offer a range of services to suit your individual needs, whether you're moving locally or across the country. Our team can handle everything from packing and loading to unloading and unpacking, so you can focus on settling into your new home. And with our transparent pricing and no hidden fees, you can trust that you're getting a fair and competitive rate for our services.</p>
            <a href="#" class="icon-link">
              Get a quote
              <img src={chevronright} alt="" />
              {/* <!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> --> */}
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              {/* <!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> --> */}
              <img src={chatsquare} alt="" height="30px" />
            </div>
            <h3 class="fs-2 text-body-emphasis">Personal Touch</h3>
            <p>At our core, we believe that moving should be an exciting and positive experience, not a stressful one. By providing exceptional moving services in the US, we hope to revolutionize the way people think about moving and provide a better, more personalized experience for our customers. Contact us today to learn more about how we can help you with your next move.</p>
            <a href="#" class="icon-link">
              Get a quote
              <img src={chevronright} alt="" />
              {/* <!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> --> */}
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={dog} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={family} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <div className="containerr">
  <Carousel>
    <img src={family} alt="family" className='CarouselImagee'/>
    <img src={dog} alt="dog"  className='CarouselImagee'/>
  </Carousel>
</div> */}

      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
            </a>
            <p class="text-body-secondary">© 2023</p>
          </div>

          <div class="col mb-3">

          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default Home