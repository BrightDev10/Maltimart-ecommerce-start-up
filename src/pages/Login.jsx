import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../styles/login.css';
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [loading, setLoading] = useState('');

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success('successfully logged in');
      Navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title='login'>
      <section>
        <Container>
          <Row>
            {loading ? (
              <h6 className='text-center fs-2'>Loading...</h6>
            ) : (
              <Col className='m-auto text-center'>
                <h3 className='fs-4 fw-bold mb-3'>Login</h3>
                <Form className='auth_form' onSubmit={signin}>
                  <FormGroup>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type='password'
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => setPassowrd(e.target.value)}
                    />
                  </FormGroup>

                  <motion.button
                    type='Submit'
                    preventDefault
                    whileTap={{ scale: 1.2 }}
                    className='shop_btn auth_btn w-30'
                  >
                    Login
                  </motion.button>

                  <div className='create_account mt-2 fw-light create_account'>
                    <p className='create_account'>
                      Don't have an account ?
                      <span className='link'>
                        <Link to={'/signup'}> Create an account</Link>
                      </span>
                    </p>
                  </div>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
