import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>CraveNext</h5>
              <p>
                Fast and easy food delivery service to spoil the foodie within
                you.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Thursday</span>
                <p>10:00am - 9:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Sunday</span>
                <p>11 :00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location:Sahyadri College Of Enginnering And Management</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Mobile:+91 1234567890</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: contact@cravenext.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subcribe our newsletter</p>
            <div className='newsletter'>
              <input type='email' placeholder='Enter your email'></input>
              <span>
                <i class='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
         
            
  
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow us: </p>
              <span>
                <Link to='https://www.facebook.com/'>
                  <i className='ri-facebook-circle-fill'></i>
                </Link>
              </span>
              {/* <span>
                <Link to='https://github.com/'>
                  <i className='ri-github-fill'></i>
                </Link>
              </span> */}
              <span>
                <Link to='https://www.linkedin.com/'>
                  <i className='ri-linkedin-box-fill'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
