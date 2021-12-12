import React, {Component} from 'react';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutUsComponent";
import {connect} from "react-redux";
import {
    postComment,
    fetchComments,
    fetchDishes,
    fetchPromos,
    fetchLeaders,
    postFeedback} from "../redux/ActionCreators";
import {actions} from "react-redux-form";
import { TransitionGroup, CSSTransition} from "react-transition-group"
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {
        dispatch(actions.reset('feedback'))
    },
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    postFeedback: (feedbackObj) => {dispatch(postFeedback(feedbackObj))}
})

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomePage = () => {
            return (<Home
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                comment={this.props.comments.comments.filter((comment) => comment.featured)[0]}
                promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}
                leaders={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
            />);
        };

        const DishWithId = ({match}) => {
            if(this.props.comments.comments.length > 0) {
                return (
                    <DishDetails
                        dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                        isLoading={this.props.dishes.isLoading}
                        errMess={this.props.dishes.errMess}
                        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                        commentsErrMess={this.props.comments.errMess}
                        postComment={this.props.postComment}
                    />);
            } else {
                return (<div></div>);
            }

        }
        const AboutPage = () => {
            return (
                <About
                    leaders={this.props.leaders.leaders}
                    leaderErrMess={this.props.leaders.errMess}
                    leaderLoading={this.props.leaders.isLoading}
                />
            );
        }

        const ContactPage = () => {
            return (
                <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                />
            );
        };
        return (

            <div>
                <Header/>
                <TransitionGroup>
                    <CSSTransition
                    key={this.props.location.key}
                    classNames="page"
                    timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            <Route exact path="/contactus" component={ContactPage}/>
                            <Route excat path="/aboutus" component={AboutPage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                            <Route path="/menu/:dishId" component={DishWithId}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>

                </TransitionGroup>

                <Footer/>
            </div>
        );
    };

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
