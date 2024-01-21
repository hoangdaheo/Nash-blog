import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';

const BlogContent = () => {
  return (
    <div id='homepage'>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

export default BlogContent;
