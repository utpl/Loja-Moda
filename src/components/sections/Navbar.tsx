'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="2xl:mx-auto 2xl:container px-4 sm:px-6 xl:px-20 2xl:px-0">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO */}
          <a 
            className="flex items-center space-x-2 group" 
            href="#"
          >
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Loja Moda
            </span>
          </a>
          
          {/* MENU CENTRO - Desktop */}
          <ul className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <li>
              <a 
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors relative group" 
                href="#"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors relative group" 
                href="#"
              >
                Categorías
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors relative group" 
                href="#"
              >
                Colecciones
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors relative group" 
                href="#"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
          
          {/* ICONOS DERECHA */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            
            {/* BUSCAR - Desktop */}
            <button 
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-700 hover:text-indigo-600"
              aria-label="Buscar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* CARRITO */}
            <button 
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-700 hover:text-indigo-600 group"
              aria-label="Carrito de compras"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-linear-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                2
              </span>
            </button>
            
            {/* USUARIO */}
            <button 
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-700 hover:text-indigo-600"
              aria-label="Perfil de usuario"
              onClick={() => router.push('/dashboard')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            {/* MENU HAMBURGUESA - Mobile */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-700"
              aria-label="Menú"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* MENU MOBILE - Desplegable */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <ul className="py-4 px-4 sm:px-6 space-y-1">
            <li>
              <a 
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300" 
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300" 
                href="#"
              >
                Categorías
              </a>
            </li>
            <li>
              <a 
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300" 
                href="#"
              >
                Colecciones
              </a>
            </li>
            <li>
              <a 
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300" 
                href="#"
              >
                Contacto
              </a>
            </li>
            <li className="pt-2 border-t border-gray-200 mt-2">
              <a 
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300" 
                href="#"
              >
                Mi Perfil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};