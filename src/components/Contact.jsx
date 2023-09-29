import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { yellow, blue, pink } from "../components/utils/index";

const Section = styled.div`
  height: 100vh;
  /* Corregido: backgroundColor */
  scroll-snap-align:center
`;

const Container = styled.div`
 width:100%;
 height:100%
 display:flex;
 justify-content:space-between;
 gap:50px
`;

const Left = styled.div`
flex:1;
display:flex;
margin-top:200px;
alig-items:center;
justify-content:center;
@media only screen and (max-width:768px){
  justify-content:center;
}

`;

const Title = styled.h1`
  font-weight:200;
`;
const Form = styled.form`
width:500px;

display:flex;
margin-top:200px;
flex-direction:column;
gap:25px;
@media only screen and (max-width:768px){
  width:300px;
}

`;
const Input = styled.input`
padding:20px;
background-color:lightgray;
border: 4px solid ;
box-shadow: 6px 6px 0;
border-radius:5px;
`;
const TextArea = styled.textarea`
padding:20px;
border: 4px solid ;
box-shadow: 6px 6px 0;
background-color:lightgray;
border-radius:5px;
`;
const Button = styled.button`
color:white;
border: 4px solid ;
box-shadow: 6px 6px 0;
background-color: ${(props) =>
  props.color ? props.color["60"] : pink["60"]};;
color: black;
& p {
  color: white;
}
border-radius: 10px;font-weight:bold;
cursor:pointer;
border-radius:5px;
padding:20px;
`;
const Desc = styled.div`
  flex: 1; /* Toma todo el espacio disponible */
  margin-left: 60px; /* Agrega un margen entre la imagen y la descripción */
  padding: 20px;
  border: 4px solid ;
  box-shadow: 6px 6px 0;
  background-color: ${(props) =>
    props.color ? props.color["60"] : pink["60"]};;
  color: black;
  border-radius: 10px;
  opacity: 0; /* Inicialmente oculta la descripción */
  & p {
    color: white;
  }
  animation: appear 2s ease forwards; /* Agrega animación de aparición */
  @keyframes appear {
    to {
      opacity: 1; /* Hace que la descripción aparezca gradualmente */
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px; /* Agrega espacio en la parte superior en pantallas pequeñas */
  }
`;

const Right = styled.div`
flex:1;
margin-top:100px;
@media only screen and (max-width:768px){
  display:none
}

`;


const  Contact =()=>{
  
  const ref=useRef()

const [sucess,setSucess]=useState(null)

const handleSubmit =e=>{
  e.preventDefault()
  emailjs.sendForm('service_m53icwo', 'template_swif57a', ref.current, 'yf9QCsfePP0cJ6oPp')
  .then((result) => {
      console.log(result.text);
      setSucess(true)
  }, (error) => {
      console.log(error.text);
      setSucess(false)
  });
}
    return(
        <Section>
       <Container>
        <Left>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>
 Contact Me     
          </Title>
          <Input placeholder="Name" name="name"/>    
          <Input placeholder="Email" name="email"/>
          <TextArea placeholder="Write your message" name="message" rows={10}/>
          <Button type="submit"><p>Send</p>
          </Button>
          {
            sucess && "Your message has been sent."
          }
        </Form>
        </Left>
        <Right>
       
          </Right>
       </Container>
        </Section>
    )
}

export default Contact