import React from 'react';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Script from 'next/script';

function SocialContact() {
    return (
        <div>
            <Link href='https://facebook.com/110707611644240/'>
                <a
                    className='fixed z-10 bottom-[92px] left-[25.5px] before:w-11 before:h-11 before:bg-white before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:z-0'
                    target='_blank'
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        color='#4267B2'
                        size='3x'
                        className='relative z-20'
                    />
                </a>
            </Link>
            <Link href='https://youtube.com/channel/UCXw1ZjGS13Rgjoc2wNlBrrA'>
                <a
                    className='fixed z-10 bottom-40 left-[22px] before:w-6 before:h-6 before:bg-white before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/4 before:rounded-full before:z-0'
                    target='_blank'
                >
                    <FontAwesomeIcon
                        icon={faYoutube}
                        color='#FF0000'
                        size='3x'
                        className='relative z-20'
                    />
                </a>
            </Link>
            {/*  begin::phone button */}
            <Link href='tel:0962116789' passHref>
                <div className='phone-wrapper fixed top-28 left-16 z-50'>
                    <div className='flex justify-center items-center'>
                        <div className='z-50 absolute  bg-[#9BF080] p-3 rounded-full animate-pulse'>
                            <FontAwesomeIcon
                                icon={faPhone}
                                color='#fff'
                                size='2x'
                            />
                        </div>
                        <div className='h-12 w-12 rounded-full absolute animate-scaling'></div>
                        <div className='h-12 w-12 rounded-full absolute animate-[scaling_2s_linear_infinite_1s]'></div>
                    </div>
                </div>
            </Link>
            {/*  end::phone button */}
            {/* begin::ZaloButton */}
            <div
                className='zalo-chat-widget'
                data-oaid={process.env.NEXT_PUBLIC_DATA_OAID}
                data-welcome-message='Rất vui khi được hỗ trợ bạn!'
                data-autopopup='3'
                data-width=''
                data-height=''
            ></div>
            <style>
                {`
                    .zalo-chat-widget {
                        bottom: 20px !important;
                        left: 19px !important;
                    }
                `}
            </style>
            <Script defer src='https://sp.zalo.me/plugins/sdk.js'></Script>
            {/* end::ZaloButton */}
        </div>
    );
}

export default SocialContact;
