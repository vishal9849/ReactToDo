import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default class NavigationBar extends Component{
    // Here we will return JSX code
    render(){
        return (
                <Navbar bg="dark" variant="dark">

                    <Link to ={''} className='navbar-brand'>
                        <img scr= "https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-5.jpg" />
                        Shopping
                    </Link>

                    <Nav className="me-auto">
                        <Link to = {'list'} className='nav-link'> Product List</Link>
                        <Link to = {'add'} className='nav-link'> Add Products</Link>
                    </Nav>
            </Navbar>
        ); 
    }
}
