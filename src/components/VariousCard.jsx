import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 93%;
  margin-bottom: 0.75em;
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: 30%;
    margin: 0.25em 0.25em;
  }
`;

const Image = styled.img`
  width: 100%;
  display: flex;
`;

const Title = styled.p`
  font-size: 1.15em;
  padding: 0.8em;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #EBEBEB;
  letter-spacing: 0.05em;
`;

const VariousCard = ({ card }) => (
  <Card>
    <Image src={card.img} />
    <Title>
      {card.title}
      <ArrowRightAlt style={{ paddingTop: '0.25em' }} />
    </Title>
  </Card>
);

VariousCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default VariousCard;
