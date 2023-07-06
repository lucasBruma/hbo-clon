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


type MovieType = {
  title: string,
  id: string,
}

type CarouselProps = {
  movies: Array<MovieType>;
  moviesPoster: Array<string>;
  title: string;
};

export function Gallery ({ movies, moviesPoster, title }: CarouselProps) {

  return (
    <div className='flex flex-col items-start justify-center'>
        <h2 className='text-white text-center text-xl font-bold mb-5 pl-10'>{title}</h2>
        <Swiper
            spaceBetween={0}
            slidesPerView={6}
            slidesPerGroup={6}
            modules={[Navigation, Thumbs, Pagination, Autoplay]}
            className='group w-[60%] md:w-full overflow-hidden relative select-none h-[310px] gallery'
            navigation={true}
            loop={true}
        >
            <div className='group-hover:bg-gradient-to-r from-bg-dark absolute h-[300px] w-16 top-0 z-10' />
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Link href={`/detail/${movie.id}`} className='cursor-pointer '>
                    <div className='absolute top-0 left-0 w-[200px] h-[300px] bg-black/30 hover:bg-black/0 ease-in-out duration-200'  />
                    <Image src={moviesPoster[index]} alt={movie.title} className='object-cover' width={200} height={300}/>
                </Link>
              </SwiperSlide>
            ))}
            <div className='group-hover:bg-gradient-to-l from-bg-dark absolute h-full w-16 top-0 right-0 z-10' />
        </Swiper>
    </div>
  )
}
