import { useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const OuterContainer = styled.div`
  border-bottom: 0.25px solid lightgray;
`;

const Container = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  overflow: hidden;
  overflow-x: hidden;
  display: flex;
`;

const Arrow = styled.div`
  width: 1em;
  height: 1em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
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
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Button = styled.button`
  border: none;
  padding 0.75em 1.95em;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-size: 1em;
  background-color: #FFFFFF;
`;

const ControllerContainer = styled.div`
  height: 2.875em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideStateContainer = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
`;

const StateInput = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  height: 0.5em;
  width: 0.5em;
  background-color: ${(props) => props.bgColor}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  const images = ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4'];

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleClick('right');
    }

    if (diff < -5) {
      handleClick('left');
    }

    setTouchPosition(null);
  };

  return (
    <OuterContainer>
      <Container>
        <Wrapper
          slideIndex={slideIndex}
          className="slides-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Slide id="slide1" className="slide">
            <Button>SHOP ALL ENGLAND</Button>
          </Slide>
          <Slide id="slide2" className="slide">
            <Button>SHOP ALL NEW IN</Button>
          </Slide>
          <Slide id="slide3" className="slide">
            <Button>SHOP ALL INTERNATIONAL</Button>
          </Slide>
          <Slide id="slide4" className="slide">
            <Button>&apos;98 DREAMERS COLLECTION</Button>
          </Slide>
        </Wrapper>
      </Container>
      <ControllerContainer style={{ position: 'relative' }}>
        <Arrow direction="left" onClick={() => handleClick('left')} style={{ paddingRight: '1.5em' }}>
          <KeyboardArrowLeft />
        </Arrow>
        <SlideStateContainer>
          {images.map((slide, index) => (
            <StateInput key={Math.random()} bgColor={index === slideIndex ? 'black' : ''} />
          ))}
        </SlideStateContainer>
        <Arrow direction="right" onClick={() => handleClick('right')} style={{ paddingLeft: '1.5em' }}>
          <KeyboardArrowRight />
        </Arrow>
      </ControllerContainer>
    </OuterContainer>
  );
};

export default Slider;
