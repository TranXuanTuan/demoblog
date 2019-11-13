import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import '../Detail/style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Popular from './popular'
import Relate from './related'
import Comment from './comment'
export default function index() {
    return (
        <div>
            <Header />
            <div className="banner">
                <img width="100%" src={require('../../assets/image/banner/post-55-copyright.jpg')} alt="banner" />
            </div>
            <Container>
            <div className="post-content" >
                <p>Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula gravida, pulvinar magna eget, eleifend mi. Proin massa tortor, ornare sit amet commodo et, eleifend vel odio. Integer porta orci ornare metus egestas, a venenatis felis finibus.</p>
                <p>Maecenas scelerisque risus ac sapien semper, pharetra maximus erat sollicitudin. Nullam ullamcorper risus tempor diam dictum laoreet. Nulla ac blandit tortor.</p>
                <img className="image-postdetail" width="100%" src={require('../../assets/image/mustwatch/post-27-copyright-600x600.jpg')} alt="img-post"></img>
                <p>
                Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula gravida, pulvinar magna eget, eleifend mi. Proin massa tortor, ornare sit amet commodo et, eleifend vel odio. Integer porta orci ornare metus egestas, a venenatis felis finibus.
                </p>
                <h3>Give You The Best Ideas</h3>
                <p>Proin faucibus ex nec mauris sodales, sed elementum mi tincidunt. Sed viverra egestas nisi consequat. Fusce sodales ultrices augue a accumsan.</p>
                <ul>
                    <li>Suspendisse dignissim consectetur</li>
                    <li>Nullam efficitur nunc risus dui semper</li>
                    <li>Etiam eu lectus at lectus tempor</li>
                    <li>Etiam lobortis metus aliquam at nulla</li>
                    <li>In eget augue vel odio aliquet nunc</li>
                </ul>
                <p>Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula gravida, pulvinar magna eget, eleifend mi. Proin massa tortor, ornare sit amet commodo et, eleifend vel odio.</p>
                <img className="image-postdetail" width="100%" src={require('../../assets/image/postdetail/post-3-copyright-1024x576.jpg')} alt="img-post"></img>
                <Row>
                    <Col xs="6">
                        <img className="image-postdetail" width="304px" height="171px" src={require('../../assets/image/postdetail/post-25-copyright-1024x577.jpg')} alt="img-post"></img>
                    </Col>
                    <Col xs="6">
                    <img className="image-postdetail" width="304px" height="171px" src={require('../../assets/image/postdetail/post-26-copyright-1024x576.jpg')} alt="img-post"></img>
                    </Col>
                </Row>
                <Popular />
                <Relate />
                <Comment />
            </div>
            </Container>
            <Footer />
        </div>
    )
}
