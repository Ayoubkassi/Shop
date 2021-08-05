import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems  } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);
