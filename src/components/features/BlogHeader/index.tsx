import React, { useEffect, useRef, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Section from './Section';
import './index.scss';

interface IProps {
  blogRef: React.MutableRefObject<HTMLDivElement | null>;
}

const BlogHeader: React.FC<IProps> = () => {
  const [showTool, setShowTool] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const prevScroll = useRef<number>(0);
  const [currentScroll, setCurrentScroll] = useState<'up' | 'down' | null>(
    null
  );

  const handleShowCmsTool = () => {
    setShowTool(!showTool);
  };

  const handleScroll = () => {
    if (window?.scrollY <= 60 && prevScroll?.current <= 0) {
      setCurrentScroll(null);
      return;
    }

    if (window?.scrollY > prevScroll?.current) {
      prevScroll.current = window?.scrollY;
      setCurrentScroll('down');
    } else if (window?.scrollY < prevScroll?.current) {
      prevScroll.current = window?.scrollY;
      setCurrentScroll('up');
    }
  };

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // On component mount, check localStorage for a saved theme preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className='blog-header fixed w-full z-10 bg-amber-50 dark:bg-neutral-950 opacity-100 z-50'>
      <div
        className={`relative transition-all duration-500 flex flex-row max-w-5xl items-center justify-between justify-items-end p-4 pb-2 
				m-auto gap-7 font-medium text-xl scroll-${currentScroll || 'up'} bg-amber-50 dark:bg-neutral-950
				 opacity-80`}
      >
        <div className='home-box'>
          <div className='logo text-4xl hover:text-red-300'>
            <Link to={'/'}>three-F</Link>
          </div>
        </div>
        <div className='md:relative info-box flex gap-4 items-center'>
          <div className='block overflow-hidden'>
            <Section />
          </div>
          <div
            className='w-10 flex justify-center cursor-pointer border-2 rounded-2xl border-solid p-2 dark:bg-amber-50 bg-neutral-950'
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
          <div>
            <button
              onClick={handleShowCmsTool}
              className={`border-2 rounded-2xl border-solid p-2`}
            >
              <MenuIcon />
            </button>
          </div>
          <div
            className={`${showTool ? ' cursor-pointer opacity-95' : ' opacity-0 pointer-events-none'}
						 menu-box absolute flex flex-col top-full right-0 
						 w-full mt-4 md:w-52 md:mt-8 p-4 border-2 rounded-2xl  ${isDarkMode ? ' dark' : 'light-mode'}`}
          >
            <div>
              <a>Log in</a>
            </div>
            <div className='md:hidden'>
              <Section isInsideMenu={true} />
            </div>
            <div>
              <Link to={'cms/'}>Content management</Link>
            </div>
            <div>
              <Link to={'setting/'}>Settings</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-header-bottom-line m-auto border-b-2 border-b-cyan-600 max-w-5xl h-0 block'></div>
    </div>
  );
};

export default BlogHeader;
