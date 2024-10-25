import React from 'react';
import camera from '../../images/hero/camera.jpg'
import earphone from '../../images/hero/earphone.jpg'
import smartwatch from '../../images/hero/smartwatch.jpg'

const Hero = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                
                <div class="carousel-inner container">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '400' }} class="my-2 text-center">Polaroid Camera</h2>
                        <img src={camera} class="img-fluid mx-auto d-block w-50" alt="camera"/>
                             
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3 text-center">Get enhanced features and security with HomeKit Secure Video.Video analysis and notifications happen on your Apple device. And everything is encrypted before it’s stored in iCloud.</h3>
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3 text-center ">Price: <span className='fw-bold'>22000 </span>Taka</h3>
                            
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '400' }} class="my-2 text-center">Apple Smart Watch</h2>
                        <img src={smartwatch}class="img-fluid mx-auto d-block w-50" alt="watch"/>
                                
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3 text-center">Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. Fresh band colors. Apple Watch SE is packed with features at a feel-good price.</h3>
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3 text-center">Price: <span className='fw-bold'>33000 </span>Taka</h3>    
                    </div>
                   
                    <div class="carousel-item" data-bs-interval="2000">
                        <h2 style={{ fontSize: '24px', color: '#212529', fontWeight: '400' }} class="my-2 text-center">Apple Airpods Pro</h2>
                        <img src={earphone} class="img-fluid mx-auto d-block w-50" alt="watch" />
                            
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3 text-center">Immersive, theater-like sound.
                            Personalized Spatial Audio with dynamic head tracking places sound all around you, creating a three-dimensional listening experience for music, TV shows, movies, games, and more.</h3>
                        <h3 style={{ fontSize: '18px', color: '#212529' }} class="my-3<span></span> text-center">Price: <span className='fw-bold'>12000 </span>Taka</h3>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;