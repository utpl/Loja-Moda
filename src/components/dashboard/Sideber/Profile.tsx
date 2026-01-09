// componentsDashboard/Sidebar/Profile.tsx
import React from 'react';

export const SidebarProfile = () => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=100&h=100&fit=crop"
            alt="Avatar"
            className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-100"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            Santiago 
            Aguirre
          </h3>
          <p className="text-xs text-gray-500">Administrador</p>
        </div>
      </div>
    </div>
  );
};