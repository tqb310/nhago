import { PageLayout } from 'components/layout/Page';
import ConstructionSteps from 'components/pages/introduction/ConstructionSteps';
import * as postService from 'services/post.service';

const Introduction = ({ posts }) => {
    return (
        <PageLayout
            pathname={{
                title: 'Quy trình phát triển dự án',
                link: '/quy-trinh-phat-trien-du-an',
            }}
            posts={posts}
        >
            <h2 className='font-black py-4 text-xl text-center text-primary-color'>
                Quy trình phát triển một dự án
            </h2>
            <div className='border-2 p-3 text-sm'>
                <p className='text-lg'>Các Công đoạn triển khai Công trình</p>
                <ConstructionSteps />
            </div>
        </PageLayout>
    );
};

export default Introduction;

export const getStaticProps = async (context) => {
    const posts = (await postService.getRecentPost(5)) || [];

    return {
        props: {
            posts,
        },
    };
};

