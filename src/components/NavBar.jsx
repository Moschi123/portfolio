import React from 'react'; // Asegúrate de importar React si aún no está importado
import styled from "styled-components";
import searchIcon from '../img/search.png';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width:768px) {
    width:100%
  }
`;

const Container = styled.div`
  width: 1400px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 0px;

  @media only screen and (max-width:768px) {
    width:100%
    padding:10px
  }
`;

const Links = styled.div`
display: flex;
align-items: center;
gap:50px`;
const Icons = styled.div`
display:flex;
align-items:center;
gap:20px`;
const Icon = styled.img`
width:20px;
cursor :pointer`;
const List = styled.ul`
display:flex;
gap:20px;
list-style:none`;
const ListItem = styled.li``;
const Button = styled.button`
width:100px;
padding:10px;
background-color:#da4ea2;
color:white;
order:none;
border-radius:5px;
cursor:pointer;`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>

        <Icons>
          {/* Usa la variable importada para el ícono */}
          <Icon src={searchIcon} alt="Search Icon" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavBar;
