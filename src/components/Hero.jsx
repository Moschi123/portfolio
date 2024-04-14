import styled from 'styled-components';
import NavBar from './NavBar';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import franco from "./utils/noback.jpg"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

  @media only screen and (max-width:768px) {
    height:200vh;
  }
`;

const Container =styled.div`
  height:100vh;
  scroll-snap-align:center;
  width:1400px;
  display:flex;
  justify-content:space-between;

  @media only screen and (max-width:768px) {
    width:100%;
    flex-direction:column;
    align-items:center;

    justify-content:center;
  }
`;

const Left =styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px

@media only screen and (max-width:768px) {
  flex:1;
  align-items: center;
}
`;
const Title =styled.h1`
font-size:74px;

@media only screen and (max-width:768px) {
 text-align:center;
}
`;
const WhatWeDo =styled.div`
display:flex;
align-items:center;
gap:10px;
`;
const Line =styled.img`
height:5px;
`;
const Subtitle =styled.h2`
color:#da4ea2;
line-height: 1rem;
  padding-block: 1rem;
@media only screen and (max-width:768px) {
  padding:20px;
  text-align:center;
 }
`;
const Desc =styled.p`
font-size:24px;
color:lightgray;
line-height: 2rem;
  padding-block: 2rem;
@media only screen and (max-width:768px) {
 padding:20px;
 text-align:center;
}
`;
const Button =styled.button`
background-color:#da4ea2;
color:black;
& p {
  color: white;
}
font-weight:500;
width:100px;
padding:10px;
border: 2px solid ;
box-shadow: 2px 2px 0;
border-radius:6px;
cursor:pointer;
`;

const Right =styled.div`
flex:3;
position:relative;

@media only screen and (max-width:768px) {
  flex:1;
}
`;

const StyledImg=styled.img`
width:800px;
height:600px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
animation:animate 2s infinite ease alternate;
@media only screen and (max-width:768px) {
  width:400px;
height:400px;
}
@keyframes animate{
  to{
    transform: translateY(20px)
  }
}`

const  Hero =()=>{
    return(
        <Section>
    
       <Container>
        <Left>
          <Title>Franco Moschini</Title>
          <WhatWeDo>
            <Subtitle>Web Developer</Subtitle>
           
          </WhatWeDo>
         <Desc>
       Full Stack Developer with a passion for collaborative projects and innovative solutions. Skilled in Node.js, MongoDB, React.js, Redux Toolkit, and PostgreSQL. Strong background in agile methodologies, GIT, data structures, algorithms, . Proven ability to work effectively in teams, resilient in facing challenges, and deeply committed to delivering high-quality results.

            </Desc>
           
            </Left>
            
        <Right>

         <Canvas camera={{ fov:25,position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <Sphere args ={[1,100,200]} scale={1.2}>
          <MeshDistortMaterial 
          color="#3d1c56"
          attach="material"
          distort={0.5}
          speed={2}/>
          </Sphere>
         </Canvas>
         <StyledImg src={franco} alt="Descripción de la imagen" />
        </Right>
       </Container>
        </Section>
    )
}

export default Hero
