import { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const OuterContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  padding-left: 1em;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  display: flex;
  margin: 0.5em;
`;

const SlidesContainer = styled.div`
  display: flex;
`;

const Slide = styled.div`
  width: 92vw;
`;

const Card = styled.div`
  margin-right: 0.25em;
`;

const Description = styled.div`
  padding: 1.56em;
  display: flex; 
  background-color: white;
  align-items: center;
`;

const Slider2 = () => {
  const [touchPosition, setTouchPosition] = useState(null);

  return (
    <OuterContainer>
      <Container>
        <SlidesContainer className="slider-cont">
          <Card className="slider-card">
            <Slide id="ad1" />
            <Description>
              <p style={{ marginTop: '1em', marginRight: '0.5em' }}>Sign up now and get 10% OFF</p>
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
    </OuterContainer >
  );
}
export default Slider2;
