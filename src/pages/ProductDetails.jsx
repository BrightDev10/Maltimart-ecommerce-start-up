import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import Productlist from '../components/UI/ProductList';

import '../styles/product-details.css';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlices';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');

  const reviewUser = useRef('');
  const reviewMsg = useRef('');

  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    avgRating,
    price,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObject = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObject);
    toast.success('Review added!');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('product added successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='product_details_section'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg='6'>
              <div className='product_details'>
                <h2>{productName}</h2>
                <div className='product_rating align-items-center  d-flex gap-5 mb-3 rating_group'>
                  <div>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-half-s-fill'></i>
                    </span>
                  </div>
                  <p>
                    <span>{avgRating}</span> Rating
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-5'>
                <span className='product_price'>${price}</span>
                <p>Category: {category}</p>
              </div>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='shop_btn'
                onClick={addToCart}
              >
                Add to cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {/* tab_wrapper_control */}
              <div className='tab_wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active_tab' : ' '}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active_tab' : ' '}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className='tab_content mt-5'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product_review'>
                  <div className='review_wrapper'>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-4 mt-4'>
                          <h6>John Doe</h6>
                          <span className='rating gap-3'>
                            {item.rating} (Rating)
                          </span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className='review_form'>
                      <h4 className='mb-2 fs-.9'>Leave your review</h4>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form_group'>
                          <input
                            type='text'
                            placeholder='Enter name'
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className='form_group d-flex gap-3'>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class='ri-star-half-s-fill'></i>
                          </motion.span>
                        </div>
                        <div className='form_group'>
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type='text'
                            placeholder='Review message...'
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='shop_btn'
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <sectiom className='related_products'>
        <Container>
          <Row>
            <Col>
              <h4 className=' related_products_title mb-3 mt-3'>
                You might also like
              </h4>
              <Productlist data={relatedProducts} />
            </Col>
          </Row>
        </Container>
      </sectiom>
    </Helmet>
  );
};

export default ProductDetails;
