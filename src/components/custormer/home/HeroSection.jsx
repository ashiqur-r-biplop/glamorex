'use client'
import Image from 'next/image';
// import React, {useRef, useState } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import bannerBg from '../../../../../public/assets/img/heroBg.jpg'
import bannerBg from '../../../../public/assets/img/signinBg.jpg'
import bannerMen from '../../../../public/assets/img/banner-men-3.jpg'
import bannerWoman from '../../../../public/assets/img/banner-woman-1.jpg'
import bannerTrending from '../../../../public/assets/img/banner-trending-2.jpg'


const HeroSection = () => {
    return (


        <div className="text-white bg-cover bg-center" style={{ backgroundImage: `url(${bannerBg.src})` }}>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                    }}
                    // mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper h-screen w-full"
                >
                    
                    {/* Men */}
                    <SwiperSlide className='h-full my-container  bg-blend-overlay bg-slate-700 bg-cover bg-center' style={{display: 'flex', alignItems: 'center', backgroundImage: `url(${bannerMen.src})`}}>
                        <div className='space-y-5 w-full bg-slate-800 bg-opacity-50 py-6 sm:px-20 lg:px-52 text-center'>
                            <h2 className='my-title'>Attention, Dapper Dudes!</h2>
                            <p>Step into a Realm of Impeccable Taste - Unleash the Manly Mojo with Our Exquisite Collection of Trendsetting Apparel, Handsome Accessories, and Luxurious Footwear that Exude Unrivaled Confidence and Charm!</p>
                            <button className='my-btn-one-outline mx-2'><Link href={'/shop'}>Shop Mens Fashion</Link></button>

                        </div>
                    </SwiperSlide>

                    {/* Woman */}
                    <SwiperSlide className='h-full my-container  bg-blend-overlay bg-slate-700 bg-cover bg-center' style={{display: 'flex', alignItems: 'center', backgroundImage: `url(${bannerWoman.src})`}}>
                        <div className='space-y-5 w-full bg-slate-800 bg-opacity-50 py-6 sm:px-20 lg:px-52 text-center'>
                            <h2 className='my-title'>Hey, Gorgeous!</h2>
                            <p>From Runway to Your Way - Unleash Your Inner Goddess and Paint the Town Red with Glamour, as You Dazzle in Our Enchanting Dresses, Graceful Tops, Trendy Bottoms, and Stunning Accessories that Define Unparalleled Beauty and Style!</p>
                            <button className='my-btn-one-outline mx-2'><Link href={'/shop'}>Shop Womans Fashion</Link></button>
                        </div>
                    </SwiperSlide>

                    {/* Shop */}
                    <SwiperSlide className='h-full my-container  bg-blend-overlay bg-slate-700 bg-cover bg-center' style={{display: 'flex', alignItems: 'center', backgroundImage: `url(${bannerTrending.src})`}}>
                        <div className='space-y-5 w-full bg-slate-800 bg-opacity-50 py-6 sm:px-20 lg:px-52 text-center'>
                            <h2 className='my-title'>Discover Hot Trends - Be a Trendsetter!</h2>
                            <p>Explore a Cosmic Collection That's Out-of-this-World - Grab the Must-Haves Before They Vanish Into the Cosmos! Our Trending Products Showcase the Perfect Fusion of Style and Innovation, Elevating Your Fashion Game to Stellar Heights. Embrace the Pinnacle of Fashion Evolution!</p>
                            <button className='my-btn-one-outline mx-2'><Link href={'/shop'}>Explore Trending Products</Link></button>
                        </div>
                    </SwiperSlide>

                </Swiper>
        </div>
    );
};

export default HeroSection;