import React from 'react';
import { Folder, Trash2, Shield, BarChart3, UserCircle } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  subCategories: number;
  reports: number;
  onClick: () => void;
  onDelete: () => void;
  isDeletable?: boolean;
}

export default function CategoryCard({ name, subCategories, reports, onClick, onDelete, isDeletable = true }: CategoryCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'selective insurance':
        return <Shield className="h-6 w-6 text-red-600" />;
      case 'zenoptics demo':
        return <BarChart3 className="h-6 w-6 text-green-600" />;
      case 'personal':
        return <UserCircle className="h-6 w-6 text-purple-600" />;
      default:
        return <Folder className="h-6 w-6 text-blue-600" />;
    }
  };

  const getCategoryBgColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'selective insurance':
        return 'bg-red-100';
      case 'zenoptics demo':
        return 'bg-green-100';
      case 'personal':
        return 'bg-purple-100';
      default:
        return 'bg-blue-100';
    }
  };
  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer relative group"
      onClick={onClick}
    >
      {isDeletable && (
        <button
          onClick={handleDelete}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </button>
      )}
      
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 ${getCategoryBgColor(name)} rounded-full flex items-center justify-center`}>
          {getCategoryIcon(name)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="text-sm text-gray-500 mt-1">
            <span className="font-medium">{subCategories}</span> Sub Categories{' '}
            <span className="font-medium">{reports}</span> Reports
          </div>
          <p className="text-xs text-gray-400 mt-1">No description available</p>
        </div>
      </div>
    </div>
  );
}