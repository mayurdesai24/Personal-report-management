import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddReportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (biTool: string, reportName: string, url: string) => void;
}

const biTools = [
  { id: 'powerbi', name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
  { id: 'tableau', name: 'Tableau', icon: 'https://img.icons8.com/color/48/tableau-software.png' },
  { id: 'sharepoint', name: 'SharePoint', icon: 'https://img.icons8.com/color/48/sharepoint.png' },
];

export default function AddReportDialog({ isOpen, onClose, onAdd }: AddReportDialogProps) {
  const [selectedTool, setSelectedTool] = useState('');
  const [reportName, setReportName] = useState('');
  const [reportUrl, setReportUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTool && reportName.trim() && reportUrl.trim()) {
      onAdd(selectedTool, reportName.trim(), reportUrl.trim());
      resetDialog();
    }
  };

  const resetDialog = () => {
    setSelectedTool('');
    setReportName('');
    setReportUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add BI Tool Report</h3>
          <button onClick={resetDialog} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select BI Tool
            </label>
            <div className="grid grid-cols-1 gap-3">
              {biTools.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setSelectedTool(tool.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors ${
                    selectedTool === tool.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                  <span className="font-medium text-gray-900">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Name *
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter report name..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report URL
            </label>
            <input
              type="url"
              value={reportUrl}
              onChange={(e) => setReportUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter report URL..."
              required
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
              disabled={!selectedTool || !reportName.trim() || !reportUrl.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}