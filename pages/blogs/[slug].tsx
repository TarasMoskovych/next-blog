import { GetStaticProps, GetStaticPaths } from 'next'
import { Row, Col } from 'react-bootstrap'
import PageLayout from 'components/PageLayout';
import BlogDetail from 'components/BlogDetail';
import blogService, { IBlog } from 'services/blog.service';

type Props = {
  blog: IBlog;
}

const BlogDetailPage = ({ blog }: Props) => {
  return (
    <PageLayout className="blog-detail-page" title={blog.title}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogDetail
            blog={blog}
          />
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog: IBlog = await blogService.getBlogBySlag(params?.slug as string);

  return {
    props: {
      blog: blog || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await blogService.getAllSlugs();

  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  }
};

export default BlogDetailPage;
