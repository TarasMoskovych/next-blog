import { toHashtag } from 'src/utils';

const LinkableHeader = ({ children }: any) => {
  const anchor = toHashtag(children as string[]);

  return (
    <h2 className='with-link' id={anchor.slice(1)}>
      {children}
      <a href={anchor} rel='noreferrer'>
        <span className="material-symbols-outlined">link</span>
      </a>
    </h2>
  );
};

export default LinkableHeader;
