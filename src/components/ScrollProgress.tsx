import { useScrollProgress } from 'src/hooks';

const ScrollProgress = () => {
  const { scrolled } = useScrollProgress();

  return (
    <div className='nb-scroll-progress'>
      <div className='nb-scroll-progress__container'>
        <div className='nb-scroll-progress__bar' style={{ width: scrolled }} />
      </div>
    </div>
  );
};

export default ScrollProgress;
