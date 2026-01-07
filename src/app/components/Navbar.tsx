export const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a className="text-xl sm:text-2xl lg:text-3xl font-bold hover:text-gray-300 transition-colors" href="#">
          Logo Here
        </a>
        
        {/* MENU CENTRO - Desktop */}
        <ul className="hidden md:flex font-semibold space-x-4 lg:space-x-8 xl:space-x-12 text-sm lg:text-base">
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#">
              Category
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300 transition-colors" href="#">
              Contact
            </a>
          </li>
        </ul>
        
        {/* ICONOS DERECHA */}
        <div className="flex space-x-3 sm:space-x-4 lg:space-x-5 items-center text-lg sm:text-xl">
          
    
          
          {/* CARRITO */}
          <a 
            className="relative hover:text-gray-300 transition-colors hover:scale-110 transform duration-200" 
            href="#"
            aria-label="Carrito de compras"
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </a>
          
          {/* USUARIO */}
          <a 
            className="hover:text-gray-300 transition-colors hover:scale-110 transform duration-200" 
            href="#"
            aria-label="Perfil de usuario"
          >
            👤
          </a>
          
          {/* MENU HAMBURGUESA - Mobile */}
          <button 
            className="md:hidden text-2xl hover:text-gray-300 transition-colors"
            aria-label="Menú"
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* MENU MOBILE - Desplegable (puedes agregar estado para mostrar/ocultar) */}
      <div className="md:hidden border-t border-gray-700">
        <ul className="flex flex-col font-semibold">
          <li>
            <a className="block px-4 py-3 hover:bg-gray-800 transition-colors" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 hover:bg-gray-800 transition-colors" href="#">
              Category
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 hover:bg-gray-800 transition-colors" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="block px-4 py-3 hover:bg-gray-800 transition-colors" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}