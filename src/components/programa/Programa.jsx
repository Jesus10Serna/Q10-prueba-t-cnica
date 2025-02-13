import React from "react";
import PartnerImage from "../../assets/ELEMENTO 7.webp";

const Programa = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Elementos decorativos del Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Programa Partners{" "}
                <span className="text-blue-600 inline-block">Q10</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Lidera el cambio en la educación y aumenta tus ingresos.
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Obtén excelentes oportunidades de comisionar vendiendo el software
              educativo líder en Latinoamérica.
            </p>

            <div className="pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200">
                ¡Afíliate ahora!
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Contenedor de imagenes */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-2xl transform rotate-3"></div>
              {/* Imagen */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-300">
                <img
                  src={PartnerImage}
                  alt="Programa Partners Q10"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programa;
