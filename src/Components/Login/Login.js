import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';

const Login = () => {
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container mt-5'>
                <h1 className='fs-4'>Login</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;