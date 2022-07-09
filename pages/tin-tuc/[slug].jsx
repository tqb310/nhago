import * as postService from 'services/post.service';
import { marked } from 'marked';
import { PageLayout } from 'components/layout/Page';
import { useRouter } from 'next/router';
import PostFigures from 'components/common/PostFigures';
import { formatDate } from 'helpers';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const PostDetail = ({ postDetail, posts }) => {
    const htmlContent = marked.parse(postDetail.content?.markdown);
    const { asPath } = useRouter();
    return (
        <PageLayout pathname={{ title: 'Tin tức', link: asPath }} posts={posts}>
            <figure>
                <Image
                    src={postDetail.featuredImage?.url}
                    alt={postDetail.title}
                    width={750}
                    height={500}
                />
            </figure>
            <h3 className='text-2xl font-bold py-5'>{postDetail.title}</h3>
            <div className='flex pb-5'>
                <p className='text-sm'>
                    <PostFigures
                        data={postDetail.author?.name}
                        icon={faUser}
                        className=''
                    />
                </p>
                <p className='text-sm'>
                    <PostFigures
                        data={formatDate(
                            new Date(postDetail.createdAt).toLocaleDateString(),
                        ).format('d/m/y')}
                        icon={faClock}
                        className=''
                    />
                </p>
            </div>
            <div
                className='prose lg:prose-lg prose-slate prose-em:text-base pb-10'
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
        </PageLayout>
    );
};

export default PostDetail;

export async function getStaticPaths() {
    const allSlugs = (await postService.getAllPostSlugs()) || [];
    return {
        paths: allSlugs.map((item) => ({ params: { slug: item.slug } })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const postDetail = (await postService.getPostDetail(params.slug)) || {};
    const recentPosts = (await postService.getRecentPost(5)) || [];

    return {
        props: {
            postDetail,
            posts: recentPosts,
        },
    };
}

