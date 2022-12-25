import { useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const ControllerContainer = styled.div`
  height: 2.875em;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none; 
  }
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

const Advert2Controller = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  const images = ['placeholder1', 'placeholder2', 'placeholder3'];

  return (
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
  );
};

export default Advert2Controller;
