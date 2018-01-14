import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    state = {
      ingredients: {
        meat: 1,
        salad: 1,
        bacon: 1,
        cheese: 2
      }
    }

    checkoutCancelledHandler = (props) => {
      this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
      this.props.history.replace('/checkout/contact-data');
    }

    render() {
      return (
        <div>
          <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinue={this.checkoutContinueHandler}
          />
        </div>
      );

    }
}

export default Checkout;
