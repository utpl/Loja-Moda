import React from "react";

export const Banner = () => {
  return (
    <div className="flex bg-white" style={{ height: "600px" }}>
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            Viste tu estilo antes de  <span className="text-indigo-600">comprar</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Prueba cómo te queda la ropa usando tu foto. Compra seguro, rápido y sin dudas. Con la IA es posible.
          </p>

          <div className="flex justify-center lg:justify-start mt-6">
            <a
              className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
              href="#"
            >
              Ver colección
            </a>
            <a
              className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
              href="#"
            >
             Cómo funciona
            </a>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block lg:w-1/2"
        style={{
          clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1352&q=80')",
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};
