import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faQuoteLeft,
    faQuoteRight,
    faPhone,
    faEnvelope,
    fa1,
    fa2,
    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
export const Services = [
    {
        title: 'TƯ VẤN, THIẾT KẾ NHÀ GỖ',
        link: '/dich-vu/tu-van-thiet-ke-nha-go',
    },
    {
        title: 'THI CÔNG NHÀ GỖ',
        link: '/dich-vu/thi-cong-nha-go',
    },
    {
        title: 'THIẾT KẾ, THI CÔNG NỘI THẤT',
        link: '/dich-vu/thiet-ke-va-thi-cong-noi-that',
    },
];

const navTitle = [
    {
        link: '/',
        title: 'TRANG CHỦ',
        isDropdown: false,
        clickableOnMobile: true,
    },
    {
        link: '/dich-vu',
        title: 'DỊCH VỤ',
        isDropdown: true,
        dropDownContent: Services,
        clickableOnMobile: false,
    },
    {
        link: '/du-an-da-lam',
        title: 'DỰ ÁN ĐÃ LÀM',
        isDropdown: true,
        clickableOnMobile: false,
        dropDownContent: [
            { title: 'NHÀ 5 GIAN', link: '/du-an-da-lam/nha-5-gian' },
            { title: 'CỔNG GỖ', link: '/du-an-da-lam/cong-go' },
            { title: 'ĐỒ THỜ', link: '/du-an-da-lam/do-tho' },
            { title: 'NHÀ 3 GIAN', link: '/du-an-da-lam/nha-3-gian' },
            {
                title: 'NHÀ 8 MÁI CỔ ĐIỂN',
                link: '/du-an-da-lam/nha-8-mai-co-dien',
            },
            { title: 'NHÀ CẦU', link: '/du-an-da-lam/nha-cau' },
            {
                title: 'NHÀ LỤC GIÁC',
                link: '/du-an-da-lam/nha-luc-giac',
            },
            { title: 'NỘI THẤT', link: '/du-an-da-lam/noi-that' },
        ],
    },
    {
        link: '/thu-vien-tu-lieu',
        title: 'THƯ VIỆN TƯ LIỆU',
        isDropdown: true,
        clickableOnMobile: false,
        dropDownContent: [
            { title: 'ĐỤC CHẠM', link: '/thu-vien-tu-lieu/duc-cham' },
            { title: 'HOÀN THÀNH', link: '/thu-vien-tu-lieu/hoan-thanh' },
            { title: 'LẮP DỰNG', link: '/thu-vien-tu-lieu/lap-dung' },
            { title: 'NHẬP GỖ', link: '/thu-vien-tu-lieu/nhap-go' },
            {
                title: 'SÀM GỖ',
                link: '/thu-vien-tu-lieu/sam-go',
            },
            {
                title: 'VẬN CHUYỂN ĐẾN CÔNG TRÌNH',
                link: '/thu-vien-tu-lieu/van-chuyen-den-cong-trinh',
            },
        ],
    },
    {
        link: '/quy-trinh-phat-trien-du-an',
        title: 'QUY TRÌNH PHÁT TRIỂN DỰ ÁN',
        isDropdown: false,
        clickableOnMobile: true,
    },
    {
        link: '/tin-tuc',
        title: 'TIN TỨC',
        isDropdown: false,
        clickableOnMobile: true,
    },
    {
        link: '/lien-he',
        title: 'LIÊN HỆ',
        isDropdown: false,
        clickableOnMobile: true,
    },
];

export default function Header() {
    const { pathname } = useRouter();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { text } = useTypewriter({
        words: ['Không gian sống đậm nét truyền thống'],
        loop: 0,
        typeSpeed: 150,
        deleteSpeed: 90,
        delaySpeed: 3000,
    });
    const handleClickMenu = (e) => {
        setOpenMobileMenu((pre) => !pre);
    };
    const handleClickItem = (e) => {
        setOpenMobileMenu(false);
    };
    return (
        <header className='relative'>
            <div className='bg-[#6D594C] text-white py-[10px]'>
                <div className='container overflow-hidden'>
                    <div className='inline-flex items-center font-semibold animate-textScrolling'>
                        <p className='md:inline-block text-[13px] leading-none hidden whitespace-nowrap'>
                            CHÀO&nbsp; MỪNG&nbsp; QUÝ&nbsp; KHÁCH&nbsp;
                            ĐẾN&nbsp; VỚI&nbsp; NHÀ&nbsp; GỖ&nbsp; BA MIỀN!
                        </p>
                        <div className='inline-flex'>
                            <p className='md:ml-6 leading-none'>
                                {' '}
                                <a
                                    href='tel:0962116789'
                                    className='inline-flex items-center text-[14px] lg:text-[16px]'
                                >
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className='border-2 border-solid border-white rounded-full p-1 inline-block'
                                    />
                                    <span className='ml-1'>096.211.6789</span>
                                </a>
                            </p>
                            <p className='ml-4 leading-none'>
                                {' '}
                                <a
                                    href='tel:0962116789'
                                    className='inline-flex items-center text-[14px] lg:text-[16px]'
                                >
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className='border-2 border-solid border-white rounded-full p-1 inline-block'
                                    />
                                    <span className='ml-1'>0977.325.651</span>
                                </a>
                            </p>
                            <p className='ml-4 leading-none'>
                                <a
                                    href='mailto:info@nhagobamien.vn'
                                    className='inline-flex items-center text-[14px] md:text-[16px]'
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className='border-2 border-solid border-white rounded-full p-1 inline-block'
                                    />
                                    <span className='ml-1'>
                                        info@nhagobamien.vn
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex-row lg:justify-between lg:items-center flex flex-col items-stretch container px-8 py-3'>
                <div className='self-center'>
                    <Image
                        src='/images/logo_ng3m.jpg'
                        alt='logo website'
                        width={170.6666}
                        height={148.6666}
                    />
                </div>
                <div className='sm:block md:text-[1.475rem] lg:w-[550px]  xl:text-[1.625rem] px-3 hidden text-[1.375rem] self-center'>
                    <blockquote className='font-nunito text-color'>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        <span className='font-semibold mx-2 align-sub'>
                            {text}
                            <Cursor />
                        </span>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </blockquote>
                </div>
                <div className='lg:basis-[250px] flex flex-col'>
                    <div className='mt-0 sm:mt-4 lg:mt-0 mb-2 w-fit mx-auto'>
                        <ul>
                            <li className='w-fit mx-auto sm:w-auto'>
                                <a href='tel:0962116789'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        color='#003F5C'
                                    />
                                    <FontAwesomeIcon
                                        icon={fa1}
                                        color='#003F5C'
                                        size='xs'
                                        className='translate-y-2 translate-x-[1px] inline-block'
                                    />
                                    <span className='font-normal ml-2 lg:text-lg text-color'>
                                        096.211.6789
                                    </span>
                                </a>
                            </li>
                            <li className='w-fit mx-auto sm:w-auto'>
                                <a href='tel:0977325651'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        color='#003F5C'
                                    />
                                    <FontAwesomeIcon
                                        icon={fa2}
                                        color='#003F5C'
                                        size='xs'
                                        className='translate-y-2 translate-x-[1px] inline-block'
                                    />
                                    <span className='font-normal ml-2 lg:text-lg text-color'>
                                        0977.325.651
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='mailto:info@nhagobamien.vn'>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        color='#003F5C'
                                        size='lg'
                                    />
                                    <span className='font-normal ml-3 lg:text-lg text-color'>
                                        info@nhagobamien.vn
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex bg-primary-color px-4 py-2 rounded-md w-full'>
                        <input
                            className='bg-primary-color text-white outline-0 text-sm grow'
                            type='text'
                            placeholder='Tìm kiếm'
                        />
                        <button className='bg-primary-color text-white rounded-r-md'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
            <nav className='bg-primary-color'>
                <ul className='container text-white  hidden md:flex'>
                    {navTitle &&
                        navTitle.map((title, i) => (
                            <li
                                key={i}
                                className={`group grow relative text-[0.8rem] lg:text-[1rem] hover:border-b-[4px] hover:border-white hover:bg-[#3B2414] transition ease-in-out duration-200 ${
                                    title.link === pathname ||
                                    (title.link !== '/' &&
                                        pathname.startsWith(title.link))
                                        ? styles.active
                                        : ''
                                } `}
                            >
                                <Link href={title.link}>
                                    <a
                                        className={`py-3 w-full text-center inline-block font-semibold`}
                                    >
                                        {title.title}
                                        {title.isDropdown && (
                                            <p className='inline-block ml-3 text-xs -rotate-90'>
                                                &#10094;
                                            </p>
                                        )}
                                    </a>
                                </Link>
                                {title.isDropdown && (
                                    <ul className='absolute z-20 min-w-full whitespace-nowrap bg-primary-color mt-1 hidden group-hover:block'>
                                        {title.dropDownContent &&
                                            title.dropDownContent.map(
                                                (item, index) => (
                                                    <li key={index}>
                                                        <Link href={item.link}>
                                                            <a className='block px-6 py-2 hover:bg-[#3B2414]'>
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
                <div className='block md:hidden'>
                    <button
                        className='absolute top-[60px] right-3'
                        onClick={handleClickMenu}
                        aria-controls='mobile-menu'
                    >
                        <FontAwesomeIcon
                            icon={openMobileMenu ? faXmark : faBars}
                            size='lg'
                            color='#603814'
                            className='hover:opacity-70 duration-200'
                        />
                    </button>
                    <div
                        className={`fixed left-0 right-0 bottom-0 top-[89px] bg-primary-color z-[1000] text-white duration-500 ease-out translate-y-full ${
                            openMobileMenu
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-full opacity-0'
                        }`}
                    >
                        <ul>
                            {navTitle &&
                                navTitle.map((title, i) => (
                                    <li
                                        key={i}
                                        className={`group grow relative text-[0.8rem] hover:bg-[#3B2414] transition ease-in-out duration-200 ${
                                            title.link === pathname ||
                                            (title.link !== '/' &&
                                                pathname.startsWith(title.link))
                                                ? 'bg-[#3B2414]'
                                                : ''
                                        } `}
                                        onClick={
                                            title.clickableOnMobile
                                                ? handleClickItem
                                                : null
                                        }
                                    >
                                        <Link
                                            href={title.link}
                                            passHref={title.clickableOnMobile}
                                        >
                                            <a
                                                className={`py-5 w-full text-center inline-block font-semibold`}
                                            >
                                                {title.title}
                                                {title.isDropdown && (
                                                    <p className='inline-block ml-3 text-xs -rotate-90'>
                                                        &#10094;
                                                    </p>
                                                )}
                                            </a>
                                        </Link>
                                        {title.isDropdown && (
                                            <ul className='absolute z-20 min-w-full text-center whitespace-nowrap bg-primary-color hidden group-hover:block'>
                                                {title.dropDownContent &&
                                                    title.dropDownContent.map(
                                                        (item, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={
                                                                    handleClickItem
                                                                }
                                                                className='z-20'
                                                            >
                                                                <Link
                                                                    href={
                                                                        item.link
                                                                    }
                                                                >
                                                                    <a className='block px-6 py-2 hover:bg-[#3B2414]'>
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        ),
                                                    )}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
