import Hero from './components/Hero';
import Contact from './components/Contact';
import Who from './components/Who';
import Works from './components/Works';
import styled from 'styled-components';
import back from './img/bg.jpeg'
import About from "./components/About/About"
const Container = styled.div`
  height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior:smooth;
 overflow-y:auto;
 scrollbar-width:none;
 color:white;
 background:url(${back});
 &::-webkit-scrollbar {
  display: none;
 }
`;

function App() {
  return (
    <Container>
      <Hero />
         <About/> 
   <Works /> 
   <Contact />
    </Container>
  );
}

export default App;
