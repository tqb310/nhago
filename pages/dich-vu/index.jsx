import { PageLayout } from 'components/layout/Page';
// import NewsCard from 'components/common/NewsCard';
import { useRouter } from 'next/router';
import * as postService from 'services/post.service';

const AllServices = ({ posts }) => {
    const { pathname } = useRouter();
    return (
        <PageLayout
            pathname={{ title: 'Dịch vụ', link: pathname }}
            posts={posts}
        >
            <p className='text-primary-color font-bold text-2xl text-center p-4'>
                DỊCH VỤ
            </p>

            <div className='border-8 rounded-[15px] border-double border-primary-color p-3'>
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

export const getStaticProps = async (context) => {
    const posts = (await postService.getRecentPost(5)) || [];

    return {
        props: {
            posts,
        },
    };
};

