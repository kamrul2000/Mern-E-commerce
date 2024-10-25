import React from 'react';
import './products.css';
import products from '../../data/productsData.json';
import { Link } from 'react-router-dom';

const TopProducts = () => {
    let topProducts = [];
    while (topProducts.length < 3) {
        const number = Math.floor(Math.random() * products.length);
        const selectedProduct = products[number];

        if (!topProducts.includes(selectedProduct)) {
            topProducts.push(selectedProduct);
        }
    }

    return (
        <div>
            <h1 style={{ fontSize: '22px', color: '#212529', fontWeight: '400' }} className='mt-5'>Top Products of This Week</h1>
            <div className="row products-container justify-content-center align-items-center">
                {
                    topProducts.map((product) => {
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
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TopProducts;
