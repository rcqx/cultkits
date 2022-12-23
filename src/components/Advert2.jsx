import styled from 'styled-components';

const AdvertContainer = styled.div`
  margin: 3.125em 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0.85em;
  margin-bottom: 3em;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 46%;
  }
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
  }

  @media (min-width: 768px) {
    scale: 135%;
  }
`;

const InfoContainer = styled.div`
  background-color: #121212;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em 2.5em;

  @media (min-width: 768px) {
    width: 43%;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 1.95em;
  font-weight: 400;
  letter-spacing: 0.025em;
  margin: 0;
  padding: 0;
  line-height: 1.25em;
  margin-bottom: 0.5em;
  text-align: center;
`;
const Description = styled.p`
  color: #B8B8B8;
  font-size: 0.95em;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-weight: 400;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding 0.65em 1.85em;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-size: 1em;
  margin-top: 2em;
`;

const Advert2 = () => (
  <AdvertContainer className="advert-cont">
    <ImageContainer>
      <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Oakland_Roots-header-2_535x.jpg?v=1670498616" />
    </ImageContainer>
    <InfoContainer className="info-cont">
      <Title>Oakland Roots to produce kit dedicated to Black Panthers</Title>
      <Description>
        Catalonian kit masters
        <em>
          <strong>
            Meyba
          </strong>
        </em>
        have partnered with
        <em>
          <strong>
            Oakland Roots
          </strong>
        </em>
        and their sister club Oakland Soul to provide their new kit.
      </Description>
      <div>
        <Button>Read More on VotC</Button>
      </div>
    </InfoContainer>
  </AdvertContainer>
);

export default Advert2;
