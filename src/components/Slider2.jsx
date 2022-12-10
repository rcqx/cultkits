import styled from 'styled-components';

const OuterContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
`;

const Container = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  // overflow: hidden;
  display: flex;
  margin: 0.5em;
`;

const SlidesContainer = styled.div`
  display: flex;
  padding-left: 0.5em;
`;

const Slide = styled.div`
  width: 92vw;
  margin-right: 0.25em;
`;

const Slider2 = () => (
  <OuterContainer>
    <Container>
      <SlidesContainer>
        <Slide id="ad1" />
        <Slide id="ad2" />
        <Slide id="ad3" />
      </SlidesContainer>
    </Container>
  </OuterContainer>
);

export default Slider2;
