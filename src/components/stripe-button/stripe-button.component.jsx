import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckButton = ({price}) => {
  const priceForStripe = price * 100 ;
  const publishableKey = 'pk_test_51I0jtGF0TFxEW4qmG3adUE89QtZzhPjD23Dwj77euxrHMcj07IauercWEe7PIGFbo2K9CH4rqOE8neRR9OwlXKKY00Il7jZKDL';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label = 'Pay Now'
      name = 'ENSAK Shop'
      billingAdress
      shippingAdress
      image = 'https://www.svgrepo.com/show/9862/payment-methods.svg'
      description = {`Your total is :  ${price}$`}
      amount = {priceForStripe}
      panelabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  )
}

export default StripeCheckButton;
