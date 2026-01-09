// componentsDashboard/Sidebar/Header.tsx
import React from 'react';

export const SidebarHeader = () => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <div>
          <h1 className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Loja Moda
          </h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>
    </div>
  );
};