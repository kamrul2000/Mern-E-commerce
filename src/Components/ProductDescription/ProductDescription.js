import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/productsData.json'
import Navbar from '../Shared/Navbar/Navbar';
import reportWebVitals from './../../reportWebVitals';

const ProductDescription = () => {
    const { id } = useParams();
    const product=products.find(pd=>pd.id===id)
  
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container'>
                <h2 className='fs-4 mt-5 text-center'> Product Details </h2>
                <div className="row">
                    <div className='col-lg-4'>
                        <img src={product.image} className="cart-img-top img-fluid mx-auto d-block" alt={product.name} />

                    </div>
                
                
                </div>
            </div>
           
        </section>
    );
};

export default ProductDescription;
