import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Menu content */}
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-4">
          <a href="/apercu" className="block py-3 text-gray-600 hover:text-gray-900 border-b">Aperçu</a>
          <a href="/projet" className="block py-3 text-gray-600 hover:text-gray-900 border-b">Projets</a>
          <a href="/demandes" className="block py-3 text-gray-600 hover:text-gray-900 border-b">Demandes</a>
          <a href="/messages" className="block py-3 text-gray-600 hover:text-gray-900 border-b">Messages</a>
          <a href="/avis" className="block py-3 text-gray-600 hover:text-gray-900 border-b">Avis</a>
          <a href="/profile" className="block py-3 text-orange-500">Profile</a>
        </nav>
      </div>
    </div>
  );
} 