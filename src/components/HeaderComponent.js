import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Napster</NavbarBrand>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome to napster's</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid architecto assumenda autem consequatur, dolore dolorem dolorum ducimus eligendi eum ex itaque nam necessitatibus nihil odit pariatur perspiciatis quae reprehenderit.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>);
    }
}

export default Header;
