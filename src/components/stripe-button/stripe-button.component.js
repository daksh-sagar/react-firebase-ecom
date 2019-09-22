import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_v2TjhrISPcw4XXWMai94DWHn'

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  )
}

export default StripeCheckoutButton
