import React from 'react';
import Image from 'next/image';
const data = [
    {
        step: 1,
        title: 'Khảo sát mặt bằng, lấy ý tưởng khách hàng',
        imgLink: '/images/process/khao-sat-mat-bang.png',
        alt: 'khao-sat-mat-bang.png',
    },
    {
        step: 2,
        title: 'Tư vấn, thiết kế',
        imgLink: '/images/process/tu-van-thiet-ke.png',
        alt: 'tu-van-thiet-ke.png',
    },
    {
        step: 3,
        title: 'Chọn gỗ ( chủng loại )',
        imgLink: '/images/process/chongo.png',
        alt: 'chongo',
    },
    {
        step: 4,
        title: 'Cắt đầu gỗ ( lễ phạt mộc)',
        imgLink: '/images/process/phatmoc.png',
        alt: 'phatmoc',
    },
    {
        step: 5,
        title: 'Sàm Đóng',
        imgLink: '/images/process/samdong.png',
        alt: 'samdong',
    },
    {
        step: 6,
        title: 'Đục Trạm',
        imgLink: '/images/process/duccham.png',
        alt: 'duccham',
    },
    {
        step: 7,
        title: 'Làm lót',
        imgLink: '/images/process/lamlot.png',
        alt: 'lamlot',
    },
    {
        step: 8,
        title: 'Vận chuyển đến công trình',
        imgLink: '/images/process/vanchuyen.png',
        alt: 'vanchuyen',
    },
    {
        step: 9,
        title: 'Lắp dựng',
        imgLink: '/images/process/lapdung.png',
        alt: 'lapdung',
    },
    {
        step: 10,
        title: 'Sơn hoàn thiện',
        imgLink: '/images/process/sonhoanthien.png',
        alt: 'sonhoanthien',
    },
];
const Step = ({ step, title, imgLink, alt }) => {
    return (
        <div className='inline-block w-[230px] h-[275px] mt-5 border-2 rounded-md overflow-hidden'>
            <div className='w-full h-[220px] relative overflow-hidden'>
                <Image
                    src={imgLink}
                    alt={alt}
                    layout='fill'
                    className='hover:scale-105 ease-linear duration-150'
                ></Image>
            </div>
            <div className='bg-primary-color p-1 h-[55px] flex justify-center flex-col'>
                <p className='text-white align-middle text-center text-base'>
                    <span className='underline'>Bước {step}</span>: {title}
                </p>
            </div>
        </div>
    );
};
function ConstructionSteps() {
    return (
        <div className='flex justify-around flex-wrap'>
            {data.map((d, index) => {
                return (
                    <Step
                        key={index}
                        step={d.step}
                        title={d.title}
                        imgLink={d.imgLink}
                        alt={d.alt}
                    ></Step>
                );
            })}
        </div>
    );
}

export default ConstructionSteps;

