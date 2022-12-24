import { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const OuterContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #F5F5F5;
  padding: 1em 0;
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
  border: 2px solid blue;

  @media (min-width: 481px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
    height: 574px;
  }

  @media (min-width: 992px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

// const Slide = styled.div`
//   width: 100%;
// `;

const Card = styled.div`
  margin-right: 0.5em;
  width: 91vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid red;

  @media (min-width: 992px) {
    width: 31%;
  }
`;

const Image = styled.img`
  border: 1px solid red;
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
            <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Sign-up-2.jpg?v=1645458576" alt="ad1" />
            {/* <Slide id="ad1" /> */}
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
            {/* <Slide id="ad2" /> */}
            <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/New-pod-s3-ep4.jpg?v=1669822673" alt="ad2" />
            <Description>
              <p style={{ marginTop: '1em', marginRight: '0.5em' }}>Sign up now and get 10% OFF</p>
              <ArrowRightAlt style={{ paddingTop: '0.75em' }} />
            </Description>
          </Card>
          <Card className="slider-card">
            <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Gift-cards-promo-1.jpg?v=1645133081" alt="ad3" />
            {/* <Slide id="ad3" /> */}
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
