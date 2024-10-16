'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`fixed z-10 h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
      >
        <div className="flex flex-col items-center">
          <h1 className="m-2 font-bold">Sidebar</h1>
          <div className="mt-4">
            <Link href="#" className="text-white hover:text-gray-300">
              Home
            </Link>
          </div>
          <div className="mt-4">
            <Link href="#" className="text-white hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className={`flex-1 p-4 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="ml-auto">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
