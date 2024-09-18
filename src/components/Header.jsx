import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mi Sitio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:underline">Inicio</a>
          </li>
          <li>
            <a href="#about" className="hover:underline">Acerca </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">Servicios</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;