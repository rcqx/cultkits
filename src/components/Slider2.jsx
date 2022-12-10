import { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const OuterContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #F5F5F5;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  padding-left: 0.85em;
`;

const SlidesContainer = styled.div`
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -92}vw);
`;

const Slide = styled.div`
  width: 100%;
`;

const Card = styled.div`
  margin-right: 0.5em;
  width: 91vw;
  display: flex;
  flex-direction: column; 
`;

const Description = styled.div`
  padding: 1.56em;
  display: flex; 
  background-color: white;
  align-items: center;
`;

const Slider2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

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
        <SlidesContainer
          className="slider-cont"
          slideIndex={slideIndex}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Card className="slider-card">
            <Slide id="ad1" />
            <Description>
              <p style={{
                marginTop: '1em',
                marginRight: '0.5em',
                fontSize: '0.95em',
                letterSpacing: '0.05em',
              }}
              >
                Sign up now and get 10% OFF
              </p>
              <ArrowRightAlt style={{ paddingTop: '0.75em' }} />
            </Description>
          </Card>
          <Card className="slider-card">
            <Slide id="ad2" />
            <Description>
              <p style={{ marginTop: '1em', marginRight: '0.5em' }}>Sign up now and get 10% OFF</p>
              <ArrowRightAlt style={{ paddingTop: '0.75em' }} />
            </Description>
          </Card>
          <Card className="slider-card">
            <Slide id="ad3" />
            <Description>
              <p style={{ marginTop: '1em', marginRight: '0.5em' }}>Sign up now and get 10% OFF</p>
              <ArrowRightAlt style={{ paddingTop: '0.75em' }} />
            </Description>
          </Card>
        </SlidesContainer>
      </Container>
    </OuterContainer>
  );
};
export default Slider2;
