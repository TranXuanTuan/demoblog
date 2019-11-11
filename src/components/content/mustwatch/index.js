import React from 'react';
import { Media, Badge } from 'reactstrap';
import image from '../../../assets/image/mustwatch/post-27-copyright-600x600.jpg'

const Watch = () => {
  return (
      <div className="header-watch">
        <h3>Must Watch</h3>
      <Media>
        <Media left href="#">
          <Media src={image} width="624" height="351"/>
        </Media>
        <Media body>
          <Badge href="#" color="danger" >Inspiration</Badge>
          <Media href="#" className="title-link">
          <Media heading >
            World’s best beaches captured in a stunning image collection
          </Media>
          </Media>
         
          <Media href="#" className="author">
            <Media className="author-name">
          by Jenny Preston
          </Media >
          </Media>
          
          <Media className="time">
          12 Jan, 2019
          </Media>
          We have collected the best images of our planet’s most amazing beaches and combined them in this beautiful collage for our readers to enjoy.
        </Media>
      </Media>
    </div>
  );
};

export default Watch;