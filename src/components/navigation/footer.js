import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../../styles/footer.css';
import 'mdbreact/dist/css/mdb.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import logo from '../../images/white-logo.png';

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#28857D" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-3 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Find us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="socials text-center text-md-right">
              <a href ="https://www.facebook.com/abdellaoui.houda.9" className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a href="https://twitter.com/uplabs/status/580156320956973056" className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a href="https://www.instagram.com/abdellaouih1_/?hl=fr" className="ins-ic">
                <i  className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
        <MDBCol md="5" lg="2" xl="4" className="mb-4">
            <img className="logo" src={logo} alt="this is a logo"></img>
          </MDBCol>
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase title">
              <strong>About us</strong>
            </h6>
            <hr className="line accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Our guides provides detailed and accurate travel content about Chefchaouen city, designed to inspire travellers. 
            It covers all aspects: Monuments, Transport,Entertainment and Trip Guiding 
            <br/>Our team are people, like you, doing this for the love of it. 
              </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase title">
              <strong>Menu</strong>
            </h6>
            <hr className="line accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Home</a>
            </p>
            <p>
              <a href="#!">Destinations</a>
            </p>
            <p>
              <a href="#!">Tours</a>
            </p>
            <p>
              <a href="#!">Trips</a>
            </p>
            
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase title">
              <strong>Contact</strong>
            </h6>
            <hr className="line accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://wego.here.com/?x=ep&map=35.16943,-5.26946,15,normal"> HereWeGoMaps.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;