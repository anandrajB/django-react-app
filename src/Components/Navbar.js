import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Actions/Auth';

function Navbar({ logout, isAuthenticated }) {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (

        <li className='nav-item'>
            <Link className='nav-link' to='/register' >Register </Link>
        </li>
    );

    const authLinks = () => (
        <Fragment>
            
            <li className='nav-item'>
                <Link className='nav-link' to='/home' >home</Link>
            </li>


            <li className='nav-item'>
                <Link className='nav-link' to='/emp' >Lists</Link>
            </li>


            <li className='nav-item'>
                <Link className='nav-link' to='/chart' >Chart </Link>
            </li>

            <li className='nav-item'>
                <Link className='nav-link' to='/empr' >AddEmp </Link>
            </li>

            <li className='nav-item mr-auto'>
                <a className='nav-link' href='/' onClick={logout_user}>Logout</a>
            </li>

        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand text-success' to='/'>JabTrac</Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                    {isAuthenticated ? authLinks() : guestLinks()}
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/about'>About <span className='sr-only'></span></Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
