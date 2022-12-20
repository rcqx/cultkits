import styled from 'styled-components';

const AdvertContainer = styled.div`
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  padding: 0 0.85em;
  // min-height: 28.62em;
  border: 1px solid red;

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 194px;

  @media (min-width: 768px){
    height: 555px;
    width: 50%;
    border: 1px solid blue; 
  }
`;

const InfoContainer = styled.div`
  background-color: #121212;
  height: 22.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  height: auto;
  
  @media (min-width: 768px){
    height: 555px;
    width: 50%;
    border: 1px solid blue; 
  }
`;

const Title = styled.p`
  color: white;
  font-size: 1.95em;
  font-weight: 400;
  letter-spacing: 0.025em;
  margin: 0;
  padding: 0;
  min-width: 255px;
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;
const Description = styled.p`
  color: #B8B8B8;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-weight: 400;
  `;

const Button = styled.button`
  border: none;
  padding 0.65em 1.85em;
  cursor: pointer;
  letter-spacing: 0.15em;
  font-size: 1em;
  margin-top: 2em;
`;

const Advert = () => (
  <AdvertContainer>
    <ImageContainer id="advert" />
    <InfoContainer className="info-cont">
      <Title>Arsenal 1993/94 away adidas originals</Title>
      <Description>
        <strong>adidas Originals </strong>
        Arsenal away shirts, brand new with tags and available in multiple sizes.
      </Description>
      <div>
        <Button>Shop Now</Button>
      </div>
    </InfoContainer>
  </AdvertContainer>
);

export default Advert;
