import React from 'react';

const Footer = () => {
  return (
    <div className="conta">
      <h1 className="title">Mis Redes Sociales</h1>
      <ul className="contact">
        <li><a href="https://www.facebook.com/italoalessandro.cervantesprieto/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/italo-cervantes-prieto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </div>
  );
};

export default Footer;