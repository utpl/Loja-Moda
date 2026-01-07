import React from "react";

export const ProductsCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
        

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8 w-full">
            {/* Women */}
            <div className="relative group flex justify-center items-center h-full w-full">
              <img
                className="object-center object-cover h-full w-full"
                src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                alt="women-category"
              />
              <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white">
                Mujeres
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>

            {/* Shoes + Watches */}
            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                  alt="shoes-category"
                />
                <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white">
                  Calzado
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>

              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                  alt="watches-category"
                />
                <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white">
                  Relojes
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>

            {/* Accessories desktop */}
            <div className="relative group hidden lg:flex justify-center items-center h-full w-full">
              <img
                className="object-center object-cover h-full w-full"
                src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="accessories-category"
              />
              <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white">
                Accesorios
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
