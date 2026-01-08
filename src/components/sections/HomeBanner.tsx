import React from "react";

export const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-indigo-50">
      <div className="2xl:mx-auto 2xl:container px-4 sm:px-6 xl:px-20 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-150 lg:min-h-175">
          
          {/* TEXTO */}
          <div className="py-16 lg:py-24 z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                ✨ Tecnología IA de última generación
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Viste tu estilo{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                  antes de comprar
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Prueba cómo te queda la ropa usando tu foto. Compra con confianza, 
                ahorra tiempo y elimina las dudas. El futuro de la moda está aquí.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#"
                  className="group px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-base font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Ver colección
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="#"
                  className="px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                >
                  Cómo funciona
                </a>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-500">Usuarios activos</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative h-125 lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
            <div className="absolute inset-0 lg:rounded-l-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://st3.depositphotos.com/4459661/18806/v/1600/depositphotos_188062370-stock-illustration-black-and-white-fashion-sale.jpg"
                alt="Fashion collection"
                className="w-full h-auto object-contain lg:object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent lg:bg-linear-to-r lg:from-black/20 lg:via-transparent lg:to-transparent"></div>
            </div>
            {/* Floating card decorativo */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AI
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Prueba virtual</div>
                  <div className="text-sm text-gray-500">100% precisa</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
    </section>
  );
};