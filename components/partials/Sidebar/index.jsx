import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostFigures from 'components/common/PostFigures';
import Tooltip from 'components/common/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Category from './Category';
import Contact from './Contact';
import { useRouter } from 'next/router';
import { Services } from 'components/partials/Header';
import { faClock, faList } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from 'helpers';

export const FeaturedPost = ({ item }) => {
    return (
        <Tooltip title={item.title}>
            <Link href={'/tin-tuc/' + item.slug}>
                <a className='flex px-3 py-2 border-b-[1px] border-gray-200'>
                    <Image
                        src={item?.featuredImage.url}
                        alt='Hinh anh tin tuc 1'
                        width={60}
                        height={45}
                        loading='lazy'
                        objectFit='contain'
                    />
                    <div className='ml-3 w-8/12'>
                        <p className='text-sm mb-1 truncate'>{item.title}</p>
                        <p className='text-[0.8rem] '>
                            <PostFigures
                                data={formatDate(
                                    new Date(
                                        item.createdAt,
                                    ).toLocaleDateString(),
                                ).format('d/m/y')}
                                icon={faClock}
                            />
                        </p>
                    </div>
                </a>
            </Link>
        </Tooltip>
    );
};

export const FeaturedPostList = ({ title, children }) => {
    return (
        <div className='mt-4'>
            <div className='flex items-center bg-primary-color text-white py-2 px-4 font-semibold'>
                <FontAwesomeIcon icon={faList} size='lg' />
                <p className='ml-2 text-[17px]'>{title}</p>
            </div>
            {children}
        </div>
    );
};

const Sidebar = ({ posts }) => {
    const { asPath } = useRouter();
    return (
        <div>
            <FeaturedPostList title={'TIN MỚI NHẤT'}>
                <ul className='border-[1px] border-gray-300'>
                    {posts &&
                        posts.map((item, index) => (
                            <li key={index}>
                                <FeaturedPost item={item} />
                            </li>
                        ))}
                </ul>
            </FeaturedPostList>
            <div className='mt-10'>
                <Category
                    data={Services}
                    title={'Dịch vụ'}
                    activePath={asPath}
                />
            </div>
            <div className='mt-10'>
                <Contact />
            </div>
        </div>
    );
};

export default Sidebar;
