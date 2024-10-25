import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/productsData.json'
import Navbar from '../Shared/Navbar/Navbar';
import reportWebVitals from './../../reportWebVitals';

const ProductDescription = () => {
    const { id } = useParams();
    const product=products.find(pd=>pd.id===id)
  
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>
            <div className='container'>
                <h2 className='fs-4 mt-5 text-center'> Product Details </h2>
                <div className="row products-container justify-content-center align-items-center">
                    <div className='col-lg-4'>
                        <img src={product.image} className="cart-img-top width={250} img-fluid mx-auto d-block" alt={product.name} />
                         <div className='d-flex justify-content-center align-items-center'>
                            <button className='btn btn-warning mt-2'>Add to Cart</button>
                            <button className='btn btn-success mt-2 ms-2'>Buy Now</button>
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
