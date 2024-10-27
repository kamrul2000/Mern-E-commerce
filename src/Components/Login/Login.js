import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import googleImage from '../../images/google.png'
import githubImage from '../../images/github.png'
import { Link } from 'react-router-dom';
import { to } from './../../../node_modules/@firebase/app-compat/dist/index.cjs';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=data=>console.log(data);
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Sign In</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">

                        <div className="form-group mt-2">
                            <label htmlFor='email' className='p-1'>Email</label>
                            <input type='text' className="form-control p-2" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='password' className='p-1'>Password</label>
                            <input type='password' className="form-control p-2"{...register("password", { required: true })} />
                            {errors.password && <span className='text-danger'>This field is required</span>}
                        </div>

                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>

                        <div className="mt-3">
                            <Link to='/reset-password' className='text-black text-decoration-none'>Can't Remember your password? <span className='text-primary text-decoration-underline'>Click here</span></Link>
                        </div>

                        <input type="submit" className="btn btn-dark p-2 mt-2" value="Log In" />


                        <div className="mt-3">
                            <Link to='/register' className='text-black text-decoration-none'>Don't have an Account? <span className='text-primary text-decoration-underline'>Register as a new user</span></Link>
                        </div>
                    </div>

                </form>

                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="col-sm-2"><hr /></div>
                    <p className="text-center mt-3 px-3">Or Sign in Using</p>
                    <div className="col-sm-2"><hr /></div>
                </div>

                <div className="d-flex justify-content-center align-items-center p-2">
                    <button  style={{ minHeight: '60px' }} className='btn d-flex justify-content-center align-items-center mt-2'>
                        <img src={googleImage} className='img-fluid mx-auto d-block' width={50} alt="Sign in Using Google" />Google</button>{/* <p className='mt-2 ms-1'>Google</p> */}

                    <button  style={{ minHeight: '60px' }} className='btn d-flex justify-content-center align-items-center mt-2 ms-2'>
                        <img src={githubImage} className='img-fluid mx-auto d-block' width={40} alt="Sign in Using GitHub" /><p className='mt-3 ms-2'>GitHub</p>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Login;