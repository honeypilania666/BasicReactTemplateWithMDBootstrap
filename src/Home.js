import React from 'react';
import Common from './Common';
import w1 from '../src/images/w1.jpg';


function Home(props) {
    return (
        <div>
         <Common title="Welcome To Home Page" redirect="/Services" imgsrc={w1} btnname="Get Started"/>
        </div>
    )
}

export default Home
