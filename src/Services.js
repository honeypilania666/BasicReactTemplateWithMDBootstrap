import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


function Services(props) {
 
    return (
        <>
           <div className="my-5 mt-5" >
            <h1 className="text-center ourservices underline">Our Services</h1>
           </div> 
           <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                      {
                           Sdata.map((item,index)=>{
                               return <Card key={index} imgsrc={item.imgsrc} title={item.title} text={item.text} />
                           })
                       }
                  </div>
                   
                </div>
            </div>
           </div>
           
        </>
    )
}

export default Services
