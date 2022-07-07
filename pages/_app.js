import { config } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
import Head from 'next/head';
import MainLayout from 'components/layout/Main';
import SocialContact from 'components/partials/SocialContact';

//Global css
import '../styles/globals.css';
//Fontawesome css
import '@fortawesome/fontawesome-svg-core/styles.css';
// Swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cards';
import 'react-image-gallery/styles/css/image-gallery.css';

//Animation on scrolling css
import 'animate.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
    // Set toggle for button scroll to top

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <MainLayout>
            <Head>
                <title>
                    Nhà gỗ Truyền thống & Nguyên | Nhà thờ - Nhagobamien.vn
                </title>
                <meta
                    name='description'
                    content='Tìm mua nhà gỗ Truyền Thống & Gốc Miền Bắc chất lượng nhất tại nhagobamien.vn, chúng tôi tự tin mang đến cho bạn sự hài lòng với những sản phẩm chất lượng.'
                />

                <meta
                    name='google-site-verification'
                    content='hvoDIBRAQruUINXPei-BHlj6ptJ8GyKBuWj2rj8Xhm0'
                />
                <link
                    rel='icon'
                    type='image/jpg'
                    sizes='64x64'
                    href='/logo_ng3m.jpg'
                />
            </Head>

            {/* begin::ScrollToTop */}
            <button
                className={`bg-primary-color w-11 h-11 rounded-full flex justify-center 
          items-center fixed bottom-4 right-6 z-10 ${
              isVisible ? 'opacity-100' : 'opacity-0'
          }`}
                onClick={() => scrollToTop()}
            >
                <FontAwesomeIcon icon={faLongArrowUp} color='white' size='lg' />
            </button>
            {/* end::ScrollToTop */}

            {/* begin::SocialContact */}
            <SocialContact />
            {/*  end::SocialContact */}
            <Component {...pageProps} router={router} />
        </MainLayout>
    );
}

export default MyApp;

