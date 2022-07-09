import PostCard from 'components/common/PostCard';
import { useRouter } from 'next/router';
import Pagination from 'components/common/Pagination';
import { PageLayout } from 'components/layout/Page';
import * as postService from 'services/post.service';

const AllNews = ({ recentPosts, postsByPage, page, dataSize }) => {
    const { pathname } = useRouter();

    return (
        <PageLayout
            pathname={{ title: 'Tin tức', link: pathname }}
            posts={recentPosts}
        >
            <p className='text-primary-color font-bold text-xl text-center p-4 '>
                TIN TỨC
            </p>
            <div className='flex flex-wrap'>
                {postsByPage &&
                    postsByPage.map((item, index) => (
                        <PostCard key={index} item={item} />
                    ))}
            </div>
            <div className='py-8'>
                <Pagination
                    itemsPerPage={10}
                    page={page}
                    visibleLabelSize={5}
                    dataSize={dataSize}
                    pathname={pathname}
                />
            </div>
        </PageLayout>
    );
};

export default AllNews;

export const getServerSideProps = async (context) => {
    const { query } = context;
    const recentPosts = (await postService.getRecentPost(5)) || [];
    const postsByPage = (await postService.getPostByPage(query.p || 1)) || [];
    const dataSize = (await postService.getDataSize()) || 0;
    return {
        props: {
            recentPosts,
            postsByPage,
            dataSize,
            page: query.p || 1,
        },
    };
};

