import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2em;
  margin: 3.125em 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.25em;
  font-weight: 400;
  letter-spacing: 0.025em;
  margin-bottom: 1em;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5em;
  color: #404040;
  letter-spacing: 0.05em;
`;

const Welcome = () => (
  <Container>
    <Title>
      Welcome to Cult Kits ~ the home of vintage football shirts.
    </Title>
    <Description>
      We stock thousands of vintage jerseys, along with unique bench, training and outer wear.
      You’ll find retro football shirts, vintage kits and classic football shirts from teams
      all over the world. Our website is a destination for football fans to find their favourite
      kit - from the super-rare vintage to modern day clearance - or just to browse the collection
      and wallow in some nostalgia. The shirts on our site are not retro reproductions or fakes but
      instead are rare, original and classic shirts. Our range includes all the big clubs - from
      Manchester United to Millwall, Barcelona to Birmingham, AC Milan to Arsenal. And there are
      loads of international classics to tempt you, too, including England, Spain, France, Brazil
      and Germany. You won’t only find classic football shirts on our site but also training kits,
      tracksuits and boots. We have a constant supply of vintage shirts so keep an eye on our new
      arrivals pages to make sure you don’t miss out.
    </Description>
  </Container>
);

export default Welcome;
