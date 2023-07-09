'use client'
import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
SwiperCore.use([Navigation]);
import Link from 'next/link'
import { CarouselHero } from '../types/types';
 

export function Carousel ({ movies, moviesBackdrop }: CarouselHero) {

  return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            modules={[Navigation, Thumbs, Pagination, Autoplay]}
            pagination={{ clickable: true}}
            className='w-[100vw] md:w-full overflow-hidden relative text-secondary h-[550px] 2xl:h-[750px]'
            navigation={true}
            autoplay={true}
            loop={true}
        >
            {movies.map((movie, index) => (
              <SwiperSlide key={index} className='relative '>
                <Image src={moviesBackdrop[index]} alt={movie.title} className='w-full object-cover' width={1280} height={720} loading='eager'/>
                <div className='absolute bottom-0 left-10 w-1/3 h-1/2 flex flex-col justify-end items-baseline gap-3 z-20 mb-8'>
                  <h1 className='text-5xl 2xl:text-6xl font-bold text-white max-w-[500px] 2xl:max-w-[700px] text-shadow-md'>{movie.title}</h1>
                  <p className='w-full text-xs font-bold'>RECIEN AÑADIDA</p>
                  <div className='flex  items-center gap-4 w-full'>
                    <button className='bg-black p-4 rounded-full outline outline-2 outline-white hover:outline-blue-500 hover:bg-btn-hover'>
                      <Image src='/play.svg' alt='Play'  width={22} height={22}/>
                    </button>
                    <Link href={`/detail/${movie.id}`}>
                      <button className='text-sm text-bold bg-btn rounded-md px-8 hover:bg-btn-hover p-2 hover:outline hover:outline-2 hover:outline-blue-500 '>
                        MÁS INFO
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='absolute bottom-0 w-full h-96 bg-gradient-to-t from-bg-very-dark z-10' />
              </SwiperSlide>
            ))}
            
        </Swiper>
  )
}
