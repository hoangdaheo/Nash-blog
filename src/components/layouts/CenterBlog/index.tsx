import React, { useRef } from 'react';
import BlogHeader from '../../features/BlogHeader';
import BlogContent from '../../features/BlogContent';

const CenterBlog: React.FC<unknown> = () => {
  const blogRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={blogRef}
        className='font-mono bg-amber-50 text-slate-500 dark:bg-neutral-950 dark:text-slate-400 transition-all duration-500'
      >
        <header id='blog-bar' className='block'>
          <BlogHeader blogRef={blogRef} />
        </header>
        <section id='main' className='m-auto block'>
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
