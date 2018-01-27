import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 51px;
  background: rgba(33,33,33,.9);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const NavItem = styled(Link)`
  padding: 15px 14px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Gotham SSm A","Gotham SSm B",sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;
    &:hover {
      color: #1e88e5;
    }
  &:focus {
    outline: none;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/">Technology</NavItem>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
