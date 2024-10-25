import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Home.css';
import Hero from '../Hero/Hero';
import TopProducts from '../Top Products/TopProducts';

const Home = (props) => {
    return (
        <div className='bg-brand bg-brand-container'>
         <Navbar/>
         <div className='container hero-container mt-3'>
                <Hero />
         </div>
      <div className='container'>
            <TopProducts/>
      </div>
        </div>
    );
};

export default Home;