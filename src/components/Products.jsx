import styled from 'styled-components';
import ProductItem from './ProductItem';
import products from '../data';

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 2.5em;
  margin-right: 3em;
`;

const Title = styled.h1`
  font-size: 1em;
  font-weight: 400;
  font-size: 1.5em;
  margin-top: 2.85em;
  letter-spacing: 0.05em;
  margin-left: 2em;
  margin-bottom: 1em;
  text-align: left;
  width: 100vw;
  padding-left: 2.8em;
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
