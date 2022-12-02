import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Container = styled.div`
  width: 100%;
  height: 650px;
  border: 2px solid red;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 3em;
  height: 3em;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

// const InfoContainer = styled.div`
//   flex: 1;
// `;

const Image = styled.img`
  height: 80%;
  scale: 110%;
  position: relative;
  top: -130px;
`;

const Slider = () => (
  <Container>
    <Arrow direction="left">
      <ArrowLeftOutlined />
    </Arrow>
    <Wrapper>
      <Slide>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/2160-x-1440-NEW-IN-Header_1500x.jpg?v=1669404748" />
        </ImgContainer>
      </Slide>
    </Wrapper>
    <Arrow direction="right">
      <ArrowRightOutlined />
    </Arrow>
  </Container>
);

export default Slider;
