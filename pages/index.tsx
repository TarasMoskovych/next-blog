import { GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import blogService, { IBlog } from 'services/blog.service';

type Props = {
  blogs: IBlog[];
};

const Home = ({ blogs }: Props) => {
  const router = useRouter();
  const navigateToBlogDetail = ({ slug }: IBlog) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <PageLayout>
      <div>
        <Row>
          <Col md="6">
            Placeholder
          </Col>
        </Row>
        <Row className="mb-5">
          {blogs.map((blog: IBlog) =>
            <Col key={blog.slug} md="4">
              <CardItem
                blog={blog}
                navigateToBlogDetail={navigateToBlogDetail}
              />
            </Col>
          )}
          {/* <Col md="6">
            <CardListItem />
          </Col> */}
        </Row>
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
  };
};

export default Home;
