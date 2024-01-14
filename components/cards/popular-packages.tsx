"use client"
import SectionHeading from "@/components/shared/section-heading";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from "next/link";
import {Clock, MapPin} from "lucide-react";

export default function PopularPackages() {
    return <>
        <SectionHeading name={'Popular Packages'}/>
        <div className="my-4 max-w-[95dvw] mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {Array.from({length: 10}).map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className="my-10"
                    >
                        <Link href={'#'}>
                            <div
                                className="w-full max-w-sm bg-slate-50 shadow rounded-lg">
                                <Image className="rounded-xl hover:scale-110 transition-all duration-300"
                                       src="/background.jpg"
                                       alt="product image"
                                       height={500}
                                       width={500}
                                       unoptimized={true}
                                />
                                <div className="px-5 py-5">
                                    <div className={'flex flex-row justify-between text-blue-500'}>
                                        <p className={'flex flex-row items-center space-x-1'}>
                                            <Clock size={20}/>
                                            <span>2N-3D</span>
                                        </p>
                                        <p className={'flex flex-row items-center space-x-1'}>
                                            <MapPin size={20}/>
                                            <span>Bali</span>
                                        </p>
                                    </div>
                                    <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">Goa</h5>
                                    <p className="text-sm my-1 font-semibold text-slate-400">Starts At $400/-</p>
                                </div>
                            </div>
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
}