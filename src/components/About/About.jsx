import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { yellow,red,green, blue ,pink} from "../utils/index";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import sos from "../utils/logoOG3.png";
import ef from "../utils/EF1.jpg"
import udemy from "../utils/udemy2.png"
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
display:flex;
align-items:center;
justify-content:center;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap:20px;
 margin-top: 180px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);

  return (
    <Section>
      <Container>
        <div ref={ref}>
          <Left>
            <Text>
              <Educations>
                {/* Agrega aquí los elementos de Educations si es necesario */}
              </Educations>
            </Text>
          </Left>

          <Right>
            <Text>

                 <Title>Studies ...</Title>
                 <Paragraph>
                 I'm a  programmer, who is always looking for new challenges to improve myself, also a team player, who is always ready to learn new things and help others.

        
          </Paragraph>
            </Text>
         
            <Educations>
               <AboutItem
              color={pink}
              active
              data={{
                title: "Full Stack Web Developer",
                p: "SoyHnery (2023)",
                image:sos,
              }}
            />
             <AboutItem
              color={blue}
              data={{
                title: "React developer",
                p: "Udemy (2023)",
                image:udemy,

              }}
            />  
            <AboutItem
              color={yellow}
              data={{
                title: "EF ENGLISH TEST",
                p: "C2",
                image:ef,

              }}
            />  
          
                {/* Agrega aquí los elementos de Educations si es necesario */}
              </Educations>
          
          </Right>
        </div>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Container>
    </Section>
  );
};

export default About;
