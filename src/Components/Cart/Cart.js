import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import ProductsList from '../ProductList/ProductsList';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container mt-5'>
          <div className='row'>
                    <div className='col-lg-9'> <h1 className='mt-5 fs-4'>Shoping Cart</h1>
                        {
                            cart?.length > 0 ?
                                <div className='table-responsive'>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Image</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Sub Total</th>
                                                <th scope="col">Remove</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((product, index) => (
                                                <tr key={index + 1} className='text-center'>
                                                    <td scope="row"><img src={product.image} className='img-fluid' width={60} alt={product.name} /></td>
                                                    <td>{product?.name}</td>
                                                    <td>{product?.price}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><button className='btn btn-danger'>Remove</button></td>

                                                </tr>

                                            ))}



                                        </tbody>
                                    </table>
                                </div> :
                                <p style={{
                                    display: 'inline-block',
                                    backgroundColor: '#E9EEF4',
                                    padding: '0.5rem 1rem',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}> Your Cart is Empty <Link to={'/products'} className='text-decoration-none p-2'>Go Back</Link> </p>
                        }

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