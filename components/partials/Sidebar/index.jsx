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
import { faClock, faEye, faList } from '@fortawesome/free-solid-svg-icons';
const mostViewedNews = [
    {
        id: 1,
        title: 'Mẫu nhà gỗ đẹp',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
        createAt: '16/10/2018',
        views: 16903,
    },
    {
        id: 2,
        title: 'Nhà gỗ anphuco',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/Nha-go-hien-dai/NGHD-12/nha-vuon-bang-go-3-400x300.jpg',
        createAt: '18/10/2018',
        views: 15309,
    },
    {
        id: 3,
        title: 'Bản vẽ thiết kế nhà gỗ lục giác',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
        createAt: '16/10/2018',
        views: 16903,
    },
    {
        id: 4,
        title: 'Đặc điểm chung của nhà gỗ lục giác',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
        createAt: '16/10/2018',
        views: 16903,
    },
    {
        id: 5,
        title: 'Báo giá thiết kế nhà thờ họ',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-01/nha-tu-duong-2-400x300.jpg',
        createAt: '16/10/2018',
        views: 16903,
    },
];

export const FeaturedPost = ({ item }) => {
    return (
        <Tooltip title={item.title}>
            <Link href={'#'}>
                <a className='flex px-3 py-2 border-b-[1px] border-gray-200'>
                    <Image
                        src={item.imgLink}
                        alt='Hinh anh tin tuc 1'
                        width={60}
                        height={45}
                        loading='lazy'
                        objectFit='contain'
                    />
                    <div className='ml-3 w-8/12'>
                        <p className='text-sm mb-1 truncate'>{item.title}</p>
                        <p className='text-[0.8rem] text-gray-500'>
                            <PostFigures data={item.createAt} icon={faClock} />
                            <PostFigures data={item.views} icon={faEye} />
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

const Sidebar = () => {
    const { asPath } = useRouter();
    return (
        <div>
            <FeaturedPostList title={'TIN MỚI NHẤT'}>
                <ul className='border-[1px] border-gray-300'>
                    {mostViewedNews &&
                        mostViewedNews.map((item, index) => (
                            <li key={index}>
                                <FeaturedPost item={item} />
                            </li>
                        ))}
                </ul>
            </FeaturedPostList>
            <div>
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
