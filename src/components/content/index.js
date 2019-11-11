import React from 'react';
import Trending from './trending';
import Watch from './mustwatch'
import {Container} from 'reactstrap';
import LazyLoad from 'react-lazyload'
import Lastestnew from './lastestnew'
import MostRead from './mostread'

export default function Content() {
    return (
        <Container>
            <LazyLoad>
            <Trending />
            </LazyLoad> 
            <LazyLoad >  
            <Watch />
            </LazyLoad> 
            <LazyLoad >         
            <MostRead />
            </LazyLoad>     
            <LazyLoad >          
            <Lastestnew />
            </LazyLoad>
        </Container>
    )
}
