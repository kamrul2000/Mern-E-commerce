import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import products from '../../data/productsData.json'
import { Link } from 'react-router-dom';

const ProductsList = () => {
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar/>
           <div className='container'>
            <h1 className='text-center mt-5 mb-3 fs-4'>
                Products
            </h1>
            <div className='row products-container justify-content-center align-items-center'> 
                {
                    products.map(product=>{
                        return (
                            <div key={product.id} className="cart-deck mb-5 col-lg-3 col-md-5 col-sm-8 mx-1">
                                <Link to={`/productdescription/${product.id}`} className='text-decoration-none text-black'>
                                    <div className='cart'>
                                        <img src={product.image} className="cart-img-top img-fluid mx-auto d-block" alt={product.name} />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="cart-body col-sm-6">
                                                <h5 className="cart-title">{product.name}</h5>
                                                <p className="cart-text">Price: {product.price} Taka</p>
                                            </div>
                                            <div className="d-flex col-sm-6">
                                                <div className="col-sm-6 my-3">
                                                    <button className="btn btn-outline-dark">Details</button>
                                                </div>
                                                <div className="col-sm-6 my-3 mx-3">
                                                    <button className="btn btn-outline-secondary">Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>

           </div>
        </div>
    );
};

export default ProductsList;