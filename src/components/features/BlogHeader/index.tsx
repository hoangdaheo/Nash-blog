import { useCallback, useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';
import Section from './Section';
import './index.scss';

const BlogHeader = () => {
  const [showTool, setShowTool] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const handleShowCmsTool = useCallback(() => {
    setShowTool(!showTool);
  }, [showTool]);

  const handleToggleTheme = useCallback(() => {
    setDarkMode(!isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const body: HTMLElement = document?.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className='blog-header fixed w-full'>
      <div
        className='relative flex flex-row max-w-5xl items-center justify-between justify-items-end p-4 pb-2 
        m-auto gap-7 font-medium text-xl'
      >
        <div className='home-box'>
          <a className='logo text-4xl' href='#'>
            Nash
          </a>
        </div>
        <div className='md:relative info-box flex gap-4 items-center'>
          <Section />
          <div
            className={`w-10 flex justify-center cursor-pointer border-2 rounded-2xl border-solid p-2 ${isDarkMode ? 'hover-light' : 'hover-dark'}`}
            onClick={handleToggleTheme}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>
          <div>
            <button
              onClick={handleShowCmsTool}
              className={`border-2 rounded-2xl border-solid p-2 ${isDarkMode ? 'hover-light' : 'hover-dark'}`}
            >
              <RiMenu4Line />
            </button>
          </div>
          {showTool && (
            <div className='menu-box absolute flex flex-col top-full right-0 w-full md:w-52 mt-8 p-4 border-2 rounded-2xl'>
              <div>
                <a>Log in</a>
              </div>
              <div className='md:hidden'>
                <Section isInsideMenu={true} />
              </div>
              <div>Content management</div>
              <div>Settings</div>
            </div>
          )}
        </div>
      </div>
      <div className='blog-header-bottom-line m-auto border-b-2 border-b-cyan-600 max-w-5xl h-1 block'></div>
    </div>
  );
};

export default BlogHeader;
