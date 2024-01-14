"use client"
import SectionHeading from "@/components/shared/section-heading";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardLarge from "../cards/card-lg";

export default function PopularPackages() {

    const breakpoints = {
        200: {
            slidesPerView: 0.6,
        },
        300: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1.3,
        },
        500: {
            slidesPerView: 1.5,
        },
        600: {
          slidesPerView: 1.8
        },
        768: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        }
    };


    return <>
        <SectionHeading name={'Popular Packages'}/>
        <div className="my-4 max-w-[95dvw] mx-auto">
            <Swiper
               modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
               autoplay={{delay: 2000}}
               centeredSlides={true}
               breakpoints={breakpoints}
               pagination={{ clickable: true }}
               loop={true}
               navigation={true}
               className='w-full'
            >
                {Array.from({length: 10}).map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className="my-10"
                    >
                        <Link href={'/packages/goa'}>
                           <CardLarge />
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
}