import styled from 'styled-components';
import MerchItem from './MerchItem';
import { merch } from '../data';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MerchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 94%;
`;

const Title = styled.h1`
  font-size: 1em;
  letter-spacing: 0.05em;
  font-weight: 400;
  padding-top: 2em;
  padding-bottom: 1em;
  font-size: 1.2em;
  text-align: left;
`;

const Button = styled.button`
  border: none;
  padding 0.95em 2.25em;
  cursor: pointer;
  letter-spacing: 0.055em;
  font-size: 0.9em;
  width: 8.5em;
  background-color: black;
  color white;
  margin-top: 2.5em;
  margin-bottom: 2em;
`;

const Merch = () => (
  <Container>
    <TitleContainer>
      <Title>SHOP ALL NEW TEES & MERCHANDISE</Title>
    </TitleContainer>
    <MerchContainer>
      {merch.map((item) => (
        <MerchItem key={item.id} item={item} />
      ))}
    </MerchContainer>
    <Button>View all</Button>
  </Container>
);

export default Merch;
