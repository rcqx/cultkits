import styled from 'styled-components';

const Container = styled.div`
  height: 37px;
  padding: 0.18em;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  letter-spacing: 0.1em;
`;

const Announcement = () => (
  <Container>
    FREE SHIPPING within the UK when you spend £50 or more |
    Express Shipping to the USA from $19.95 | Click here for all FAQs -&gt;
  </Container>
);

export default Announcement;
