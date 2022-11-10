import { PortableText, PortableTextComponents } from '@portabletext/react'
import HighlightCode from 'src/components/HighlightCode';
import { IBlog, getImageUrl } from 'src/services/blog.service';

type Props = {
  blog: IBlog;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    code: ({ value: { language, code, filename } }) => {
      return (
        <HighlightCode language={language} filename={filename}>
          {code}
        </HighlightCode>
      );
    },
    image: ({ value: { alt, asset, position = 'center' } }) => {
      const styles = {};

      if (position === 'left') {
        Object.assign(styles, { float: position, marginRight: '15px' });
      } else if (position === 'right') {
        Object.assign(styles, { float: position, marginLeft: '15px' });
      } else {
        Object.assign(styles, { textAlign: position });
      }

      return (
        <div className="" style={styles}>
          <img alt={alt} src={getImageUrl(asset).height(300).fit('max').url()} style={{ maxWidth: "100%" }} />
          {alt &&
            <p>{alt}</p>
          }
        </div>
      );
    },
  },
};

const BlogDetail = ({ blog }: Props) => {
  return (
    <div>
      <div className="blog-detail-header">
        <p className="lead mb-0">
          {blog.createdBy?.photoUrl &&
            <img
              src={getImageUrl(blog.createdBy.photoUrl).height(100).url()}
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
          src={getImageUrl(blog.imageSource).maxHeight(600).url()}
          alt=""
        />
      </div>
      <hr />
      {blog.content &&
        <PortableText
          value={blog.content}
          components={portableTextComponents}
        />
      }
    </div>
  );
};

export default BlogDetail;
