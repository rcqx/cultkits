import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

const Container = styled.div`
  height: 10em;
  background-color: white;
  border: 2px solid black;
`;

const Wrapper = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
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
`;

const Language = styled.span`
  flex: 1; 
  display: flex;
  align-item: center;
`;

const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 1.25em;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weigth: bold; 
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <SearchContainer>
          <Language>
            EN
          </Language>
          <Input />
          <Search />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>
          CultKits
        </Logo>
      </Center>
      <Right>Right</Right>
    </Wrapper>
  </Container>
);

export default Navbar;
