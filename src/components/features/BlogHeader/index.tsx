import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Section from './Section';
import './index.scss';

interface IProps {
  blogRef: React.MutableRefObject<HTMLDivElement | null>;
}

const BlogHeader: React.FC<IProps> = ({ blogRef }) => {
  const [showTool, setShowTool] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(
    localStorage?.getItem('isDarkMode') === 'true'
  );
  const prevScroll = useRef<number>(0);
  const [currentScroll, setCurrentScroll] = useState<'up' | 'down' | null>(
    null
  );
  // need opt
  const menuBtnColorBehavior = showTool
    ? isDarkMode
      ? 'light-mode'
      : 'dark-mode'
    : isDarkMode
      ? 'dark-mode'
      : 'light-mode';
  const handleShowCmsTool = useCallback(() => {
    setShowTool(!showTool);
  }, [showTool]);

  const handleToggleTheme = useCallback(() => {
    localStorage?.setItem('isDarkMode', `${!isDarkMode}`);
    setDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const handleScroll = useCallback(() => {
    if (window?.scrollY === 0 && prevScroll?.current === 0) {
      setCurrentScroll(null);
    }

    if (window?.scrollY > prevScroll?.current) {
      prevScroll.current = window?.scrollY;
      setCurrentScroll('down');
    } else if (window?.scrollY < prevScroll?.current) {
      prevScroll.current = window?.scrollY;
      setCurrentScroll('up');
    }
  }, [prevScroll, currentScroll]);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const body: HTMLElement = document?.body;
    if (isDarkMode) {
      blogRef?.current?.classList?.add('dark-mode');
      blogRef?.current?.classList?.remove('light-mode');
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      blogRef?.current?.classList?.remove('dark-mode');
      blogRef?.current?.classList?.add('light-mode');
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className='blog-header fixed w-full z-10'>
      <div
        className={`relative flex flex-row max-w-5xl items-center justify-between justify-items-end p-4 pb-2 
				m-auto gap-7 font-medium text-xl scroll-${currentScroll || 'up'}
				 opacity-95 ${isDarkMode ? ' dark-mode' : ' light-mode'}`}
      >
        <div className='home-box'>
          <div className='logo text-4xl hover:text-red-300'>
            <Link to={'/'}>Na*h</Link>
          </div>
        </div>
        <div className='md:relative info-box flex gap-4 items-center'>
          <div className='block overflow-hidden'>
            <Section />
          </div>
          <div
            className={`transition-all duration-500 w-10 flex justify-center cursor-pointer border-2 rounded-2xl border-solid p-2 ${isDarkMode ? 'light-mode' : 'dark-mode'}`}
            onClick={handleToggleTheme}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>
          <div>
            <button
              onClick={handleShowCmsTool}
              className={`transition-all duration-500 border-2 rounded-2xl border-solid p-2 ${menuBtnColorBehavior}`}
            >
              <RiMenu4Line />
            </button>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${showTool ? ' cursor-pointer opacity-95' : ' opacity-0 pointer-events-none'}
						 menu-box absolute flex flex-col top-full right-0 
						 w-full mt-4 md:w-52 md:mt-8 p-4 border-2 rounded-2xl  ${isDarkMode ? ' dark-mode' : 'light-mode'}`}
          >
            <div>
              <a>Log in</a>
            </div>
            <div className='md:hidden'>
              <Section isInsideMenu={true} />
            </div>
            <div>Content management</div>
            <div>Settings</div>
          </div>
        </div>
      </div>
      <div className='blog-header-bottom-line m-auto border-b-2 border-b-cyan-600 max-w-5xl h-0 block'></div>
    </div>
  );
};

export default BlogHeader;
