import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  flex: 1;
  margin-left: 0.7em;
  cursor: pointer;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 455px;
`;

const Image = styled.img`
  width: 100%;
  display: flex;
  position: relative;
`;

const Title = styled.p`
  font-size: 0.85em;
  margin-top: 1em;
`;

const Description = styled.p`
  font-size: 1.125em;
`;

const ProductItem = ({ item }) => (
  <Container>
    <ImageContainer>
      <Image src={item.img} />
    </ImageContainer>
    <Title>{item.title}</Title>
    <Description>{item.price}</Description>
  </Container>
);

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ProductItem;
