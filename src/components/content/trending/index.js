import React from 'react';
import { Row, Col, Badge, Media } from 'reactstrap';
import trending1 from '../../../assets/image/post-46-copyright-600x600.jpg'
import trending2 from '../../../assets/image/post-47-copyright-600x600.jpg'
import trending3 from '../../../assets/image/post-49-copyright-600x600.jpg'

const Trending = (props) => {
  return (
    <div>
      <div className="header-trending">
      <h3 className="title-trending">Trending</h3>
      <Badge href="/detail" color="danger" className="float-right">More Trending</Badge>
      </div>
      
      <Row>
        <Col sm="4">
        <Media>
      <Media left href="#">
        <Media src={trending1} width="100px" alt="Generic placeholder image" />
      </Media>
      <Media body >
        <Media href="#" className="title-link">
          <Media>
          The new incredible park in Argentina
          </Media>
        </Media>
        10 Jan, 2019
      </Media>
    </Media>
        </Col>
        <Col sm="4">
        <Media>
      <Media left href="#">
        <Media src={trending2} width="100px" alt="Generic placeholder image" />
      </Media>
      <Media body>
      <Media href="#" className="title-link">
          <Media>
          All travelers dream about this destination
          </Media>
        </Media>
        8 Jan, 2019
      </Media>
    </Media>
        </Col>
        <Col sm="4">
        <Media>
      <Media left href="#">
        <Media src={trending3} width="100px" alt="Generic placeholder image" />
      </Media>
      <Media body>
      <Media href="#" className="title-link">
          <Media>
          These unique spots are Airbnb’s trending
          </Media>
        </Media>
        6 Jan, 2019
      </Media>
    </Media>
        </Col>
      </Row>
    </div>

  );
};

export default Trending;