import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const footerContent = [
    'GIỚI THIỆU',
    'LIÊN HỆ',
    'HƯỚNG DẪN THANH TOÁN',
    'QUY TRÌNH THI CÔNG',
    'CHÍNH SÁCH BẢO MẬT',
    'CHÍNH SÁCH VÀ QUI ĐỊNH CHUNG',
    'THÔNG TIN CHUYỂN KHOẢN',
];

const additionalData = [
    {
        title: 'Địa chỉ',
        data: '72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận, TP.HCM.',
        icon: faLocationDot,
    },
    {
        title: 'Văn phòng chi nhánh',
        data: '305/35 TA28, Quận 12, TP.HCM',
        icon: faLocationDot,
    },
    {
        title: 'Xưởng',
        data: 'Thôn Hà Thái, Xã Hoằng Hà, Huyện Hoằng Hóa, Tỉnh Thanh Hóa.',
        icon: faLocationDot,
    },
    {
        title: 'Điện thoại',
        data: '096.211.6789 - 0977.325.561',
        icon: faPhone,
    },
    {
        title: 'Email',
        data: 'info@nhagobamien.vn',
        icon: faEnvelope,
    },
];

function Footer() {
    return (
        <footer className='min-h-screen bg-[#6D594C] text-white relative'>
            <div className='container flex flex-col sm:flex-row pt-24 pb-4 px-4 sm:px-0'>
                <div className='w-full md:w-4/12 px-3'>
                    <div className='w-full'>
                        <p className='w-full sm:w-auto text-center sm:text-left mb-2 m-auto text-3xl md:text-lg font-semibold border-b-2 border-b-[#EBC804] inline-block text-[#EBC804]'>
                            Nhà Gỗ Ba Miền
                        </p>
                    </div>
                    <ul>
                        {additionalData &&
                            additionalData.map((value, index) => (
                                <React.Fragment key={index}>
                                    <li key={index}>
                                        <p className='inline-block py-2'>
                                            <FontAwesomeIcon
                                                icon={value.icon}
                                                size='sm'
                                            />
                                            <span className='font-bold ml-1'>{`${value.title}:`}</span>
                                            &nbsp;&nbsp;
                                            <span className='italic'>{`${value.data}`}</span>
                                        </p>
                                    </li>
                                    {index < 3 && (
                                        <div className='md:hidden flex -mx-3 mb-10'>
                                            <iframe
                                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.94332500712235!2d106.68565172082386!3d10.804173565120054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929eef7c3af%3A0x7d895e1a0f2e8da7!2sBIM%20Solutions%20Viet%20Nam%20JSC!5e0!3m2!1svi!2s!4v1651141887804!5m2!1svi!2s'
                                                width='100%'
                                                height='220px'
                                                className='border-none w-1/2 px-3'
                                                allowFullScreen
                                                loading='lazy'
                                                referrerPolicy='no-referrer-when-downgrade'
                                            ></iframe>
                                            <div className='w-1/2 border-2 border-white text-center px-3'>
                                                Hình ảnh văn phòng
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                    </ul>
                </div>
                <div className='md:w-8/12 px-3 '>
                    <p className='hidden md:block text-lg text-[#EBC804] font-medium mb-2'>
                        VĂN PHÒNG CHÍNH
                    </p>
                    <div className='hidden sm:flex -mx-3 my-5'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.94332500712235!2d106.68565172082386!3d10.804173565120054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929eef7c3af%3A0x7d895e1a0f2e8da7!2sBIM%20Solutions%20Viet%20Nam%20JSC!5e0!3m2!1svi!2s!4v1651141887804!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                        <div className='w-1/2 border-2 border-white text-center px-3'>
                            Hình ảnh văn phòng
                        </div>
                    </div>
                    <p className='hidden md:block text-lg text-[#EBC804] font-medium mb-2 mt-6'>
                        VĂN PHÒNG CHI NHÁNH
                    </p>
                    <div className='hidden sm:flex -mx-3 my-5'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89156011577015!2d106.65459986360327!3d10.86744069802732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c2c8baf797%3A0x2ea5e9a981a6dd0d!2zNzIgxJAuIEzDqiBUaOG7iyBSacOqbmcsIFTDom4gVGjhu5tpIEFuLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1651142129818!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                        <div className='w-1/2 border-2 border-white text-center px-3'>
                            Hình ảnh văn phòng chi nhánh
                        </div>
                    </div>
                    <p className='hidden md:block text-lg text-[#EBC804] font-medium mt-6 mb-2'>
                        XƯỞNG
                    </p>
                    <div className='hidden sm:flex -mx-3'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.126006595658!2d105.89125381488554!3d19.876900486633485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31365beef9b42659%3A0x195eef7d0bad20cb!2zSMOgIFRow6FpLCBYw6MgSG_hurFuZyBIw6AsIEhv4bqxbmcgSG_DoSwgVGhhbmggSG_DoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1651142489906!5m2!1svi!2s'
                            width='100%'
                            height='220px'
                            className='border-none w-1/2 px-3'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                        <div className='w-1/2 border-2 border-white text-center px-3'>
                            Hình ảnh xưởng
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#603814] h-12 flex flex-col justify-center items-center mt-6'>
                {/* <p className='text-xs'>
                    <span className='text-red-600 font-bold text-lg'>(*)</span>{' '}
                    Có sử dụng 1 số hình ảnh trên Google để khách hàng tham khảo
                </p> */}
                <p className='font-bold text-lg'>
                    Copyright © 2022 nhagobamien.vn
                </p>
            </div>
        </footer>
    );
}

export default Footer;
