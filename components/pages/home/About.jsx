import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCube } from 'swiper';
import Image from 'next/image';
import Title from 'components/common/Title';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { asideBanners } from 'constants/media';

function About() {
    return (
        <div className='container p-4 sm:p-0'>
            <Title title='Về chúng tôi' />
            <div className='flex justify-end relative mt-8'>
                <AnimationOnScroll
                    animateIn='animate__flipInY'
                    animateOnce={true}
                    className='z-10 hidden lg:block lg:w-[426.6666px] xl:w-[533.3333px] absolute top-[101.5px] left-0 after:absolute after:w-full after:h-6 after:bg-[#f7f5f3] before:absolute before:w-full before:h-3 before:bg-[#f7f5f3] before:bottom-full'
                >
                    <Swiper
                        modules={[Pagination, Autoplay, EffectCube]}
                        effect='cube'
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                        // onSlideChange={() => console.log('slide change')}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                    >
                        {asideBanners &&
                            asideBanners.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full lg:h-[240px] xl:h-[300px]'>
                                        <Image
                                            src={`https://drive.google.com/uc?export=view&id=${value.link}`}
                                            alt={`banner ${index}`}
                                            layout='fill'
                                            loading='lazy'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </AnimationOnScroll>
                <div className='lg:w-3/4 pl-8 lg:pl-[13rem] xl:pl-[17rem] py-10 pr-8 font-nunito border-2 border-primary-color relative'>
                    <AnimationOnScroll
                        animateIn='animate__fadeIn'
                        animateOnce={true}
                    >
                        <p className='text-primary-color font-bold text-lg mb-4'>
                            Nhà gỗ Ba Miền xin kính chào Quý khách hàng!
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn='animate__fadeIn'
                        animateOnce={true}
                    >
                        <p className='mb-2 leading-7 text-justify'>
                            <span className='text-primary-color font-medium'>
                                Nhà gỗ Ba Miền
                            </span>{' '}
                            là những người con của quê hương Làng mộc Hà Thái,
                            trải qua nhiều thế hệ cha chuyền con nối, chúng tôi
                            tự hào với đội ngũ thợ kinh nghiệm có tay nghề và
                            trình độ cao cùng với nhóm thiết kế tận tâm, chuyên
                            nghiệp, áp dụng các công nghệ mô phỏng, diễn họa 3D
                            mới nhất trên máy tính, chúng tôi có thể thể hiện
                            chính xác bằng hình ảnh 3D, video ngôi nhà mà khách
                            hàng mong muốn trên máy tính trước khi được thi
                            công. Công ty nhà gỗ Ba Miền chúng tôi chuyên thiết
                            kế, thi công, lắp đặt nhà gỗ và cung cấp các sản
                            phẩm từ gỗ trên toàn quốc. Chúng tôi tự tin mang đến
                            cho bạn sự hài lòng về sản phẩm chất lượng với giá
                            hợp lý nhất!
                        </p>
                        <h5 className='text-color mb-2 italic'>
                            Quy trình làm việc:
                        </h5>
                        <ol className='list-decimal ml-4 leading-7 text-justify'>
                            <li>
                                Lấy ý tưởng của khách hàng (nếu khách hàng chưa
                                có ý tưởng, chúng tôi sẽ tư vấn).
                            </li>
                            <li>
                                Thiết kế và diễn họa 3D cho khách hàng xem để
                                xác nhận trước khi làm.
                            </li>
                            <li>Gia công và lắp ráp.</li>
                        </ol>
                    </AnimationOnScroll>
                    <p className='bg-[#f7f5f3] px-4 absolute bottom-0 translate-y-1/2 text-2xl italic font-semibold text-primary-color right-14 overflow-hidden'>
                        <span className='inline-block animate-[textScrolling_5s_linear_infinite]'>
                            Nhà gỗ Ba Miền
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
