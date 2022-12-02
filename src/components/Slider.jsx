import styled from 'styled-components';
import { ArrowLeftOutlined } from '@material-ui/icons';

const Container = styled.div`
  width: 100%;
  height: 650px;
  border: 2px solid red;
  display: flex;
`;

const Arrow = styled.div`
  border: 2px solid red;
`;

const Slider = () => (
  <Container>
    <Arrow>
      <ArrowLeftOutlined />
    </Arrow>
  </Container>
);

export default Slider;
