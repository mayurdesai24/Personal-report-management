import React from 'react';
import { Plus, FolderPlus, Upload } from 'lucide-react';

interface EmptyStateProps {
  showAddButton: boolean;
}

export default function EmptyState({ showAddButton }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-white">Z</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No content yet</h3>
      
      {showAddButton ? (
        <div className="text-center">
          <p className="text-gray-600 mb-6 max-w-md">
            This category is empty. Start building your report collection by adding categories or uploading reports.
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <FolderPlus className="h-4 w-4 text-purple-600" />
              </div>
              <span>Add Category</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Plus className="h-4 w-4 text-green-600" />
              </div>
              <span>Add BI Report</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Upload className="h-4 w-4 text-blue-600" />
              </div>
              <span>Upload Report</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Use the <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-xs mx-1">+</span> button to get started
          </p>
        </div>
      ) : (
        <p className="text-gray-600 text-center max-w-md">
          This category contains subcategories and reports. Navigate through the folders to explore the content.
        </p>
      )}
    </div>
  );
}