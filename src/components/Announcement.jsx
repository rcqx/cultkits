import styled from 'styled-components';

const Container = styled.div`
  height: 37px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  font-weight: bold;
`;

const Announcement = () => (
  <Container>
    FREE SHIPPING within the UK when you spend £50 or more |
    Express Shipping to the USA from $19.95 | Click here for all FAQs
  </Container>
);

export default Announcement;
