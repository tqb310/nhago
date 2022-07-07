// import { useState, useEffect } from 'react';
import Slides, { SlideItem } from 'components/common/Slides';
import Image from 'next/image';
import About from 'components/pages/home/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Commitment from 'components/pages/home/Commitment';
import Trait from 'components/pages/home/Trait';
import Title from 'components/common/Title';
import {
    banners,
    projectsThumbnails,
    referenceThumbnails,
    services,
} from '../constants/media';

export default function Home() {
    return (
        <div className='relative'>
            {/* begin::Banner */}
            <div className='hidden sm:block'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    speed={1000}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    {banners &&
                        banners.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full min-h-[300px] md:min-h-[400px] lg:min-h-[calc(100vh_-_280px)]'>
                                    <Image
                                        src={`https://drive.google.com/uc?export=view&id=${value.link}`}
                                        alt='banner 1'
                                        layout='fill'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <style>
                {` .swiper-wrapper > .swiper-slide-active ~ .swiper-slide-active {
                        filter: blur(0) !important;
                    }
                    .swiper-wrapper > .swiper-slide-active {
                        // filter: blur(4px);
                    }
                   
                `}
            </style>
            {/* end::Banner */}

            {/* begin::Vechungtoi */}
            <div className='py-10 bg-sub-background-color'>
                <About />
            </div>
            {/* end::Vechungtoi */}

            {/* begin::Dacdiem */}
            <div className='py-10'>
                <Trait />
            </div>
            {/* end::Dacdiem */}

            {/* begin:Dichvucungcap */}
            <div className='bg-sub-background-color py-10'>
                <Title title='Dịch vụ cung cấp' />
                <div className='flex flex-col sm:flex-row justify-between items-center h-[300] w-full lg:w-3/4 m-auto'>
                    {services.map((_item, _index) => (
                        <div
                            key={_index}
                            className='h-[350px] w-full sm:w-[500px] mx-[15px] mt-[50px] '
                        >
                            <SlideItem
                                params={{
                                    title: _item.title,
                                    description: _item.description || '',
                                    linkImage: `https://drive.google.com/uc?export=view&id=${_item.linkImage}`,
                                    columnist: 'dich-vu',
                                    slug: _item.slug,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* end::Dichvucungcap */}
            {/* Begin::Motsomaunha */}
            <div className='py-10'>
                <Slides
                    title='Dự án đã làm'
                    data={projectsThumbnails}
                    hasPagination
                    columnist='du-an-da-lam'
                />
            </div>

            <div className='py-10'>
                <Slides
                    title='Thư viện tư liệu'
                    data={referenceThumbnails}
                    hasPagination
                    columnist='thu-vien-tu-lieu'
                />
            </div>
            {/* end::Motsomaunha */}
            {/* begin::5camketvang */}
            <div>
                <Commitment />
            </div>
            {/* end::5camketvang */}
        </div>
    );
}

