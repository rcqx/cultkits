import styled from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';
import { useState } from 'react';

const List = styled.ul`
  heigth: 90vh;
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const InnerList = styled.ul`
border: 1px solid #F5F5F5;
heigth: 90vh;
display: none;
width: 200px;
padding: 0;
flex-direction: column;
justify-content: center;
background-color: white;
position: absolute;
top: 2em;
left: -1em;
z-index: 2;
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
    &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const InnerListItem = styled.li`
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
  &:hover {
  color: black;
}
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
  font-weight: inherit;
`;

const ListTitle = styled.span`
  list-style: none;
  margin: 10px 12px;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  font-weight: 400;
  color: #505050;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
    &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const NavList = () => {
  const [showNavlist, setShowNavlist] = useState(false);
  const handleClick = (state) => {
    if (state === false) {
      setShowNavlist(true);
    } else {
      setShowNavlist(false);
    }
  };

  return (
    <List>
      <ListItem>
        <Anchor href="https://www.cultkits.com/collections/new-in">NEW IN</Anchor>
      </ListItem>

      <ListTitle onClick={() => handleClick(showNavlist)}>
        <div style={{ display: 'flex' }}>
          CLUBS
          <KeyboardArrowDown fontSize="small" />
        </div>
        <InnerList>
          <InnerListItem>Something</InnerListItem>
          <InnerListItem>Something</InnerListItem>
          <InnerListItem>Something</InnerListItem>
          <InnerListItem>Something</InnerListItem>
          <InnerListItem>Something</InnerListItem>
          <InnerListItem>Something</InnerListItem>
        </InnerList>
      </ListTitle>
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
    </List >
  );
};

export default NavList;
