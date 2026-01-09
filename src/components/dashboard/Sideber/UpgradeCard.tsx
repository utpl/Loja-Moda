// componentsDashboard/Sidebar/UpgradeCard.tsx
import React from 'react';

export const UpgradeCard = () => {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900">Actualiza a Pro</p>
            <p className="text-xs text-gray-600">Más funciones</p>
          </div>
        </div>
        <button className="w-full py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
          Actualizar ahora
        </button>
      </div>
    </div>
  );
};