import React from "react";
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon} from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" id="footer" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left container-fluid">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Honey Pilania</h5>
            <p>
             Visit us at our social media platforms for more details.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Social Links</h5>
            <ul>
                    <a href="https://www.twitter.com">
                    <MDBIcon fab icon="twitter" className="pr-1 fa-2x px-2" />
                    </a>
                    <a href="https://www.instagram.com">
                    <MDBIcon fab icon="instagram" className="pr-1 fa-2x px-2" />
                    </a>
                    <a href="https://www.facebook.com">
                    <MDBIcon fab icon="facebook" className="pr-1 fa-2x px-2" />
                    </a>
                    <a href="https://www.youtube.com">
                    <MDBIcon fab icon="youtube" className="pr-1 fa-2x px-2" />
                    </a>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="/"> Honey Pilania </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;