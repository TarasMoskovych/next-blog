import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

export default () => {
  return (
    <PageLayout>
      <div>
        <Row>
          <Col md="6">
            Placeholder
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md="6">
            <CardListItem />
          </Col>
          <Col md="6">
            <CardListItem />
          </Col>
          <Col md="6">
            <CardItem />
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
}
