// componentsDashboard/Sidebar/SearchBar.tsx
import React from 'react';

export const SidebarSearchBar = () => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};