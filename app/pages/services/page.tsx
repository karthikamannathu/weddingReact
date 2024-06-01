import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookOpen, faBrush, faCamera, faMusic, faRing, faUtensils} from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'




function Services() {
    // const myIcon : IconProp = "fas fa-book-open"
  return (
    <div>
    <section className="service" id="service">
      <div className="title">
          <h1><span>S</span>ervice</h1>
      </div>
      <div className="services-row">
          <div className="services-col">
           <i><FontAwesomeIcon  icon ={faBookOpen}/></i>
              <h2>invitation</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
             
              <h2>invitation</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
              <i><FontAwesomeIcon  icon ={faCamera}/></i>
              <h2>Photography & Video</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
             <i><FontAwesomeIcon  icon ={faBrush}/></i>
              <h2>Beauty & Makeup</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
              <i > <FontAwesomeIcon icon={faPagelines} /></i>
              <h2>Wedding flowers</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
              <i><FontAwesomeIcon icon={faBirthdayCake} /></i>
              <h2>wedding cake</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
              <i><FontAwesomeIcon icon={faMusic} /></i>
              <h2>music band</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col">
              <i><FontAwesomeIcon icon={faUtensils} /></i>
              <h2>Catering</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
          <div className="services-col" >
              <i className="fas fa-ring"><FontAwesomeIcon icon={faRing} /></i>
              <h2>Jewellery</h2>
              <p>Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae.</p>
          </div>
      </div>
  </section>
  </div>
  )
}

export default Services