import React, { lazy, Suspense, useEffect } from 'react';
import {connect} from 'react-redux'

import '../Home/style.css';
import Footer from '../../components/footer';
import Header from '../../components/header'
import Content from '../../components/content'
import {handleHome} from '../../actions'

const Slider = lazy(() => import('../../components/slider'))

function Home(props) {

  useEffect (() => {
    props.handleHome1()
  }, [])

  return (
    <div>
      <Header />
      <Suspense> 
        <Slider />
      </Suspense>
      <Content />
      <Footer /> 
    </div>   
  );
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const dispatchToProps = dispatch => {
  return {
    handleHome1: () => { dispatch(handleHome()) }
  }
}
export default connect(mapStateToProps, dispatchToProps)(Home);
