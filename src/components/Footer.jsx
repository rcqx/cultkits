import styled from 'styled-components';

const Container = styled.div`
  padding: 50px 40px 30px;
  background-color: black;
`;

const List = styled.ul`
  color: white;
  padding: 0;
  margin: 0;
`;

const Title = styled.p`
  margin-bottom: 1.5em;
  fon-size: 1.15em;
`;

const Item = styled.li`
  list-style: none;
  margin-bottom: 1.25em;
  font-size: 0.95em;
  color: gray;
`;

const TPContainer = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  margin-bottom: 40px;
`;

const Trustpilot = styled.img`
width: 50%;
`;

const Footer = () => (
  <Container>
    <List style={{ marginBottom: '3em' }}>
      <Title>SUPPORT</Title>
      <Item>FAQ&apos;s</Item>
      <Item>PRIVACY & COOKIES</Item>
      <Item>RETURNS</Item>
    </List>
    <List style={{ marginBottom: '3em' }}>
      <Title>USEFUL LINKS</Title>
      <Item>NEWS & ARTICLES</Item>
      <Item>SUBSCRIBE TO OUR EMAIL</Item>
      <Item>ABOUT US</Item>
      <Item>SELL SHIRTS</Item>
      <Item>CONTACT US</Item>
    </List>
    <List style={{ marginBottom: '3em' }}>
      <Title>CULT KITS</Title>
      <Item>Unit 3, The Shaftesbury Centre, Percy Streetm, Swindon, SN2 2AZ, United Kingdom</Item>
      <Item>
        VAT No. GB 24045871700
        <br />
        Registered Company 10124704.
      </Item>
    </List>
    <TPContainer>
      <Trustpilot src="https://cdn.shopify.com/s/files/1/0622/3691/7987/files/Trust-pilot-rating-site-promo-4_140x@2x.png?v=1664819133" />
    </TPContainer>
  </Container>
);

export default Footer;
