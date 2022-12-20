import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='title'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-3 fs-5'>Billing Information</h6>
              <Form className='billing_form'>
                <FormGroup className='form_group'>
                  <input type='text' placeholder='enter your name' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='email' placeholder='enter your email' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='number' placeholder='phone number' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='text' placeholder='address' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='text' placeholder='city' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='text' placeholder='postal code' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type='text' placeholder='country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout_cart'>
                <h6>
                  Total quantity:{' '}
                  <span>
                    ${totalQuantity} {totalQuantity < 2 ? 'item' : 'items'}
                  </span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span>$0</span>
                </h6>
                <h6>
                  Shipping: <br /> <span>Free Shipping</span>
                </h6>
                <hr />
                <h4>
                  Total cost: <span>${totalAmount}</span>
                </h4>
                <button className='shop_btn auth_btn w-100'>Place order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
