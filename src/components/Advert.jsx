import styled from 'styled-components';

const AdvertContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.85em;
`;

const ImageContainer = styled.div`
  height: 12.12em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  background-color: #121212;
  border: 1px solid black;
  height: 22.5em;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5em;
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
  <AdvertContainer className="advert-cont">
    <ImageContainer>
      <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/1000-x-1000-arsenal-re-issues_535x.jpg?v=1670092337" />
    </ImageContainer>
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
