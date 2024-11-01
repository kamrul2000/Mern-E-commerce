import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../../data/productsData.json'
import Navbar from '../Shared/Navbar/Navbar';
import reportWebVitals from './../../reportWebVitals';
import { addToDb } from '../../Utilities/localDb';
import Swal from 'sweetalert2';

const ProductDescription = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const product=products.find(pd=>pd.id===id)
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        setCart([...cart, product])
        addToDb(product.id);
        Swal.fire({
            title: "Successful!",
            text: `You have added ${product.name}!`,
            icon: "success"
        });
    }
    
    const handleClick=(product)=>{
        addToCart(product);
        navigate('/shipping')
    }
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container'>
                <h1 className='text-center mt-5 mb-3 fs-4'> Product Details
 </h1>
                <div className="row products-container justify-content-center align-items-center">
                    <div className='col-lg-4'>
                        <img src={product.image} className="cart-img-top width={250} img-fluid mx-auto d-block" alt={product.name} />
                         <div className='d-flex justify-content-center align-items-center'>
                            <button onClick={()=>addToCart(product)} className='btn btn-dark mt-2'>Add to Cart</button>
                            <button onClick={()=>handleClick(product)} className='btn btn-success mt-2 ms-2'>Buy Now</button>
                        </div> 
                    </div>
                    <div className='col-lg-8'>
                          <div className='bg-white p-5 mt-4 mx-auto '>
                                <h2 className='fs-5 fw-bold'>{product.name}</h2>
                                <hr></hr>
                                <p style={{textAlign:'justify'}} className='fs-6 '>
                                    {product.description}
                                </p>
                                <hr>
                                </hr>
                                <small> Price: <span className='fs-5 f-w-bold'>{product.price}</span> Taka</small>
                          </div>
                    </div>
                
                
                </div>
            </div>
           
        </section>
    );
};

export default ProductDescription;
