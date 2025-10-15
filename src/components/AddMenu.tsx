import React, { useState, useRef, useEffect } from 'react';
import { Plus, Upload, Database, FolderPlus } from 'lucide-react';

interface AddMenuProps {
  onUploadReport: () => void;
  onAddReport: () => void;
  onAddCategory: () => void;
}

export default function AddMenu({ onUploadReport, onAddReport, onAddCategory }: AddMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
      >
        <Plus className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
          <button
            onClick={() => handleMenuClick(onAddCategory)}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
          >
            <FolderPlus className="h-4 w-4 text-purple-600" />
            <span className="text-gray-700">Add Category</span>
          </button>
          <button
            onClick={() => handleMenuClick(onAddReport)}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
          >
            <Database className="h-4 w-4 text-green-600" />
            <span className="text-gray-700">Add BI Report</span>
          </button>
          <button
            onClick={() => handleMenuClick(onUploadReport)}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
          >
            <Upload className="h-4 w-4 text-blue-600" />
            <span className="text-gray-700">Upload a Report</span>
          </button>
        </div>
      )}
    </div>
  );
}