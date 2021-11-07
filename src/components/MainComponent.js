import React, {Component} from 'react';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import {DISHES} from '../shared/dishesh';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import Contact from "./ContactComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    /*  onDishSelect(dishId) {
             this.setState({selectedDish: dishId});
        }*/
    render() {
        const HomePage = () => {
            return (<Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                comment={this.state.comments.filter((comment) => comment.featured)[0]}
                promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />);
        };
        const ContactUs = () => {
            return (<Contact/>);
        }
        return (

            <div>
                <Header/>
                {/*<Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}/>
         <div className="container mb-5">
            <DishDetails 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}>
            </DishDetails>
         </div>*/}
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/contactus" component={ContactUs}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    };

}

export default Main;
