import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
`;

const Offer = styled.span`
`;

const Announcement = () => (
  <Container className="container">
    <Offer className="offer">
      FREE SHIPPING within the UK when you spend £50 or more |
      Express Shipping to the USA from $19.95 | Click here for all FAQs -&gt;
    </Offer>
  </Container>
);

export default Announcement;
