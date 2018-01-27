import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fetchProducts from './actions/index';

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

class App extends Component {
  componentDidMount() {
    this.props.products.fetchProducts();
  }
  render() {
    return (
      <Router>
        <Body>
          <Header />
          Test
        </Body>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    products: bindActionCreators(fetchProducts, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
