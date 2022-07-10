import React from 'react';
import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import PostFigures from './PostFigures';
import Link from 'next/link';
import { formatDate } from 'helpers';
import Tooltip from './Tooltip';

function PostCard({ item }) {
    return (
        <Link href={'/tin-tuc/' + item.slug} passHref>
            <div className='group w-full md:w-1/2 p-8 border-t-[1px] border-dotted border-primary-color cursor-pointer'>
                <Tooltip title={item.title}>
                    <Image
                        src={item?.featuredImage.url}
                        alt='anh dich vu 1'
                        width={375}
                        height={275}
                        className='cursor-pointer'
                        loading='lazy'
                    />
                    <p className='text-primary-color text-lg font-medium mt-2 cursor-pointer group-hover:text-green-700'>
                        {item.title}
                    </p>
                    <p className='text-[0.8rem] mt-3'>
                        <PostFigures
                            data={formatDate(
                                new Date(item.createdAt).toLocaleDateString(),
                            ).format('d/m/y')}
                            icon={faClock}
                        />
                        {/* <PostFigures data={item.views} icon={faEye} />
                        <PostFigures data={item.tag} icon={faServicestack} /> */}
                    </p>
                    <p className='mt-2 text-gray-600 text-sm'>{item.excerpt}</p>
                </Tooltip>
            </div>
        </Link>
    );
}

export default PostCard;
