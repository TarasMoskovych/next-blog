import { IBlog } from 'services/blog.service';

type Props = {
  blog: IBlog;
}

const BlogDetail = ({ blog }: Props) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        {blog.createdBy?.photoUrl &&
          <img
            src={blog.createdBy.photoUrl}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
        }
        {blog.createdBy?.displayName || 'Admin'}
        {', '} {blog.createdAt}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{blog.title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{blog.subtitle}</h2>
        <img
          className="img-fluid rounded"
          src={blog.imageUrl}
          alt=""
        />
    </div>
  );
};

export default BlogDetail;
