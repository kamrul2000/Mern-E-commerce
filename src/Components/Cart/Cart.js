import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import ProductsList from '../ProductList/ProductsList';
import { Link } from 'react-router-dom';
import { getStoreCart } from '../../Utilities/localDb';
import products from '../../data/productsData.json'

const Cart = () => {
     let savedCart=getStoreCart();
     let cart=[];
    for( let key in savedCart){
        cart.push({
           ...products.find(pd=>pd.id===key),
            quantity:savedCart[key]
        })
     }
     console.log(cart);
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container mt-5'>
          <div className='row'>
                    <div className="cart-container col-lg-9">
                        <h1 className='mt-5 fs-4 cart-container-title'>Shopping Cart</h1>
                        {/*
    cart?.length > 0 ?
        <div className="table-responsive pb-5">
            <table style={{ border: '1px solid lightgrey' }} className="table table-striped">
                <thead style={{ backgroundColor: '#E9EEF4' }}>
                    <tr className='text-center'>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product, index) => (
                            <tr key={index + 1} className='text-center'>
                                <td><img src={product?.image} className='img-fluid' width={40} alt={product?.name} /></td>
                                <td>{product?.name}</td>
                                <td>{product?.price}</td>
                                <td>{product?.quantity}</td>
                                <td>{product?.quantity * product.price}</td>
                                <td><button  className='btn btn-danger'>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button  className='btn btn-outline-danger'>Remove All Products</button>
        </div>
        :
        <p style={{ maxWidth: '500px', backgroundColor: '#E9EEF4' }} className='p-2 text-primary'>Your Cart is empty <Link to='/products' className='text-decoration-none'><span className='text-black'>Go Back</span></Link></p>
*/}

                    
                    </div>
                    <div className='col-lg-3 mt-5'>
                        <div style={{ border: '1px solid lightgray' }} className='p-2' >
                            <h2 className='fs-5 text-center'>Sub Total:{0}</h2>
                            <h3 className='fs-5 text-center'>Price:{0}</h3>
                        </div>
                        <div style={{ border: '1px solid lightgray' }} className='py-2 mt-2'>
                            <button className='btn btn-secondary mx-auto d-block'>Proced to Checkout</button>

                        </div>
                    </div>
          </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;