import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const Card = styled.div`
  width: 93%;
  margin-bottom: 0.75em;
  cursor: pointer;
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

const VariousCard = ({ image, title }) => (
  <Card>
    <Image src={image} />
    <Title>
      {title}
      <ArrowRightAlt style={{ paddingTop: '0.25em' }} />
    </Title>
  </Card>
);

export default VariousCard;
