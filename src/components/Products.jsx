import styled from 'styled-components';
import ProductItem from './ProductItem';
import { products } from '../data';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: space-between;
    padding: 0 3em;
  }
`;

const TitleContainer = styled.div`
  width: 91%;
`;

const Title = styled.h1`
  letter-spacing: 0.05em;
  font-weight: 400;
  padding-top: 2em;
  padding-bottom: 1em;
  font-size: 1.2em;
  text-align: left;

  @media (min-width: 768px) { 
    font-size: 1.5em;
  }
`;

const Button = styled.button`
  border: none;
  padding 0.95em 2.25em;
  cursor: pointer;
  letter-spacing: 0.055em;
  font-size: 1em;
  width: 8.5em;
  background-color: black;
  color white;
  margin: 2.5em 0;
`;

const Products = () => (
  <Container>
    <ProductsContainer>
      <TitleContainer>
        <Title>NEWLY ADDED PRODUCTS</Title>
      </TitleContainer>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductsContainer>
    <Button>View all</Button>
  </Container>
);

export default Products;
