import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  path: string[];
  onNavigate: (index: number) => void;
  reportView?: 'my' | 'shared';
}

export default function Breadcrumb({ path, onNavigate, reportView }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <button
        onClick={() => onNavigate(-1)}
        className="flex items-center hover:text-blue-600 transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        Categories
      </button>

      {path.map((segment, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <button
            onClick={() => onNavigate(index)}
            className={`hover:text-blue-600 transition-colors ${
              index === path.length - 1 && !reportView ? 'text-gray-900 font-medium' : ''
            }`}
          >
            {segment}
          </button>
        </React.Fragment>
      ))}

      {reportView && (
        <>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-900 font-medium">
            {reportView === 'my' ? 'My Reports' : 'Shared with me'}
          </span>
        </>
      )}
    </nav>
  );
}