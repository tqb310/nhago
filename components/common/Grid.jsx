import Breadcrumb from 'components/common/Breadcrumb';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EffectCards } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

const GridItem = ({ params }) => {
    return (
        <Link href={`/${params.columnist}/${params.slug}`} passHref>
            <>
                <div className='h-[900] w-full border border-primary-color px-20 pt-5 rounded-md'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                    >
                        {params.dummyData.map((_item, _index) => (
                            <SwiperSlide key={_index}>
                                {_item.type === 'video' ? (
                                    <video
                                        autoPlay
                                        muted
                                        style={{
                                            height: '293px',
                                            width: '410px',
                                        }}
                                    >
                                        <source
                                            src={`https://drive.google.com/uc?export=download&id=${_item.link}`}
                                            type='video/mp4'
                                        ></source>
                                    </video>
                                ) : (
                                    <Image
                                        src={`https://drive.google.com/uc?export=view&id=${_item.link}`}
                                        alt='Errow while display image'
                                        loading='lazy'
                                        width={500}
                                        height={350}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                        <div className='w-full my-2 text-center text-base sm:text-2xl'>
                            {params.title}
                        </div>
                    </Swiper>
                </div>
                <style>
                    {`
                .swiper-slide {
                    filter: blur(4px);
                }
                .swiper-slide-active {
                    filter: blur(0px) !important;
                }
                `}
                </style>
            </>
        </Link>
    );
};

const Grid = ({ data, columnist, title }) => {
    return (
        <div className='mb-6'>
            <div className='pl-4 pr-4 container'>
                <div className='col-span-12 border-b-[1px] border-gray-300 py-4'>
                    <Breadcrumb
                        location={[
                            { title: 'Trang chủ', link: '/' },
                            { title: 'Dự án đã làm', link: 'du-an-da-lam' },
                        ]}
                    />
                </div>
                <h2 className='text-primary-color font-black text-2xl text-center py-8'>
                    {title}
                </h2>
                <motion.div
                    layout
                    initial={{ translateX: -100 }}
                    animate={{ translateX: 0 }}
                    transition={0.3}
                    className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6' mt-6`}
                >
                    <AnimatePresence>
                        {data &&
                            data.map((_item, _index) => {
                                if (_index % 2 == 0)
                                    return (
                                        <div
                                            key={_index}
                                            className={`col-start-1 col-end-3`}
                                        >
                                            <GridItem
                                                params={{
                                                    dummyData: _item.media,
                                                    title: _item.title,
                                                    slug: _item.slug,
                                                    columnist,
                                                }}
                                            />
                                        </div>
                                    );
                                else {
                                    return (
                                        <div
                                            key={_index}
                                            className={`col-start-1 col-end-3 sm:col-start-3 sm:col-end-5`}
                                        >
                                            <GridItem
                                                params={{
                                                    dummyData: _item.media,
                                                    title: _item.title,
                                                    slug: _item.slug,
                                                    columnist,
                                                }}
                                            />
                                        </div>
                                    );
                                }
                            })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Grid;
