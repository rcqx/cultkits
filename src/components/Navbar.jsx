import React from 'react';
import styled from 'styled-components';
import {
  Menu,
  Search,
  FavoriteBorderOutlined,
  LocalMallOutlined,
  PersonOutlineOutlined,
}
  from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import logo from '../assets/logo.jpeg';

const Container = styled.div`
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 0;
`;

const LeftMobil = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: space-around;
  padding: 0 0.65em;

  @media (min-width: 768px) {
    display: none; 
  }
`;

const LeftTablet = styled.div`
  flex: 1;
  display: none;
  align-item: center;
  justify-content: start;
  margin-left: 50px; 
  @media (min-width: 768px) {
    display: flex; 
  }
  @media (min-width: 1024px) {
    display: none; 
  }
`;

const LeftDesktop = styled.div`
  flex: 1;
  display: none;
  align-item: center;
  justify-content: start;
  margin-left: 50px; 
  @media (min-width: 1024px) {
    display: flex; 
  }
`;

const Center = styled.div`
  flex: 2.5;
  text-align: center;
`;

const RightMobil = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.65em;
  @media (min-width: 768px) {
    display: none; 
  }
`;

const RightTablet = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.65em;
  @media (min-width: 768px) {
    display: flex; 
  }
  @media (min-width: 1024px) {
    display: none; 
  }
`;

const RightDesktop = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: end;
  padding: 0 0.65em;
  @media (min-width: 1024px) {
    display: flex; 
  }
`;

const Logo = styled.div``;

const Navbar = () => (
  <Container>
    <Wrapper>
      <LeftMobil>
        <Menu fontSize="medium" style={{ color: 'black' }} />
        <FavoriteBorderOutlined fontSize="medium" style={{ color: 'black' }} />
      </LeftMobil>
      <LeftTablet class="tablet">
        <Menu fontSize="large" style={{ color: 'black' }} />
      </LeftTablet>
      <LeftDesktop class="tablet">
        <Search style={{ color: 'black' }} fontSize="large" />
      </LeftDesktop>
      <Center>
        <Logo>
          <img src={logo} alt="logo" style={{ width: '4.5em' }} />
        </Logo>
      </Center>
      <RightMobil>
        <Search style={{ color: 'black' }} />
        <Badge badgeContent={4} color="primary">
          <LocalMallOutlined style={{ color: 'black' }} />
        </Badge>
      </RightMobil>
      <RightTablet>
        <Search style={{ color: 'black' }} />
        <FavoriteBorderOutlined fontSize="medium" style={{ color: 'black' }} />
        <PersonOutlineOutlined fontSize="medium" />
        <Badge badgeContent={4} color="primary">
          <LocalMallOutlined style={{ color: 'black' }} />
        </Badge>
      </RightTablet>
      <RightDesktop>
        <FavoriteBorderOutlined fontSize="large" style={{ marginLeft: '0.5em' }} />
        <PersonOutlineOutlined fontSize="large" style={{ marginLeft: '0.5em' }} />
        <Badge badgeContent={4} color="primary" style={{ margin: '0 0.4em' }}>
          <LocalMallOutlined fontSize="large" style={{ marginLeft: '0.4em' }} />
        </Badge>
      </RightDesktop>
    </Wrapper>
  </Container>
);

export default Navbar;
