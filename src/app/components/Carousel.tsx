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

type MovieType = {
  title: string,
}

type CarouselProps = {
  movies: Array<MovieType>;
  moviesBackdrop: Array<string>;
};

export function Carousel ({ movies, moviesBackdrop }: CarouselProps) {

  return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            modules={[Navigation, Thumbs, Pagination, Autoplay]}
            pagination={{ clickable: true}}
            className='w-[100vw] md:w-full overflow-hidden relative text-secondary h-[550px]'
            navigation={true}
            autoplay={true}
            loop={true}
        >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Image src={moviesBackdrop[index]} alt={movie.title} className='w-full object-cover' width={1280} height={720} loading='eager'/>
                <div className='absolute bottom-0 left-10 w-1/3 h-1/2 flex flex-col justify-center items-start gap-3'>
                  <h1 className='text-4xl font-bold text-white max-w-[500px]'>{movie.title}</h1>
                  <p className='w-full'>Description: lorem impsuenasdfsdf asdfsadf asdfdsf</p>
                  <div className='flex  items-center gap-4 w-full'>
                    <button className='bg-black outline outline-2 outline-white p-2 rounded-full hover:outline-3 hover:outline-blue hover:bg-secondary'>
                      <Image src='/play.svg' alt='Play' width={27} height={27}/>
                    </button>
                    <button>Más info</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
  )
}
