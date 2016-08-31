import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import '../styles/atomic.scss';
import './app.scss';

import * as ui from '@teachers/tpt-ui';

const { Grid, Row, Col, Menu, MenuItem, BaseButton } = ui;

import ButtonCounter from './ButtonCounter/ButtonCounter'

const RootComponent = () => (
  <div className="App">
    <Grid className="App__grid">
      <Row>
        <Col xs={ 12 } >
          <p className="white App__headBanner">
            Hello :
          </p>
        </Col>
      </Row>
      <Row className="App__body">
        <Col xs={ 1 } />
        <Col xs={ 2 }>
          <div className="App__leftColumn">
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
            <ButtonCounter />
          </div>
        </Col>
        <Col xs={ 8 }>
          
        </Col>
        <Col xs={ 1 } />
      </Row>
    </Grid>
  </div>
)

RootComponent.propTypes = {
  params: React.PropTypes.object
};

RootComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const Index = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ RootComponent } />
    <Route path="/:pathName" component={ RootComponent } />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('content'));
