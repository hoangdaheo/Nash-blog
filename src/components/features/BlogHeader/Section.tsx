import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <GitHubIcon />
        <a href='https://github.com/hoangdaheo'>Source</a>
      </div>
    </div>
  );
};

export default React.memo(Section);
