import { useRef } from 'react';
import { useRouteError } from 'react-router-dom';
import BlogHeader from '../../features/BlogHeader';

const ErrorPage = () => {
  const blogRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <>
      <div ref={blogRef} className='font-mono'>
        <header id='blog-bar' className='block'>
          <BlogHeader blogRef={blogRef} />
        </header>
        <section
          id='main'
          className='max-w-4xl m-auto block pt-96 text-center min-h-screen'
        >
          <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error?.statusText || error?.message}</i>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ErrorPage;
