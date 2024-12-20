import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        localStorage.setItem('shipping', JSON.stringify(data));
        console.log("Shipping details stored:", JSON.parse(localStorage.getItem('shipping')));
        navigate('/payment'); // Removed timeout for simplicity
    };

    return (
        <section className='bg bg-brand-container'>
            <Navbar />
            <div className='Container'>
                <h1 className='fs-4 text-center mt-5'>Shipping Details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">
                        <div className="form-group mt-2">
                            <label htmlFor='address' className='p-1'>Address</label>
                            <input type='text' className="form-control p-2" {...register("address", { required: true })} />
                            {errors.address && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor='city' className='p-1'>City</label>
                            <input type='text' className="form-control p-2" {...register("city", { required: true })} />
                            {errors.city && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor='postalCode' className='p-1'>Postal Code</label>
                            <input type='text' className="form-control p-2" {...register("postalCode", { required: true })} />
                            {errors.postalCode && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor='country' className='p-1'>Country</label>
                            <input type='text' className="form-control p-2" {...register("country", { required: true })} />
                            {errors.country && <span className='text-danger'>This field is required</span>}
                        </div>
                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>
                        <input type="submit" className="btn btn-dark p-2 mt-2" value="Continue" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Shipping;
