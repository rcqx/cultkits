import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-bottom: 2.5em;
  border-bottom: 1px solid lightgray;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

const Button = styled.button`
  border: none;
  padding 1em 2.25em;
  cursor: pointer;
  letter-spacing: 0.15em;
  margin-bottom: 4em;
  font-size: 0.9em;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide id="slide1">
          <Button>SHOP ALL ENGLAND</Button>
        </Slide>
        <Slide id="slide2">
          <Button>SHOP ALL NEW IN</Button>
        </Slide>
        <Slide id="slide3">
          <Button>SHOP ALL INTERNATIONAL</Button>
        </Slide>
        <Slide id="slide4">
          <Button>&apos;98 DREAMERS COLLECTION</Button>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
