import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
        <Container>
          <Row>
            <Col lg='4' className='mb-4'>
              <div className='logo'>
                <div>
                  <h1 className='footer_logo mb-2 text-white mb-3'>
                    Multimart
                  </h1>
                </div>
              </div>
              <p className='logo_decription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci facere velit esse voluptates sint maiores reprehenderit
                impedit possimus, nobis itaque.
              </p>
            </Col>
            <Col lg='3' className='mb-4'>
              <div className='footer_quick-links'>
                <h4 className='quick_links-title'>Top Categories</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Mobile Phones</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/sofa'>Modern Sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Armchair</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='2' className='mb-4'>
              <div className='footer_quick-links'>
                <h4 className='quick_links-title'>Useful Links</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='3' className='mb-4'>
              <div className='footer_contact'>
                <h4 className='quick_links-title'>Contact</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-map-pin-line'></i>
                    </span>
                    <p>No 20 Aluguntugui Street, East Legon, Accra, Ghana</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-phone-line'></i>
                    </span>
                    <p>+234 819 567 6789</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-mail-line'></i>
                    </span>
                    <p>hello@maltimart.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='12'>
              <hr className='mt-4' />
              <p className='footer_copyright text-center mt-2'>
                Copyright {year} developed with 🤍 by Azeez. All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
