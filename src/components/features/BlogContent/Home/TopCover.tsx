import HeroMotion from '../motion-components/hero-motion';
import './topCover.scss';

const TopCover = () => {
  return (
    <div className='relative top-cover-box w-full block object-fill mx-auto'>
      <div className='absolute mx-auto bottom-[50%] text-xl font-mono left-10 text-white'>
        <div className='flex flex-col z-10'>
          <div className='headline font-semibold text-5xl'>
            Welcome to three-F
          </div>
          <div className='mt-8 w-1/3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tenetur!
          </div>
          <div className='mt-8 z-10'>
            <button className='p-4 border-2 border-cyan-600 rounded-2xl bg-slate-800 cursor-pointer hover:bg-slate-600'>
              Start your learning journey!
            </button>
          </div>
        </div>
      </div>
      <div className='absolute right-14 bottom-[50%]'>
        <HeroMotion />
      </div>
      <img src='/class2.jpg' className='w-full opacity-15 rounded-b-3xl' />
    </div>
  );
};

export default TopCover;
