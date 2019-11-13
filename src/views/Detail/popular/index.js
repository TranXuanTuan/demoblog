import React from 'react';
import { Media } from 'reactstrap';

const Popular = () => {
    return (
        <div className="post-popular">
            <Media>
                <Media left href="#">
                    <Media src={require('../../../assets/image/avatar/ff3d859e1a13454a0dbe8dc2e0417f17.jpeg')} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    Jenny Preston
                    </Media>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                <Media href="#">
                    View All Posts
                </Media>
                </Media>
                
            </Media>
        </div>

    );
};

export default Popular;