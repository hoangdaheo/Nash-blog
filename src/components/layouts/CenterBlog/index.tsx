import React from 'react';
import BlogHeader from '../../features/BlogHeader';
import BlogContent from '../../features/BlogContent';

const CenterBlog: React.FC<unknown> = () => {
  return (
    <>
      <div className='text-slate-400 font-mono'>
        <header id='blog-bar' className='block'>
          <BlogHeader />
        </header>
        <section
          id='main'
          style={{ height: '4000px' }}
          className='w-full block'
        >
          <BlogContent />
        </section>
        <section
          id='footer'
          className='flex flex-col items-center justify-center'
        >
          <div className='blog-header-bottom-line m-auto border-b-2 border-b-cyan-600 w-8/12 h-1 block'></div>

          <div className='p-4 font-semibold'>
            © 2024 Nash Nguyen. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

export default CenterBlog;
