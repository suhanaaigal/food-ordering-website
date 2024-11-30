import { Button, ListGroup } from 'reactstrap';
import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/shopping-cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUISlice';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div data-aos="fade-right" className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill" />
          </span>
        </div>
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => <CartItem item={item} key={index} />)
          )}
        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>₹{totalAmount}</span>
          </h6>
          <SignedIn>
            <button style={
              {
                borderRadius:'10px',
              }
            }>
              <Link to="/checkout">Checkout</Link>
            </button>
          </SignedIn>
          <SignedOut>
            <button style={
              {
                borderRadius:'10px',
              }
            }>
              <Link to="/login">Login Please</Link>
            </button>
          </SignedOut>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;