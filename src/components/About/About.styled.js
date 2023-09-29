import styled from "styled-components";

// Estilos para los elementos del componente

export const Paragraph = styled.p`
  font-size: 1.5rem;
  grid-column: 1/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  max-width: 60%; /* Ajusta el ancho máximo según tu preferencia */
  overflow-wrap: break-word; /* Permite dividir palabras en líneas */
  margin-top: 20px; /* Agrega margen en la parte superior para separarlo hacia abajo */  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: 1rem;
    line-height: 1.2rem;
    padding-block: 0rem;
  }
`;

export const Educations = styled.section`
  grid-column: 2/7;
  display: flex;
  gap: 0.75rem;
  align-self: start;
  padding-top: 1rem;
`;

export const Text = styled.aside`
  grid-column: 2/7;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
  }
`;

export const SkillsWrapper = styled.aside`
  grid-column: 7 / -1; /* Cambiado a partir de la columna 7 hasta el final */
  width: 800px;
  margin-top:120px;
  height: 600px;
  @media screen and (max-width: 720px) {
    grid-column: 1 / -1; /* También ocupa todas las columnas en pantallas pequeñas */
  }
`;
