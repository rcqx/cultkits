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
display: ${(props) => props.show === false && 'none'};
width: 200px;
padding: 1em 0;
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
font-size: 1em;
letter-spacing: 0.05em;
font-weight: 400;
color: #505050;
display: flex; 
justify-content: start;
cursor: pointer;
padding: 0.25em 1em;
text-align: left;
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
  const [showClubs, setShowClubs] = useState(false);
  const [international, setInternational] = useState(false);
  const handleClick = (state, setState) => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <List>
      <ListItem>
        <Anchor href="https://www.cultkits.com/collections/new-in">NEW IN</Anchor>
      </ListItem>

      <ListTitle onClick={() => handleClick(showClubs, setShowClubs)}>
        <div style={{ display: 'flex' }}>
          CLUBS
          <KeyboardArrowDown fontSize="small" />
        </div>
        <InnerList show={showClubs}>
          <InnerListItem>
            Premier League
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Scottish Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Other UK Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Italian Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Spanish Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            German Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            French Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
        </InnerList>
      </ListTitle>

      <ListTitle onClick={() => handleClick(international, setInternational)}>
        <div style={{ display: 'flex' }}>
          INTERNATIONAL
          <KeyboardArrowDown fontSize="small" />
        </div>
        <InnerList show={international}>
          <InnerListItem>
            Premier League
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Scottish Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Other UK Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Italian Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Spanish Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            German Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            French Clubs
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
        </InnerList>
      </ListTitle>

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
};

export default NavList;
