import TopCover from './TopCover';

const Home = () => {
  return (
    <div className='p-8 pt-24 flex flex-col'>
      <div className='block overflow-hidden'>
        <TopCover />
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-start'>
          <h1 className='logo text-4xl md:text-6xl box-border py-4 leading-10 block font-semibold'>
            Hoang Nguyen
          </h1>
          <div className='mt-2'>Software Engineer</div>
          <p className='mt-4'>
            <span className=' text-3xl'>Hello there!</span> Nice to meet you.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
            <br />
            <br /> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
