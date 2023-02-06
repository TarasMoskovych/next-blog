import { GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import PageLayout from 'src/components/PageLayout';
import Card from 'src/components/Card';
import blogService, { IBlog } from 'src/services/blog.service';

type Props = {
  blogs: IBlog[];
};

const HomePage = ({ blogs }: Props) => {
  const router = useRouter();
  const navigateToBlogDetail = ({ slug }: IBlog) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <PageLayout className='nb-page-content nb-home-page'>
      <div className='nb-home-page__list'>
        {blogs.map((blog: IBlog) =>
          <div key={blog.slug} className='nb-home-page__list-item'>
            <Card
              blog={blog}
              navigateToBlogDetail={navigateToBlogDetail}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs: IBlog[] = await blogService.getAllBlogs();

  return {
    props: {
      blogs,
    },
    revalidate: 120,
  };
};

export default HomePage;
