import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const Container = styled.div`
  display: none;
  background-color: whitesmoke;
  padding: 4.5em 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SlidesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 98vw;
`;

const Card = styled.div`
  margin-right: 0.5em;
  width: 31.25%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img``;

const Description = styled.div`
  padding: 1.56em;
  display: flex; 
  background-color: white;
  align-items: center;
`;

const Slider2Desktop = () => (
  <Container>
    <SlidesContainer>
      <Card>
        <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Sign-up-2.jpg?v=1645458576" alt="ad1" />
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
      <Card>
        <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/New-pod-s3-ep4.jpg?v=1669822673" alt="ad1" />
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
      <Card>
        <Image src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Gift-cards-promo-1.jpg?v=1645133081" alt="ad1" />
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
    </SlidesContainer>
  </Container>
);

export default Slider2Desktop;
