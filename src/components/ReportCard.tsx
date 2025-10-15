import React from 'react';
import { Trash2, Share2 } from 'lucide-react';

interface ReportCardProps {
  name: string;
  type: 'file' | 'bi-tool';
  fileType?: string;
  biTool?: string;
  isLoading?: boolean;
  showShare?: boolean;
  showDelete?: boolean;
  onDelete?: () => void;
  onShare?: () => void;
}

export default function ReportCard({ name, type, fileType, biTool, isLoading, showShare = false, showDelete = true, onDelete, onShare }: ReportCardProps) {
  const getFileIcon = (fileType: string) => {
    const iconMap: { [key: string]: string } = {
      'pdf': 'https://img.icons8.com/color/48/pdf.png',
      'doc': 'https://img.icons8.com/color/48/microsoft-word-2019.png',
      'docx': 'https://img.icons8.com/color/48/microsoft-word-2019.png',
      'xlsx': 'https://img.icons8.com/color/48/microsoft-excel-2019.png',
      'csv': 'https://img.icons8.com/color/48/microsoft-excel-2019.png',
      'ppt': 'https://img.icons8.com/color/48/microsoft-powerpoint-2019.png',
      'pptx': 'https://img.icons8.com/color/48/microsoft-powerpoint-2019.png',
    };
    return iconMap[fileType.toLowerCase()] || 'https://img.icons8.com/color/48/file.png';
  };

  const getBIToolIcon = (biTool: string) => {
    const iconMap: { [key: string]: string } = {
      'powerbi': 'https://img.icons8.com/color/48/power-bi.png',
      'tableau': 'https://img.icons8.com/color/48/tableau-software.png',
      'sharepoint': 'https://img.icons8.com/color/48/sharepoint.png',
    };
    return iconMap[biTool?.toLowerCase()] || 'https://img.icons8.com/color/48/database.png';
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare?.();
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (showShare) {
      e.preventDefault();
      onShare?.();
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all cursor-pointer relative group ${isLoading ? 'opacity-50' : ''}`}
      onContextMenu={handleContextMenu}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-75 rounded-lg flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {showShare && (
          <button
            onClick={handleShare}
            className="p-1 hover:bg-blue-50 rounded"
            title="Share"
          >
            <Share2 className="h-4 w-4 text-blue-500" />
          </button>
        )}
        {showDelete && (
          <button
            onClick={handleDelete}
            className="p-1 hover:bg-red-50 rounded"
            title="Delete"
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <img 
          src={type === 'file' ? getFileIcon(fileType || '') : getBIToolIcon(biTool || '')}
          alt={type === 'file' ? fileType : biTool}
          className="w-10 h-10"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 truncate">{name}</h4>
          <p className="text-xs text-gray-500 mt-0.5">
            {type === 'file' ? `${fileType?.toUpperCase()} File` : `${biTool} Report`}
          </p>
        </div>
      </div>
    </div>
  );
}