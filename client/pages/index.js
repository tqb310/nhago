import { useState, useEffect } from 'react';
import GridLayoutMauNha from 'components/common/gridLayoutMauNha';
import Posts from 'components/home/Posts';
import Services from 'components/home/Services';
import Head from 'next/head';
import Image from 'next/image';
import About from 'components/home/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Commit from 'components/home/Commit';
import Trait from 'components/home/Trait';
// import mauNhaGoCoTruyen from '/images/mau-nha-co-truyen.Mau-nha-go-kieu-Hue.jpg';
// import mauNhaGoCoTruyen2 from '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg';
// import mauNhaGoCoTruyen3 from '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg';
// import mauNhaGoCoTruyen4 from '/images/mau-nha-co-truyen.Nha-co-truyen-5-gian.jpg';
// import mauNhaGoCoTruyen5 from '/images/mau-nha-co-truyen.Nha-go-3-gian-go-Lim.jpg';
// import mauNhaGoCoTruyen6 from '/images/mau-nha-co-truyen.Nha-go-3-gian-kieu-Bac-Bo.jpg';
// import mauNhaGoCoTruyen7 from '/images/mau-nha-co-truyen.Nha-go-5-gian-dep.png';

// import mauNhaTuDuong from '/images/nha_tu_duong.Mau-nha-tho-co.jpg';
// import mauNhaTuDuong2 from '/images/nha_tu_duong.Mau-nha-tho-ho-hai-mai.jpg';
// import mauNhaTuDuong3 from '/images/nha_tu_duong.Mau-nha-tho.png';
// import mauNhaTuDuong4 from '/images/nha_tu_duong.Mau-nha-tu-duong-bang-go-dep.png';
// import mauNhaTuDuong5 from '/images/nha_tu_duong.Mau-nha-tu-duong-dep.jpg';

const images = ['/banner1.jpg', '/banner2.jpg', '/banner3.jpg'];

const MauNhaData = [
    {
        id: 1,
        title: 'Nhà 5 gian truyền thống',
        codeProduct: '1245D5',
        linkImage: '/nha-5-gian.jpg',
    },
    {
        id: 2,
        title: 'Nhà từ đường',
        codeProduct: '1245D5',
        linkImage: '/nha-tu-duong.jpg',
    },
    {
        id: 3,
        title: 'Nhà gỗ',
        codeProduct: '1245D5',
        linkImage: '/nha-go-truyen-thong.jpg',
    },
    {
        id: 4,
        title: 'Chòi hóng mát',
        codeProduct: '1245D5',
        linkImage: '/choi-hong-mat.jpg',
    },
    {
        id: 5,
        title: 'Mẫu nhà gỗ kiểu Huế',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-go-kieu-Hue.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 6,
        title: 'Mẫu nhà rường Huế',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 7,
        title: 'Mẫu nhà truyền thống đẹp',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Mau-nha-ruong-hue.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 8,
        title: 'Nhà cổ truyền 5 gian',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-co-truyen-5-gian.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 9,
        title: 'Nhà 3 gian gỗ Lim',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-3-gian-go-Lim.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 10,
        title: 'Nhà gỗ 3 gian kiểu Bắc bộ',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-3-gian-kieu-Bac-Bo.jpg',
        type: 'nhaGoCoTruyen',
    },
    {
        id: 11,
        title: 'Nhà gỗ 5 gian đẹp',
        codeProduct: '12345A',
        linkImage: '/images/mau-nha-co-truyen.Nha-go-5-gian-dep.png',
        type: 'nhaGoCoTruyen',
    },
];

const ServicesData = [
    {
        id: 1,
        title: 'Tư vấn và thiết kế theo yêu cầu',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
        linkImage: '/thiet-ke-theo-yeu-cau.jpg',
    },
    {
        id: 2,
        title: 'Thiết kế và thi công không gian thờ',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
        linkImage: '/khong-gian-tho.jpg',
    },
    {
        id: 3,
        title: 'Cung cấp đồ gỗ thành phẩm',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
        linkImage: '/do-go-thanh-pham.jpg',
    },
    {
        id: 4,
        title: 'Thiết kế và thi công nội thất',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
        linkImage: '/thiet-ke-noi-that.jpg',
    },
    {
        id: 5,
        title: 'Thiết kế và thi công nhà gỗ',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
        linkImage: '/nhago.jpg',
    },
];
export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                >
                    {images &&
                        images.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full min-h-[calc(100vh_-_280px)]'>
                                    <Image
                                        src={value}
                                        alt='banner 1'
                                        layout='fill'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className='py-20 bg-[#f7f5f3]'>
                    <About />
                </div>
                <div className='py-20'>
                    <Trait />
                </div>
                <div className='bg-[#f7f5f3] py-20 pb-24'>
                    <GridLayoutMauNha
                        title='Dịch vụ cung cấp'
                        data={ServicesData}
                    />
                </div>
                <div className='py-20'>
                    <GridLayoutMauNha
                        title='Mẫu nhà gỗ đẹp'
                        data={MauNhaData}
                        hasPagination
                    />
                </div>
                <div>
                    <Commit />
                </div>
            </main>
        </div>
    );
}

