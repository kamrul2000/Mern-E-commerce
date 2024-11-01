import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { json, useNavigate } from 'react-router-dom';

const Payment = () => {
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate()

    function onSubmit(data) {
        console.log(data);
        localStorage.setItem('payment_mode',JSON.stringify(data.payment_mode))
        navigate('/order')
    }
    return (
        <section className='bg bg-brand-container'>
            <Navbar />
            <div className='Container'>
                <h1 className='fs-4 text-center mt-5'>Enter Your Payment Mode</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <label htmlFor="aamarPay" className='mt-2' >
                            <input
                                {...register("payment_mode", { required: true })}
                                type="radio"
                                name="payment_mode"
                                value="Aamar Pay"
                                id='aamarPay'

                            />
                             Aamar Pay
                        </label>
                        <br/>
                        <label htmlFor="cash" className='mt-2'>
                            <input
                                {...register("payment_mode", { required: true })}
                                type="radio"
                                name="payment_mode"
                                value="Cash On Delivary"
                                id='cash'
                            />
                             Cash On Delivery
                        </label>
<br/>
                        <button type="submit" className='btn btn-dark p-2 mt-2'>
                            Continue
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Payment;