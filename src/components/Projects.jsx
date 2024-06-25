import React from 'react';

const projects = [
  { img: 'images/appcip.png', name: 'App CIP LA LIBERTAD' },
  { img: 'images/restaurant.jpg', name: 'App para restaurante' },
  { img: 'images/intranet.jpg', name: 'Intranet Web' },
  { img: 'images/sedalib.png', name: 'Website Sedalib' },
  { img: 'images/cms.png', name: 'CMS Gestor de Contenidos' },
  { img: 'images/chatbot.png', name: 'App Chatbot' }
];

const Projects = () => {
  return (
    <div id="project">
      <h1 className="title">Mis Proyectos</h1>
      <div className="listProyect">
        {projects.map(project => (
          <div className="item" key={project.name}>
            <img src={project.img} alt={project.name} />
            <div className="name">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;