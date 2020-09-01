import React from 'react'
import {Link} from 'react-router-dom';
import { MDBView } from "mdbreact";

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-lg-4 col-xl-4 col-10 mx-auto">
            
                    <div className="card mb-4">
                               <MDBView hover zoom>
                                 <img
                                    src={props.imgsrc}
                                    style={{height:'300px'}}
                                    className="card-img-top rounded z-depth-1-half"
                                    alt="CardImage"
                                />
                               </MDBView>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">
                                    {props.text}
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read More..</Link>
                                
                        </div>
                    </div>

          </div>
                    
        </>
    )
}

export default Card
