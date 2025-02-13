import React from "react";
import elemento from "../../assets/ELEMENTO 3.webp";

const cards = [
  {
    id: 1,
    title: "Crecimiento económico",
    description:
      "Mejora tus ingresos y beneficios al aumentar tu alcance en nuevos mercados.",
    icon: () => (
      <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Red de contactos",
    description:
      "Crece tu comunidad profesional ofreciéndole a tus clientes soluciones líderes en gestión educativa.",
    icon: () => (
      <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Soporte especializado",
    description:
      "Obtén el respaldo de una empresa de talla internacional que impulsa tu crecimiento con herramientas y recursos de primera.",
    icon: () => (
      <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const PorQueSerPartner = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos del Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Sección del Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ¿Por qué ser un Partner Q10?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo puedes crecer junto al software educativo líder.
          </p>
        </div>

        {/* Grid de las cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon()}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de la imagen */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -skew-y-3 opacity-10 rounded-3xl" />
          <div className="relative p-8">
            <img
              src={elemento}
              alt="Partner Q10"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueSerPartner;
