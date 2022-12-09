import styled from 'styled-components';
import VariousCard from './VariousCard';
import { various } from '../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Various = () => (
  <Container>
    {various.map((card) => (
      <VariousCard key={card.id} card={card} />
    ))}
  </Container>
);

export default Various;
