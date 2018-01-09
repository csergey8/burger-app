import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  //constructor(props) {
    //super(props);
    //this.state = {...}
  //}

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }
  render() {
    return (
      <Aux>
      <Burger ingredients={this.state.ingredients} />
      <div>Build Control</div>
      </Aux>

    );
  }
}

export default BurgerBuilder;