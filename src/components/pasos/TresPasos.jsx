import React from "react";

const steps = [
  {
    id: 1,
    title: "Infórmate",
    description: "Ponte en contacto con nosotros e incrementa tus ingresos.",
  },
  {
    id: 2,
    title: "Capacítate",
    description: "Conoce a Q10 y desarrolla habilidades para venderlo.",
  },
  {
    id: 3,
    title: "Gana",
    description:
      "Obtén tu insignia Partner y gana por ventas y/o renovaciones.",
  },
];

const TresPasos = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Sección Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sé uno de nuestros Partners Q10 en solo{" "}
            <span className="text-blue-600">3 pasos</span>
          </h2>
        </div>

        {/* Grid de los pasos */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-3 relative">
          {/* Linea de conexion para desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 transform -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group z-10 flex flex-col items-center"
            >
              {/* pasos de las cards */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                {/* pasos de los numeros */}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>

                {/* Contenido de los pasos */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TresPasos;
