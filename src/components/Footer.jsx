import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>
          <p>Email: contacto@misitioweb.com</p>
          <p>Teléfono: +52 55 1234 5678</p>
          <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
        </div>

        {/* Enlaces a redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center mt-6">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
