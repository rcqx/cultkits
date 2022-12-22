import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 46.5%;
  margin: 0 0.35em;
  margin-bottom: 0.5em;

  @media (min-width: 992px) {
    width: 23%;
  }
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

const MerchItem = ({ item }) => (
  <Container>
    <Image src={item.img} />
    <Title>{item.title}</Title>
    <Description>{item.price}</Description>
  </Container>
);

MerchItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default MerchItem;
