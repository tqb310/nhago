import { useState, useEffect } from 'react';
import PostCard from 'components/common/PostCard';
import { useRouter } from 'next/router';
import Pagination from 'components/common/Pagination';
import { PageLayout } from 'components/layout/Page';
import * as postService from 'services/post.service';

const data1 = [
    {
        id: 1,
        title: 'Các mẫu nhà gỗ cổ đẹp nhất Việt Nam nơi gìn giữ văn hóa Việt.',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/tintuc/tu-duong/thiet-ke-nha-tho-ho-dong-ho-350x250.jpg',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Bạn đang ấp ủ ước mơ về một ngôi nhà đẹp, bạn đang loay hoay tìm một đơn vị có thể giúp bạn hiện thực hóa những giấc mơ? Hãy liên hệ nhà gỗ Ba Miền ( Hệ thống nội thất Anphuco ),..',
    },
    {
        id: 2,
        title: 'Đơn vị thi công nhà thờ họ trọn gói',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/bao-gia-tron-goi-mau-nha-tu-duong-350x250.jpg',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Trong văn hóa tín ngưỡng của người Việt, thờ cúng tổ tiên có vai trò đặt biệt quan trọng. Chúng ta khi hiểu được rằng mình từ đâu mà ra, mình nhờ ai mà có, mình sống vì mục đích gì thì khả năng sống và làm việc càng trở nên mạnh mẽ!..',
    },
    {
        id: 3,
        title: 'Chi phí làm nhà gỗ kẻ truyền',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Với tôn chỉ hoạt động là “ Kiến tạo ngôi nhà Việt ! “ Nhà gỗ An Phú cam kết cung cấp các sản phẩm nội thất gỗ chất lượng cao và được chế tác từ các bàn tay thợ lành nghề được tuyển chọn kỹ càng trên khắp các làng nghề truyền thống của Việt Nam...',
    },
    {
        id: 4,
        title: 'Các mẫu nhà rường được yêu thích nhất',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Không gian sống đóng vai trò đặc biệt quan trọng trong đời sống của mỗi gia đình, bởi vậy việc đề cao thiết kế để đạt đến sự hoàn hảo trong một công trình nội thất đòi hỏi người KTS phải thực sự nhạy bén và linh hoạt trong quá trình sáng tạo...',
    },
    {
        id: 5,
        title: 'Mẫu nhà gỗ lục giác đẹp',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
    {
        id: 6,
        title: 'Xây dựng nhà thờ họ đẹp',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
    {
        id: 7,
        title: 'Các mẫu nhà gỗ truyền thống được yêu thích nhất',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
    {
        id: 8,
        title: 'Báo giá chi phí thiết kế và thi công nhà Rường Huế',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
    {
        id: 9,
        title: 'Mẫu nhà lục giác bằng gỗ Lim',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
    {
        id: 10,
        title: 'Chi phí làm nhà rường',
        imgLink:
            'https://nhagoanphu.com/image/cache/catalog/mau-nha-go/nha-tho-tu-duong/NTD-02/nha-tu-duong-2.4-350x250.JPG',
        views: 7144,
        createAt: '07/09/2022',
        tag: 'Tin tức',
        description:
            'Làm thế nào để bạn có thể sở hữu được một không gian sống thoải mái và tiện nghi? Bạn cũng sẽ muốn một ngôi nhà thể hiện được đúng cá tính, sở thích riêng và thỏa mãn được mong muốn của gia đình mình...',
    },
];
const AllNews = ({ posts }) => {
    const { pathname } = useRouter();
    const [page, setPage] = useState(0);
    const [landingVisionIndex, setLandingVisionIndex] = useState(0);
    const handleTurnPage = (index) => {
        setPage(index);
    };
    const handleVisiblePageItem = (action) => {
        setLandingVisionIndex(landingVisionIndex + action);
    };

    useEffect(() => {
        setPage(landingVisionIndex * 10);
    }, [landingVisionIndex]);

    return (
        <PageLayout pathname={{ title: 'Tin tức', link: pathname }}>
            <p className='text-primary-color font-bold text-xl text-center p-4 '>
                TIN TỨC
            </p>
            <div className='flex flex-wrap'>
                {posts &&
                    posts.map((item, index) => (
                        <PostCard key={index} item={item} />
                    ))}
            </div>
            <Pagination
                handleTurnPage={handleTurnPage}
                itemsPerPage={10}
                landingVisionIndex={landingVisionIndex}
                page={page}
                length={20}
                handleVisiblePageItem={handleVisiblePageItem}
            />
        </PageLayout>
    );
};

export default AllNews;

export const getStaticProps = async (context) => {
    const posts = (await postService.getAllPosts()) || [];

    return {
        props: {
            posts,
        },
    };
};

