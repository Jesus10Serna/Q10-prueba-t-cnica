import React from "react";
import PartnerImage from "../../assets/ELEMENTO 8.webp";

const QuienPuedeSerPartner = () => {
  const partnerTypes = [
    {
      title: "Empresas de Tecnología",
      description:
        "TI, Desarrollo, Hardware, Software y Soluciones Tecnológicas.",
    },
    {
      title: "Consultores Independientes",
      description: "De Tecnología y/o Educación.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Seccion de imagenes */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-2xl transform -rotate-2"></div>
              {/* Imagen */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={PartnerImage}
                  alt="¿Quién puede ser Partner Q10?"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Seccion de contenido */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              ¿Quién puede ser Partner Q10?
            </h2>

            <div className="space-y-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienPuedeSerPartner;
