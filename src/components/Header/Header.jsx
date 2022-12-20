import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import { Container, Row } from 'reactstrap';
import Logo from '../../assets/images/eco-logo.png';
import user_icon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';

const nav_links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  const currentUser = useAuth();

  const profileActionRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  });

  const menuToggle = () => {
    menuRef.current.classList.toggle('active_menu');
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileAction = () =>
    profileActionRef.current.classList.toggle('show_profile_actions');

  return (
    <header className='mb-2' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={Logo} alt='Logo' />
              <div>
                <h1>MaltiMart</h1>
                <p className='fs-.1'>Since 1995</p>
              </div>
            </div>

            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav_active' : ' '
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav_icons'>
              <span className='fav_icon'>
                <i class='ri-heart-line fs-.5'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart_icon' onClick={navigateToCart}>
                <i className='ri-shopping-bag-line fs-.5'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt=' '
                  onClick={toggleProfileAction}
                />

                <div
                  className='profile_actions'
                  ref={profileActionRef}
                  onClick={toggleProfileAction}
                >
                  {currentUser ? (
                    <span>Logout</span>
                  ) : (
                    <div>
                      <Link to='/signup'>Signup</Link>
                      <hr />
                      <Link to='/login'>Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className='mobile_menu'>
                <span className='mobileMenu' onClick={menuToggle}>
                  <i class='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
