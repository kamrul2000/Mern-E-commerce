import React from 'react';

const Footer = () => {
    return (
        <section className='pb-3'>
            <h1 className='text-center fs-6'>&copy; <span className="text-decoration-none text-muted" >Md. Kamrul Hassan</span> | {(new Date()).getFullYear()}</h1>
        </section>
    );
};

export default Footer;