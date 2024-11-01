import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import {getStoreCart } from '../../Utilities/localDb';
import products from '../../data/productsData.json';


const Order = () => {
    const { user } = useAuth();
    const { displayName, email } = user;

    const [shippingDetails, setShippingDetails] = useState(null);
    const [paymentMode, setPaymentMode] = useState(null);

    useEffect(() => {
        const shipping = JSON.parse(localStorage.getItem('shipping'));
        const payment = JSON.parse(localStorage.getItem('payment_mode'));

        console.log('Shipping Details from localStorage:', shipping); // Debugging line
        setShippingDetails(shipping);
        setPaymentMode(payment);
    }, []);

    let savedCart = getStoreCart();
    let cart = [];
    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        });
    }

    return (
        <section className='bg-brand bg-brand-container py-2'>
            <Navbar />
            <div className="container mt-5">
                <h1 className='fs-4 text-center'>Order Summary</h1>
                <h2 className='fs-5 fw-bold'>Shipping Details</h2>
                <h3 className='fs-6'>Name: {displayName}</h3>
                <h3 className='fs-6'>Email: {email}</h3>
                {
                    shippingDetails ? (
                        <p>Address: {shippingDetails.address}, {shippingDetails.city}, {shippingDetails.postalCode}, {shippingDetails.country}</p>
                    ) : (
                        <p>No shipping details available.</p>
                    )
                }

                <div className='col-md-8 col-sm-12'>
                    <hr />
                </div>

                <h2 className='fs-5'>Payment Mode</h2>
                <p>Method: {paymentMode || 'No payment method selected.'}</p>

                <div className='col-md-8 col-sm-12'>
                    <hr />
                </div>

                <h2 className='fs-5'>Order Item</h2>
                {
                    cart.map(item=><li>{item.name}</li>)
                }


            </div>
        </section>
    );
};

export default Order;
