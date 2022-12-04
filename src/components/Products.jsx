import styled from 'styled-components';
import ProductItem from './ProductItem';
import products from '../data';

const Container = styled.div`
  width: 100%;
  height: 900px;
`;

const ProductsContainer = styled.div`
  height: 400px;
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
`;

const Products = () => (
  <Container>
    <Title>NEWLY ADDED PRODUCTS</Title>
    <ProductsContainer>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductsContainer>
  </Container>
);

export default Products;
