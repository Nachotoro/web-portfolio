
import React from "react";
import '../styles/title-projects.css'; // Ruta corregida
import FlowerIconImage from '../assets/flower.png'; // Importar la imagen como módulo

const FlowerIcon = () => (
  <img src={FlowerIconImage} alt="Flower Icon" />
);

function TitleProjects() {
  return (
    <div className="title-projects">
      <FlowerIcon />
      <h2>PROJECTS</h2>
      <FlowerIcon />
    </div>
  );
}

export default TitleProjects;


