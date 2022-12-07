import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { Parallax } from 'react-parallax';
import HighlightCode from 'src/components/HighlightCode';
import LinkableHeader from 'src/components/LinkableHeader';
import PortableImage from 'src/components/PortableImage';
import { IBlog, getImageUrl } from 'src/services/blog.service';
import { formatDate } from 'src/utils';

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
    image: PortableImage,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} rel='noreferrer noopener' target='_blank'>
          {children}
        </a>
      );
    },
  },
  block: {
    h1: LinkableHeader,
    h2: LinkableHeader,
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
