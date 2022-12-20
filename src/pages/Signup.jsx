import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const { username } = user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.id,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success('Account created');
      navigate('/login');
      console.log(user);
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <Helmet title='signup'>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='h-100vh text-center'>
                <h6 className='fw-bold'>Loading</h6>
              </Col>
            ) : (
              <Col lg='9' className='m-auto text-center'>
                <h3 className='fs-4 fw-bold mb-3'>Sign up</h3>
                <Form className='auth_form' onSubmit={signup}>
                  <FormGroup>
                    <input
                      type='text'
                      placeholder='Enter your Fullname'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>

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

                  <FormGroup>
                    <input
                      className='select_file'
                      type='file'
                      value={file}
                      onChange={(e) => setFile(e.target.file)}
                    />
                  </FormGroup>

                  <motion.button
                    type='Submit'
                    preventDefault
                    whileTap={{ scale: 1.2 }}
                    className='shop_btn auth_btn w-30'
                  >
                    Create Account
                  </motion.button>

                  <div className='create_account mt-2 fw-light create_account'>
                    <p className='create_account'>
                      Have an account ?
                      <span className='link'>
                        <Link to={'/login'}>Login</Link>
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

export default Signup;
