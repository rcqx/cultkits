import React from 'react';
import styled from 'styled-components';
import {
  Search,
  ShoppingCartOutlined,
  PersonOutlineRounded,
  FavoriteBorderOutlined,
}
  from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import logo from '../assets/logo.jpeg';

const Container = styled.div`
  height: 10em;
  background-color: white;
  border: 2px solid black;
`;

const Wrapper = styled.div`
  padding: 0 4em;
  padding-top: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25em;
  padding: 5px;
  cursor: pointer;
`;

const Logo = styled.div``;

const MenuItem = styled.div`
  font-size: 1em;
  cursor: pointer;
  margin-left: 1.5em;
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <SearchContainer>
          <Search fontSize="large" style={{ color: 'gray' }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>
          <img src={logo} alt="logo" style={{ width: '4.5em' }} />
        </Logo>
      </Center>
      <Right>
        <MenuItem>
          <FavoriteBorderOutlined fontSize="large" style={{ color: 'gray' }} />
        </MenuItem>
        <MenuItem>
          <PersonOutlineRounded fontSize="large" style={{ color: 'gray' }} />
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined color="action" fontSize="large" />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
