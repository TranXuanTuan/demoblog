import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <Row className="header-footer">
                <Col>MJ</Col>
            </Row>
            <Row>
                <Col>
                    <Button className="social-item" href="#"><FaTwitter /></Button>
                    <Button className="social-item" href="#"><FaInstagram /></Button>
                    <Button className="social-item" href="#"><FaFacebookF /></Button>
                </Col>
            </Row>
            <Row ><Col>AncoraThemes © 2019. All Rights Reserved.</Col></Row>
        </div>
    )
}
