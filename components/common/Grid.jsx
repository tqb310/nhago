import Breadcrumb from 'components/common/Breadcrumb';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const GridItem = ({ params, className }) => {
    return (
        <Link href={`/${params.columnist}/${params.slug}`} passHref>
            <div
                className={
                    'h-[900] w-full bg-primary-color rounded-md ' + className
                }
            >
                <Image
                    src={`https://drive.google.com/uc?export=view&id=${params.link}`}
                    alt='Errow while display image'
                    loading='lazy'
                    width={500}
                    height={350}
                />
                <h5 className='text-center text-lg font-bold text-white pb-2'>
                    {params.title}
                </h5>
            </div>
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
                    className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mt-6`}
                >
                    <AnimatePresence>
                        {data &&
                            data.map((_item, _index) => {
                                return (
                                    <GridItem
                                        key={_index}
                                        params={{
                                            link: _item.link,
                                            title: _item.title,
                                            slug: _item.slug,
                                            columnist,
                                        }}
                                    />
                                );
                            })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Grid;
