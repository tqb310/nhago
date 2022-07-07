import { PageLayout } from 'components/layout/page';
// import NewsCard from 'components/common/NewsCard';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AllServices = () => {
    const { pathname } = useRouter();
    return (
        <PageLayout pathname={{ title: 'Dịch vụ', link: pathname }}>
            <p className='text-primary-color font-bold text-2xl text-center p-4'>
                DỊCH VỤ
            </p>

            <div className='border-8 rounded-[15px] border-double border-primary-color p-3'>
                {/* <p>1. Tư Vấn, Thiết kế Nhà Gỗ: </p>
                <p className='indent-[32px]'>
                    Chúng tôi cung cấp dịch vụ thiết kế tận tâm đến khách hàng,
                    các bước trong dịch vụ thiết kế của chúng tôi gồm:
                </p>
                <p className='indent-[60px]'>
                    - Gặp gỡ trao đổi với khách hàng
                </p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/gap-go-khach-hang.png'
                        alt='gap-go-khach-hang'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>- Khảo sát địa hình thực tế</p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/khao-sat-dia-hinh-thuc-te.png'
                        alt='khao-sat-dia-hinh-thuc-te'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>
                    - Lên ý tưởng (Diễn họa bằng mô hình, hình ảnh 3D)
                </p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/len-y-tuong.png'
                        alt='len-y-tuong'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/y-tuong-3d.png'
                        alt='y-tuong-3d'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div>
                <p className='indent-[60px]'>- Chốt ý tưởng với khách hang</p>
                <div className='w-4/5 h-[330px] relative overflow-hidden'>
                    <Image
                        src='/chot-y-tuong.png'
                        alt='chot-y-tuong'
                        layout='fill'
                        // className='hover:scale-105 ease-linear duration-150'
                    ></Image>
                </div> */}
                <p className='indent-[32px]'>
                    Với tay nghề truyền thống đã được khẳng định qua nhiều thế
                    hệ, Nhà Gỗ Ba Miền luôn khẳng định được vị thế và thương
                    hiệu hàng đầu Việt Nam về thiết kế, thi công nhà gỗ, nội
                    thất và các sản phẩm từ gỗ.
                </p>
                <br />
                <p className='indent-[32px]'>
                    Các dịch vụ chính của chúng tôi gồm:
                </p>
                <ul className='list-disc ml-20'>
                    <li>Tư vấn, thiết kế nhà gỗ</li>
                    <li>Thi công nhà gỗ</li>
                    <li>Tư vấn thiết kế và thi công nội thất</li>
                </ul>
                <br />
                <p className='indent-[32px]'>
                    Nhà gỗ Ba Miền đã thiết kế và thi công rất nhiều công trình
                    trên khắp mọi miền đất nước. Đến với Nhà gỗ Ba Miền quý
                    khách được tư vấn tỉ mỷ đến từng chi tiết, mọi thắc mắc của
                    Quý khách hàng chúng tôi luôn sãn sàng giải đáp.... Đến với
                    nhà Gỗ Ba Miền Quý khách sẽ luôn hài lòng với đội ngũ nhân
                    viên nhiều kinh nghiệm, nhiệt tình, tận tâm.
                </p>
            </div>
        </PageLayout>
    );
};

export default AllServices;

