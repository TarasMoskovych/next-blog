import { IBlog, getImageUrl } from 'src/services/blog.service';

type Props = {
  blog: IBlog;
  navigateToBlogDetail: (blog: IBlog) => void;
}

const Card = ({ blog, navigateToBlogDetail }: Props) => {
  const backgroundImage = `var(--card-img-hovered-overlay), url(${getImageUrl(blog.imageSource).height(300).crop('center').fit('clip').url()})`;

  return (
    <article onClick={() => navigateToBlogDetail(blog)} className='nb-card'>
      <div className='nb-card__img' style={{ backgroundImage }}></div>
      <a className='nb-card__link'>
        <div className='nb-card__img--hovered' style={{ backgroundImage }}></div>
      </a>
      <div className='nb-card__info'>
        <div className='nb-card__about'>
          {/* <a className='nb-card__tag nb-card__tag--news'>DEV</a> */}
          <div className='nb-card__date'>{blog.createdAt}</div>
        </div>
        <h2 className='nb-card__title'>{blog.title}</h2>
        <p className='nb-card__subtitle'>{blog.subtitle}</p>
        <div className='nb-card__creator'>{'by '}
          <a className='nb-card__link'>
            {blog.createdBy?.displayName || 'Admin'}
            {blog.createdBy?.photoUrl &&
              <img src={blog.createdBy.photoUrl} alt='Avatar' />
            }
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
