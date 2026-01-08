import React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
  alt: string;
  gradient: string;
}

const CategoryCard = ({ title, image, alt, gradient }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-full min-h-75 cursor-pointer">
      <img
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        src={image}
        alt={alt}
      />
      <div className={`absolute inset-0 bg-linear-to-t ${gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h3>
        <button className="group/btn w-fit px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Ver colección
          <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Badge decorativo */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
          Nuevo
        </div>
      </div>
    </div>
  );
};

export const ProductsGrid = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-purple-50">
      <div className="2xl:mx-auto 2xl:container py-16 px-4 sm:px-6 xl:px-20 2xl:px-0">
        <div className="flex flex-col space-y-10">
          
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-2">
              ✨ Explora nuestras categorías
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Encuentra tu{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                estilo perfecto
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre las últimas tendencias en moda para cada ocasión
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            
            {/* Mujeres - Card grande */}
            <CategoryCard
              title="Mujeres"
              image="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
              alt="women-category"
              gradient="from-pink-500/80 via-purple-500/60 to-transparent"
            />

            {/* Columna con 2 cards */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <CategoryCard
                title="Calzado"
                image="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                alt="shoes-category"
                gradient="from-blue-500/80 via-indigo-500/60 to-transparent"
              />

              <CategoryCard
                title="Accesorios"
                image="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                alt="accessories-category"
                gradient="from-amber-500/80 via-orange-500/60 to-transparent"
              />
            </div>

            {/* Hombres - Card grande */}
            <CategoryCard
              title="Hombres"
              image="https://i.pinimg.com/736x/d7/55/26/d75526940bed61f892dd098c6665ea78.jpg"
              alt="men-category"
              gradient="from-slate-600/80 via-gray-500/60 to-transparent"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                500+
              </div>
              <div className="text-sm text-gray-600 mt-1">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                50+
              </div>
              <div className="text-sm text-gray-600 mt-1">Marcas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                24/7
              </div>
              <div className="text-sm text-gray-600 mt-1">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                100%
              </div>
              <div className="text-sm text-gray-600 mt-1">Garantía</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};