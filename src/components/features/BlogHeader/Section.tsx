import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface IProps {
  isInsideMenu?: boolean;
}

const Section: React.FC<IProps> = ({ isInsideMenu }) => {
  return (
    <div
      className={`section-box ${!isInsideMenu ? 'hidden md:flex gap-4 items-center' : ''}`}
    >
      <div>
        <Link to={'blog/'}>Blogs</Link>
      </div>
      <div>
        <Link to={'about/'}>About</Link>
      </div>
      <div className='flex flex-row gap-1 items-center'>
        <IoLogoGithub />
        <a href='https://github.com/hoangdaheo'>Source</a>
      </div>
    </div>
  );
};

export default React.memo(Section);
