import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../Actions/Auth';





const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        domain: '',
        password: ''
    });

    const {  email, domain , password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        signup( email, domain , password);
        setAccountCreated(true);
    };


    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/' />
        

        
    }

    return (
        <div className='container mt-5'>
            <h1>Register your domain</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                
                
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <br/>

                <div className='form-group '>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='domain name*'
                        name='domain'
                        value={domain}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <br/>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <br/>
                
                <button className='btn btn-primary' type='submit'>Register</button>
                
            </form>
            
            <p className='mt-3'>
                Already have an account? <Link to='/'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);

