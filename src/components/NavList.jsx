import styled from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';

const List = styled.ul`
  heigth: 90vh;
  display: none;
  justify-content: center;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin: 10px 12px;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  font-weight: 400;
  color: #505050;
  display: flex; 
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NavList = () => (
  <List>
    <ListItem>NEW IN</ListItem>
    <ListItem>
      CLUBS
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem>
      INTERNATIONAL
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem style={{ color: '#FF1100' }}>
      CLEARANCE
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem>
      TRAINING
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem>
      HEROS
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem>
      OTHER PRODUCTS
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
    <ListItem>
      MERCHANDISE
      <KeyboardArrowDown fontSize="small" />
    </ListItem>
  </List>
);

export default NavList;
