import React from 'react';
import Common from './Common';
import w2 from '../src/images/w2.jpg';


function About(props) {
    return (
        <div>
         <Common title="Welcome To About Page" redirect="/contact" imgsrc={w2} btnname="Contact Now"/>
        </div>
    )
}

export default About
