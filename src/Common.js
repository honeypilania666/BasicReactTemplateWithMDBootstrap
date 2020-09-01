import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

function Common(props) {
    return (
       <>
        <section id="header">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row headerMainContent">
        <div className="col-md-6 pt-5 order-2 order-lg-2 min-vh-100 d-flex justify-content-center flex-column">
        <h1 className="">{props.title} <Link to="/"><strong className="brand-name">Honey Pilania</strong></Link></h1>
        <h3 className="my-3">We are the team of talented developers which makes fast, responsive and scalable websites.</h3>
        <div className="mt-3">
        <Link className="btn btn-outline-primary" to={props.redirect}>{props.btnname}</Link>
        </div>
        </div>

          <div className="col-lg-6 order-1 order-lg-2 header-img  d-flex justify-content-center flex-column">
              <img
                src={props.imgsrc}
                className="headerimg img-fluid hover-zoom shadow-2-strong rounded animated z-depth-2"
                alt="HeaderImage"
                
                />
          </div>  
        </div>
        </div>
        </div>
        </div>
        </section>
       </>
    )
}

export default Common
