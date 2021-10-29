import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import {DISHES} from '../shared/dishesh';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
         this.setState({selectedDish: dishId});
    }
  render() {
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Napster</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}/>
         <div className="container">
            <DishDetails 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}>
            </DishDetails>
         </div>
        </div>
    );
  };
 
}

export default Main;
