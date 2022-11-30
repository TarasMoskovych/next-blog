import { GetStaticProps, GetStaticPaths } from 'next'
import PageLayout from 'src/components/PageLayout';
import BlogDetail from 'src/components/BlogDetail';
import blogService, { IBlog } from 'src/services/blog.service';

type Props = {
  blog: IBlog;
}

const BlogDetailPage = ({ blog }: Props) => {
  return (
    <PageLayout className='nb-detail-page' title={blog.title} scrollProgress={true}>
      <BlogDetail
        blog={blog}
      />
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
