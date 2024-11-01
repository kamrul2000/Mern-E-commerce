import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {registerUser,user,error}=useAuth();

    let naviagte=useNavigate();
    let location=useLocation();
    let from=location?.state?.form?.pathname || '/profile'
    user.email && naviagte(from,{ replace:true})

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        registerUser(data.name,data.image,data.email,data.password);
        console.log(registerUser);
    }
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Register</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">

                        <div className="form-group mt-2">
                            <label htmlFor='name' className='form-label p-1'>Name</label>
                            <input type='text' className="form-control p-2" {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='image' className='form-label p-1'>Image</label>
                            <input type='text' className="form-control p-2" {...register("image", { required: true })} />
                            {errors.image && <span className='text-danger'>This field is required</span>}
                        </div>


                        <div className="form-group mt-2">
                            <label htmlFor='email' className='p-1'>Email</label>
                            <input id='email' type='text' className="form-control p-2" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='password' className='p-1'>Password</label>
                            <input id='password' type='password' className="form-control p-2"{...register("password", { required: true })} />
                            {errors.password && <span className='text-danger'>This field is required</span>}
                        </div>

                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>

                         <p>{error}</p>
                        <input type="submit" className="btn btn-dark p-2" value="Register" />

                        <div className="mt-3">
                            <Link to='/login' className='text-black text-decoration-none'>Already have an Account? <span className='text-primary text-decoration-underline'> Sign In</span></Link>
                        </div>
                    </div>

                </form>

            </div>
        </section>
    );
};

export default Register;