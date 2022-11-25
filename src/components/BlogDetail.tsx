import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { Parallax } from 'react-parallax';
import HighlightCode from 'src/components/HighlightCode';
import { IBlog, getImageUrl } from 'src/services/blog.service';
import { formatDate, toHashtag } from 'src/utils';

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
        <div className='' style={styles}>
          <img alt={alt} src={getImageUrl(asset).height(300).fit('max').url()} style={{ maxWidth: '100%', maxHeight: 350 }} />
          {alt &&
            <p>{alt}</p>
          }
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;

      return (
        <a href={value.href} rel={rel} target='_blank'>
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }) => {
      const anchor = toHashtag(children as string[]);

      return (
        <h2 className='with-link' id={anchor.slice(1)}>
          {children}
          <a href={anchor}>
            <span className="material-symbols-outlined">link</span>
          </a>
        </h2>
      );
    },
  },
};

const BlogDetail = ({ blog }: Props) => {
  return (
    <div className='nb-blog-detail'>
      <Parallax
        bgImage={getImageUrl(blog.imageSource).url()}
        bgImageAlt={blog.title}
        strength={-100}
        bgClassName='nb-blog-detail__cover-image'
      >
        <div style={{ height: 400 }}>
          <h2 className='nb-blog-detail__title'>{blog.title}</h2>
        </div>
      </Parallax>
      <div className='nb-page-content'>
        <div className='nb-blog-detail__content-wrapper'>
          <h2 className='nb-blog-detail__subtitle'>{blog.subtitle}</h2>
          <div className='nb-blog-detail__created-by'>
            <div className='nb-blog-detail__author'>
              <img
                src={getImageUrl(blog.createdBy.photoUrl).height(36).width(36).url()}
                className='nb-blog-detail__author-image'
                alt='avatar'
              />
              <p className='nb-blog-detail__author-text'>
                {blog.createdBy?.displayName || 'Admin'}
              </p>
            </div>
            <div className='nb-blog-detail__date'>
              {formatDate(blog.createdAt)}
            </div>
          </div>
          <div className='nb-blog-detail__content'>
            <PortableText
              value={blog.content as PortableTextBlock}
              components={portableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
