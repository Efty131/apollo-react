import React, { useEffect } from 'react';
import Swiper from 'swiper';

import Pic1 from '../images/pic-1.png';
import Pic2 from '../images/pic-2.png';
import Pic3 from '../images/pic-3.png';
import Pic4 from '../images/pic-4.png';
import Pic5 from '../images/pic-5.png';
import Pic6 from '../images/pic-6.png';
import Header from '../components/header';
import Footer from '../components/footer';

const Reviews = () => {

    useEffect(() => {
        new Swiper('.reviews-slider', {
            spaceBetween: 20,
            grabCursor: true,
            loop: true,
            pagination: {
                el: '.swiperPagination',
                clickable: true,
            },
            breakpoints: {
                540: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }, []);

    return (
        <div>
            <Header />
            <section className="reviews" id="reviews">

                <h1 className="heading"> student's <span>reviews</span></h1>

                <div className="swiper reviews-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic1} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic2} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic3} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic4} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic5} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus atque fuga delectus numquam consequatur velit autem distinctio possimus culpa!</p>
                            <div className="user">
                                <img src={Pic6} alt="img" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="swiperPagination"></div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Reviews;