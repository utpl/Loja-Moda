// componentsDashboard/Sidebar/NavMenu.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MenuItem } from './types';

interface NavMenuProps {
  menuItems: MenuItem[];
}

export const NavMenu = ({ menuItems }: NavMenuProps) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const router = useRouter();

  const handleNavigate = (item: MenuItem) => {
    setActiveItem(item.id);
    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <nav className="flex-1 overflow-y-auto p-4">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
              activeItem === item.id
                ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-700 hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`transition-transform duration-300 ${
                activeItem === item.id ? '' : 'group-hover:scale-110'
              }`}>
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
            {item.badge && (
              <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                activeItem === item.id
                  ? 'bg-white/20 text-white'
                  : 'bg-linear-to-r from-pink-500 to-rose-500 text-white'
              }`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};