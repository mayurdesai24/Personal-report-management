import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddCategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (categoryName: string) => void;
}

export default function AddCategoryDialog({ isOpen, onClose, onAdd }: AddCategoryDialogProps) {
  const [categoryName, setCategoryName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAdd(categoryName.trim());
      setCategoryName('');
      onClose();
    }
  };

  const resetDialog = () => {
    setCategoryName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add Category</h3>
          <button onClick={resetDialog} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category name..."
              required
              autoFocus
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={resetDialog}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!categoryName.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}