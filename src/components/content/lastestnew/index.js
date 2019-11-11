import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardTitle, Button, CardText,
    CardBody, Badge
} from 'reactstrap';
import MostRead1 from '../../../assets/image/mostread/post-3-copyright-600x600.jpg'
import MostRead4 from '../../../assets/image/mostread/post-8-copyright-600x600.jpg'
const Lastestnew = (props) => {
    return (
        <div className="post-lastest">
            <div className="header-lastest">
                <h3 className="title-lastest">Lastest News</h3>
            </div>

            <Row className="news">
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead4} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Inspiration</Badge>
                            <CardTitle>Helicopter tours around the US largest cities</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead1} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Destinations</Badge>
                            <CardTitle>Where to see the 2019 solar eclipse in South America</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row className="news">
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead4} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Inspiration</Badge>
                            <CardTitle>Helicopter tours around the US largest cities</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead1} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Destinations</Badge>
                            <CardTitle>Where to see the 2019 solar eclipse in South America</CardTitle>
                            <CardText>by Jenny Preston</CardText>

                        </CardBody>
                    </Card>
                </Col>

            </Row>
            <Row className="news">
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead4} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Inspiration</Badge>
                            <CardTitle>Helicopter tours around the US largest cities</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={MostRead1} alt="Card image cap" />
                        <CardBody>
                            <Badge href="#" color="danger" >Destinations</Badge>
                            <CardTitle>Where to see the 2019 solar eclipse in South America</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
            <Button color="primary" size="lg" block href="#">Load More</Button>
        </div>
    );
};

export default Lastestnew;