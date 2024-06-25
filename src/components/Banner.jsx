import React from 'react';

const Banner = () => {
  return (
    <div className="banner" id="home">
      <div className="content">
        <h1>
          Hola, Soy Italo <br />
          un <div className="gradientText">
            <div className="job" data-job1="{Developer.}" data-job2="{FrondEnd.}"></div>
          </div>
        </h1>
        <p>
          Mi enfoque se basa en la fusión de código limpio y diseño cautivador, con el objetivo de ofrecer soluciones web innovadoras y memorables. Con un compromiso inquebrantable con la calidad y la eficiencia, estoy listo para dar vida a tu visión digital y llevarla al siguiente nivel.
        </p>
        <div className="find">
          <h3>Sígueme Aquí</h3>
          <ul>
            <li><a href="https://www.facebook.com/italoalessandro.cervantesprieto/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/italo-cervantes-prieto/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="avatar">
        <img src="images/avatar.png" alt="personaje" />
      </div>
    </div>
  );
};

export default Banner;