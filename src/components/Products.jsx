import styled from 'styled-components';
import ProductItem from './ProductItem';
import products from '../data';

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid red;
`;

const Title = styled.h1`
  font-size: 1em;
  letter-spacing: 0.05em;
  font-weight: 400;
  padding-top: 2em;
  font-size: 1.2em;
  margin-left: 0.8em;
`;

const Button = styled.button`
  border: none;
  padding 1em 2.25em;
  cursor: pointer;
  letter-spacing: 0.055em;
  font-size: 0.9em;
  margin-top: 2em;
  width: 8.5em;
  background-color: black;
  color white;
`;

const Products = () => (
  <Container>
    <Title>NEWLY ADDED PRODUCTS</Title>
    <ProductsContainer>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductsContainer>
    <Button>View all</Button>
  </Container>
);

export default Products;
