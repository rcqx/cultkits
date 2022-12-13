import styled from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';
import { useState, useEffect } from 'react';

const List = styled.ul`
  heigth: 90vh;
  display: none;
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

const ListItemDisable = styled.li`
  list-style: none;
  margin: 10px 12px;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  font-weight: 400;
  color: gray;
  display: flex; 
  justify-content: center;
  align-items: center;
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
  const [clearance, setClear] = useState(false);
  const handleClickClubs = (state) => {
    if (state === false) {
      setShowClubs(true);
      setInternational(false);
      setClear(false);
    } else {
      setShowClubs(false);
    }
  };
  const handleClickInt = (state) => {
    if (state === false) {
      setInternational(true);
      setShowClubs(false);
      setClear(false);
    } else {
      setInternational(false);
    }
  };
  const handleClickClear = (state) => {
    if (state === false) {
      setClear(true);
      setInternational(false);
      setShowClubs(false);
    } else {
      setClear(false);
    }
  };

  // Close navlink when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('ul')) return;
      setShowClubs(false);
      setInternational(false);
      setClear(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <List>
      <ListItem>
        <Anchor href="https://www.cultkits.com/collections/new-in">NEW IN</Anchor>
      </ListItem>

      <ListTitle onClick={() => handleClickClubs(showClubs)}>
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

      <ListTitle onClick={() => handleClickInt(international)}>
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

      <ListTitle onClick={() => handleClickClear(clearance)}>
        <div style={{ display: 'flex', color: '#FF1100' }}>
          CLEARANCE
          <KeyboardArrowDown fontSize="small" />
        </div>
        <InnerList show={clearance}>
          <InnerListItem>
            New Clearance
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
          <InnerListItem>
            Vintage Sale
            <KeyboardArrowDown fontSize="small" style={{ padding: '0.1em 0.25em' }} />
          </InnerListItem>
        </InnerList>
      </ListTitle>

      <ListItemDisable>
        TRAINING
        <KeyboardArrowDown fontSize="small" />
      </ListItemDisable>
      <ListItemDisable>
        HEROS
        <KeyboardArrowDown fontSize="small" />
      </ListItemDisable>
      <ListItemDisable>
        OTHER PRODUCTS
        <KeyboardArrowDown fontSize="small" />
      </ListItemDisable>
      <ListItemDisable>
        MERCHANDISE
        <KeyboardArrowDown fontSize="small" />
      </ListItemDisable>
    </List>
  );
};

export default NavList;
