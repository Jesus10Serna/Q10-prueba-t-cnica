import React from "react";
import asociate from "../../assets/ELEMENTO 5.webp";

const Asociarte = () => {
  const options = [
    {
      id: 1,
      title: "Refiere",
      description: (
        <>
          Gana comisiones refiriendo a Q10.
          <br />
          <strong>¡Nosotros nos encargamos del resto!</strong>
        </>
      ),
      benefits: [
        "Obtén el 15% de comisión por cada venta efectiva.",
        "Sin costo de suscripción.",
      ],
      price: null,
      button: "¡Afíliate ahora!",
    },
    {
      id: 2,
      title: "Revende",
      description: (
        <>
          Aumenta tus ingresos y adquiere descuentos, beneficios e incentivos
          exclusivos.
        </>
      ),
      benefits: [
        "30% de descuento en la plataforma Q10 para ventas nuevas y renovaciones.",
        "Descuentos adicionales por volumen de facturación.",
        "Acompañamiento y capacitación personalizados.",
        "Administración de la facturación del cliente final.",
      ],
      price: "99 USD / Año",
      button: "¡Afíliate ahora!",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Sección del Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formas de asociarte
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el camino ideal para ti y tu negocio.
          </p>
        </div>

        {/* Grid de las Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-20">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  {option.description}
                </p>
                <ul className="text-gray-600 mb-8 space-y-3 flex-grow">
                  {option.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 text-xl">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {option.price && (
                  <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    {option.price}
                  </p>
                )}
                <button className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                  {option.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de la imagen */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 relative">
            <div className="absolute inset-0 -m-4 border-2 border-blue-200 rounded-2xl transform rotate-1"></div>
            <img
              src={asociate}
              alt="Programa de asociados"
              className="relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asociarte;
