import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, Badge, Media
} from 'reactstrap';
import MostRead1 from '../../../assets/image/mostread/post-3-copyright-600x600.jpg'
import MostRead2 from '../../../assets/image/mostread/post-43-copyright-600x600.jpg'
import MostRead3 from '../../../assets/image/mostread/post-48-copyright-600x600.jpg'
import MostRead4 from '../../../assets/image/post-28-copyright-600x600.jpg'

const MostRead = (props) => {
    return (
        <div className="header-read">
            <h3>Most Read</h3>
            <CardDeck>
                <Card>
                    <Media href="#">
                        <CardImg top width="100%" src={MostRead1} alt="Card image cap" />
                    </Media>
                    <CardBody>
                        <Badge href="#" color="danger">Bucket List</Badge>
                        <Media href="#" className="title-link">
                            <CardTitle>Which trips are on your bucket list in 2019?</CardTitle>
                        </Media>
                        <CardText>by Jenny Preston</CardText>
                        <CardText>4 Jan, 2019</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <Media href="#">
                        <CardImg top width="100%" src={MostRead2} alt="Card image cap" />
                    </Media>
                    <CardBody>
                        <Badge href="#" color="danger">LifeStyle</Badge>
                        <Media href="#" className="title-link">
                            <CardTitle>Top South Africa hiking trails: 2018 highlights</CardTitle>
                        </Media>
                        <CardText>by Jenny Preston</CardText>
                        <CardText>2 Jan, 2019</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <Media href="#">
                        <CardImg top width="100%" src={MostRead3} alt="Card image cap" />
                    </Media>
                    <CardBody>
                        <Badge href="#" color="danger">Destinations</Badge>
                        <Media href="#" className="title-link">
                            <CardTitle>Which trips are on your bucket list in 2019?</CardTitle>
                        </Media>
                        <CardText>by Jenny Preston</CardText>
                        <CardText>30 Dec, 2018</CardText>

                    </CardBody>
                </Card>
            </CardDeck>
            <Row className="read">
                <Col sm="6">
                    <Card>
                        <Media href="#">
                            <CardImg top width="100%" src={MostRead4} alt="Card image cap" />
                        </Media>
                        <CardBody>
                            <Badge href="#" color="danger" >Inspiration</Badge>
                            <Media href="#" className="title-link">
                                <CardTitle>Helicopter tours around the US largest cities</CardTitle>
                            </Media>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <Media href="#">
                            <CardImg top width="100%" src={MostRead1} alt="Card image cap" />
                        </Media>
                        <CardBody>
                            <Badge href="#" color="danger" >Destinations</Badge>
                            <Media href="#" className="title-link">
                                <CardTitle>Where to see the 2019 solar eclipse in South America</CardTitle>
                            </Media>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default MostRead;