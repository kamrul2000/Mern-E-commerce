import React, { useEffect, useState } from 'react';
import './Cart.css'
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { deleteShoppingCart, getStoreCart, removeFromDb } from '../../Utilities/localDb';
import products from '../../data/productsData.json';
import Swal from 'sweetalert2';

const Cart = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    let savedCart = getStoreCart();
    let cart = [];  
    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        });
    }

    useEffect(() => {
        if (cart.length > 0) {
            setDisabled(false);  
        } else {
            setDisabled(true);  
        }
    }, [cart]);

    const handleClick = () => {
        if (cart.length > 0) {
            navigate('/shipping');
        } else {
            Swal.fire(
                'Error!',
                'Your Cart is Empty!',
                'error'
            );
        }
    };

    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar />
            <div className='container mt-5'>
                <div className='row'>
                    <div className="cart-container col-lg-9">
                        <h1 className='mt-5 fs-4 cart-container-title'>Shopping Cart</h1>
                        {
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
                                                        <td>{product.name}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.quantity * product.price}</td>
                                                        <td><button onClick={() => removeFromDb(product.id)} className='btn btn-danger'>Remove</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <button onClick={() => deleteShoppingCart()} className='btn btn-outline-danger'>Remove All Products</button>
                                </div>
                                :
                                <p style={{ maxWidth: '500px' }} className='p-2 '>Your Cart is empty <Link to='/products' className='text-decoration-none'><span className='text-primary'>Go Back</span></Link></p>
                        }
                    </div>
                    <div className='col-lg-3 mt-5'>
                        <div style={{ border: '1px solid lightgray' }} className='p-2'>
                            <h2 className='fs-5 text-center'>Sub Total: {cart.reduce((a, b) => { return a + b.quantity }, 0)} item(s)</h2>
                            <h3 className='fs-5 text-center'>Price: {cart.reduce((a, b) => { return a + b.quantity * b.price }, 0)} Taka</h3>
                        </div>
                        <div onClick={handleClick} style={{ border: '1px solid lightgray' }} className='py-2 mt-2'>
                            <button
                                id='btn_checkout'
                                
                                className={`btn mx-auto d-block ${cart.length > 0 ? 'btn-dark p-2' : 'btn-secondary'}`}
                                disabled={disabled}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
