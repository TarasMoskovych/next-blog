import { IBlog, getImageUrl } from 'services/blog.service';

type Props = {
  blog: IBlog;
  navigateToBlogDetail: (blog: IBlog) => void;
}

const BlogCard = ({ blog, navigateToBlogDetail }: Props) => {
  const backgroundImage = `var(--card-img-hovered-overlay), url(${getImageUrl(blog.imageSource).height(300).crop('center').fit('clip').url()})`;

  return (
    <article onClick={() => navigateToBlogDetail(blog)} className="nb-card-item">
      <div className="nb-card-item__img" style={{ backgroundImage }}></div>
      <a className="nb-card-item__link">
        <div className="nb-card-item__img--hovered" style={{ backgroundImage }}></div>
      </a>
      <div className="nb-card-item__info">
        <div className="nb-card-item__about">
          <a className="nb-card-item__tag nb-card-item__tag--news">NEWS</a>
          <div className="card-time">{blog.createdAt}</div>
        </div>
        <h1 className="nb-card-item__title">{blog.title}</h1>
        <div className="nb-card-item__creator">{'by '}
          <a className="nb-card-item__link">
            {blog.createdBy?.displayName || 'Admin'}
            {blog.createdBy?.photoUrl &&
              <img src={blog.createdBy.photoUrl} alt="Avatar" />
            }
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
