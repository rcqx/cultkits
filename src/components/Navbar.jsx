import React from 'react';
import styled from 'styled-components';
import {
  Menu,
  Search,
  FavoriteBorderOutlined,
  LocalMallOutlined,
}
  from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import logo from '../assets/logo.jpeg';

const Container = styled.div`
  height: 9em;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: start;
  border: 1px solid red;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid red;
`;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 1.25em;
//   padding: 5px;
//   cursor: pointer;
// `;

const Logo = styled.div``;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <Menu fontSize="large" style={{ color: 'gray;' }} />
        <FavoriteBorderOutlined fontSize="large" style={{ color: 'gray' }} />
      </Left>
      <Center>
        <Logo>
          <img src={logo} alt="logo" style={{ width: '4.5em' }} />
        </Logo>
      </Center>
      <Right>
        <Search fontSize="large" style={{ color: 'gray' }} />
        <Badge badgeContent={4} color="primary">
          <LocalMallOutlined color="action" fontSize="large" />
        </Badge>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
