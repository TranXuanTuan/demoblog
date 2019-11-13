import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';

export default function Relate() {
    return (
        <div className="post-relate">
            <h3>You May Also Like</h3>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src={require('../../../assets/image/related/post-53-copyright-600x600.jpg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>How to find surfing spots that are great for Instagram pictures?</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                            <CardText>15 Apr, 2018</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src={require('../../../assets/image/related/post-13-copyright-600x600.jpg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Amazing spontaneous trips are the best treatment for stress</CardTitle>
                            <CardText>by Jenny Preston</CardText>
                            <CardText>16 Apr, 2018</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
