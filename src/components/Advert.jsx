import styled from 'styled-components';

const AdvertContainer = styled.div`
  margin-top: 4em;
  margin-bottom: 5em;
  display: flex;
  flex-wrap: wrap;
  padding: 0 3em;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 3.75em;
  border: 1px solid black;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 3.75em;
  background-color: #121212;
  border: 1px solid black;
  @media (max-width: 992px) {
    padding: 2em;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2.4em;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 0.5em;
  min-width: 255px;
`;
const Description = styled.p`
  color: #B8B8B8;
  font-size: 1.15em;
  letter-spacing: 0.05em;
`;

const Button = styled.button`
  border: none;
  padding 0.85em 2.25em;
  cursor: pointer;
  letter-spacing: 0.15em;
  font-size: 0.9em;
  margin-top: 2em;
`;

const Advert = () => (
  <AdvertContainer className="advert-cont">
    <ImageContainer className="image-cont" />
    <InfoContainer className="info-cont">
      <Title>Arsenal 1993/94 away adidas originals</Title>
      <Description>
        <strong>adidas Originals </strong>
        Arsenal away shirts, brand new with tags and available in multiple sizes.
      </Description>
      <Button>Shop Now</Button>
    </InfoContainer>
  </AdvertContainer>
);

export default Advert;
