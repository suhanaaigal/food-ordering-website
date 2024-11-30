import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';



const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Deliciousness Delivered to Your Doorstep!',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Your Favorite Meals, Fresh and Fast!',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'Taste the Good Life - Delivered!',
  },
];
const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                  Fast and easy food delivery service to spoil the foodie within
                  you
                </h5>
                <h1 data-aos="fade-right" className='mb-4 hero__title'>
                  <span>HUNGRY?</span> just wait <br /> food at
                  <span> your door!</span>
                </h1>

                <p>
                  Why Cook When You Can Click? Get Delicious Meals Delivered Fast!
                </p>

                <div data-aos="fade-right" className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                    Order now <i className='ri-arrow-right-s-line'></i>
                  </button>

                  <button className='all__foods-btn'>
                    <Link to='/foods'>See all foods</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Free Delivery
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img data-aos="fade-left" src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0' data-aos="fade-bottom">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4' data-aos="fade-right">What we serve</h5>
              <h2 className='feature__title' data-aos="fade-right"> Just sit back at home</h2>
              <h2 className='feature__title' data-aos="fade-right">
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
                Dinner Plans? We’ve Got You Covered - Explore Our Menu and Order Now!
              </p>
              <p className='mb-1 mt-4 feature__text'>
                Savor Your Flavour and Get Your Dish Delivered Right to Your Doorstep!
              </p>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div data-aos="fade-right" className='feature__item text-center px-5 py-3'>
                    <img
                      className='w-25 mb-3'
                      src={item.imgUrl}
                      alt='feature-img'
                    />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ₹{category === 'ALL' ? 'foodBtnActive' : ''
                    }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ₹{category === 'BURGER' ? 'foodBtnActive' : ''
                    }`}
                >
                  <img src={foodCategoryImg01} alt='' />
                  Burger
                </button>
                <button
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ₹{category === 'PIZZA' ? 'foodBtnActive' : ''
                    }`}
                >
                  <img src={foodCategoryImg02} alt='' />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 ₹{category === 'BREAD' ? 'foodBtnActive' : ''
                    }`}
                >
                  <img src={foodCategoryImg03} alt='' />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-foodie' className='w-100' data-aos="fade-right"></img>
            </Col>
            <Col data-aos="fade-left" lg='6' md='6'>
              <div className='why__foodie'>
                <h2 className='foodie-title mb-4'>
                  Why <span>CraveNext?</span>
                </h2>
                <p className='foodie-desc'>
                  Choosing our food delivery app means embracing convenience, quality, and an exceptional culinary experience right at your fingertips. Our app offers a seamless ordering process, real-time tracking, and faster delivery times to ensure your food arrives hot and fresh. We pride ourselves on catering to all dietary preferences, from vegan to gluten-free options, making it easy for everyone to find something they love. Plus, with our exclusive loyalty rewards, personalized meal recommendations, and eco-friendly practices, every order not only satisfies your cravings but also supports a sustainable future!
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Fresh and Tasty
                      food
                    </p>
                    <p className='choose__us-desc'>
                      "Why Cook? Just Click and Enjoy!"
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Quality support
                    </p>
                    <p className='choose__us-desc'>
                      "Indulge in Culinary Delights, Delivered in Minutes!"
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Order from any
                      location
                    </p>
                    <p className='choose__us-desc'>
                      "Stay In, Eat Out - The Best Local Food Delivered to You!"
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' data-aos="fade-right">
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-40'>
                  What our <span>customers </span>are saying
                </h2>
                <p className='testimonial__desc'>
                  Absolutely!Here are a few lines showcasing positive customer experiences for your food delivery website:

                  "Customers are raving about their exceptional experiences with our food delivery website! From prompt service to delightful culinary offerings, every order is a journey of satisfaction and convenience. Join the ranks of our happy customers and elevate your dining experience today!"
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6' data-aos="fade-left">
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
