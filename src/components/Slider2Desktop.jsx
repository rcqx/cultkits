import styled from 'styled-components';
import { ArrowRightAlt } from '@material-ui/icons';

const Container = styled.div`
  border: 2px solid red;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SlidesContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid blue;
  width: 100vw;
`;

const Card = styled.div`
  margin-right: 0.5em;
  width: 31%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid red;
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
    </SlidesContainer>
  </Container>
);

export default Slider2Desktop;
