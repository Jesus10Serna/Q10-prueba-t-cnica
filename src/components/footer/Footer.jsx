import React from "react";
import BackgroundImage from "../../assets/ELEMENTO 1.webp";

const Footer = () => {
  return (
    <footer
      className="text-white py-12"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-7xl text-center md:text-left">
        {/* Logo y Titulo */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Programa Partners Q10
          </h2>
        </div>

        {/* Sección de links */}
        <div className="grid gap-8 md:grid-cols-4 text-sm mb-8">
          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/soporte" className="hover:underline">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:underline">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tutoriales" className="hover:underline">
                  Tutoriales
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terminos" className="hover:underline">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <ul className="space-y-2">
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

        {/* Seccion de Copyright */}
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} Q10 Partners. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
