import Breadcrumb from 'components/common/Breadcrumb';
import Sidebar from 'components/partials/Sidebar';
import React from 'react';

function PageItem({ children }) {
    return <>{children}</>;
}

function PageLayout({ children, pathname, posts }) {
    return (
        <div className='container grid grid-cols-12'>
            <div className='col-span-12 border-b-[1px] border-gray-300 py-4'>
                <Breadcrumb
                    location={[
                        { title: 'Trang chủ', link: '/' },
                        { title: pathname.title, link: pathname.link },
                    ]}
                />
            </div>

            <div className='hidden sm:block col-span-3 border-r-[1px] border-gray-300 py-4 pr-1 md:pr-5'>
                <Sidebar posts={posts} />
            </div>

            <div className='col-span-12 sm:col-span-9 border-l-[1px] border-gray-300 py-8 px-5 md:px-8'>
                {children}
            </div>
        </div>
    );
}

export { PageLayout, PageItem };
