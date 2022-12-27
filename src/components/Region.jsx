import {
  Payment,
  Contactless,
  AccountBalance,
  CardGiftcard,
  AddShoppingCart,
  CardMembership,
  CreditCard,
  LocalAtm,
  LocalMall,
  LocalConvenienceStore,
} from '@material-ui/icons';
import styled from 'styled-components';
import { regions } from '../data';

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20em;

  @media (min-width: 768px) {
    flex-direction: row;
    border: 1px solid red;
    justify-content: space-between;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  background-color: black;
  width: 41%;
`;

const Label = styled.label`
  color: gray;
  margin-bottom: 0.5em; 
`;

const Select = styled.select`
  background-color: black; 
  color: white;
  padding: 0.85em;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin-top: 3em;
`;

const Cr = styled.p`
  font-size: 0.65em;
  color: white;
  margin-top: 2em;
`;

const RegionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

const Region = () => (
  <Container>
    <SelectContainer>
      <Label htmlFor="region">
        Country/region
      </Label>
      <Select id="region">
        {regions.map((item) => (
          <option key={item.id} style={{ padding: '0.85em' }} label={item.region} />
        ))}
      </Select>
    </SelectContainer>
    <RegionRight>
      <PaymentsContainer>
        <Payment fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <Contactless fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <AccountBalance fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <CardGiftcard fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <AddShoppingCart fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <CardMembership fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <CreditCard fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <LocalAtm fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <LocalMall fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
        <LocalConvenienceStore fontSize="large" style={{ color: 'white', margin: '0.2em' }} />
      </PaymentsContainer>
      <Cr>
        © 2022, Cult Kits
      </Cr>
    </RegionRight>
  </Container>
);

export default Region;
