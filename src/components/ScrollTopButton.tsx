import { useScrollTop } from 'src/hooks/useScrollTop';

const ScrollTopButton = () => {
  const { shown, scrollTop } = useScrollTop();

  return (
    <button className={`nb-scroll-top-button ${shown ? 'nb-scroll-top-button--visible' : ''}`} onClick={scrollTop}>
      <span className="nb-scroll-top-button__icon material-symbols-outlined">expand_less</span>
    </button>
  );
};

export default ScrollTopButton;
