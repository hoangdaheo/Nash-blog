import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';

interface IProps {
  isInsideMenu?: boolean;
}

const Section: React.FC<IProps> = ({ isInsideMenu }) => {
  return (
    <div className={!isInsideMenu ? 'hidden md:flex gap-4 items-center' : ''}>
      <div>
        <a href='#'>Blogs</a>
      </div>
      <div>
        <a href='#'>About</a>
      </div>
      <div className='flex flex-row gap-1 items-center'>
        <IoLogoGithub />
        <a href='#'>Source</a>
      </div>
    </div>
  );
};

export default React.memo(Section);
