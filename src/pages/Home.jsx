import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import '../styles/Home.css';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products.js';
import CountImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    );

    const filteredBestSellingProducts = products.filter(
      (item) => item.category === 'sofa'
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
    );
    const filteredwirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSellingProducts(filteredBestSellingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredwirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'> Trending products in {year} </p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>
                  Lorem ispsum sit dolor amet san serrif fonts of the futured
                  olor amet san serrif fonts of the future
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'>
                  <Link to='/shop'>Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6' className='mb-3'>
              <img src={heroImg} alt='Hero-img' />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending_products '>
        <Container>
          <Row>
            <Col lg='12' md='12' className='text-center'>
              <h2 className='section_title'>Trending products</h2>
            </Col>
          </Row>
          <ProductList data={trendingProducts} />
        </Container>
      </section>
      <section className='best_selling_products'>
        <Container>
          <Row>
            <Col lg='12' md='12' className='text-center'>
              <h2 className='section_title'>Best selling products</h2>
            </Col>
          </Row>
          <ProductList data={bestSellingProducts} />
        </Container>
      </section>
      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='countd_down'>
              <div className='clock-top_content'>
                <h4 className='text-white fs-6 mb-2'>Limited Offer!</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='shop_btn store_btn'
              >
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' className='text-end counter_img '>
              <img src={CountImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5 '>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h2 className='section_title'>Popular Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
