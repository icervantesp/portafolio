import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    subject: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, subject, mensaje } = formData;
    const numeroTelefono = '979107637';
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\nAsunto: ${subject}\nMensaje: ${mensaje}`)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="contact-form">
      <h2>Formulario de Contacto</h2>
      <form id="whatsappForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto:</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
            <option value="" disabled>Seleccione un asunto</option>
            <option value="consulta">Consulta</option>
            <option value="soporte">Soporte</option>
            <option value="comentarios">Comentarios</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Enviar a WhatsApp</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;