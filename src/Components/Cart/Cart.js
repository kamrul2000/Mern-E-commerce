import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import ProductsList from '../ProductList/ProductsList';


const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container mt-5'>
                <div className='col-lg-9'> <h1 className='mt-5 fs-4'>Shoping Cart</h1>
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
                            {cart.map((product,index)=>
                                <tr key={index+1} className='text-center'>
                                    <td scope="row"><img src={product.image} className='img-fluid' width={60} alt={product.name}/></td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td></td>
                                    <td></td>
                                    <td><button className='btn btn-danger'>Remove</button></td>

                                </tr>

                            )}
                            
                            
                            
                        </tbody>
                    </table>
                
                </div>
                <div className='col-lg-3'></div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;