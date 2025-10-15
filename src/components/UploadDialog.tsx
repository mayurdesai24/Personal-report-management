import React, { useState, useRef } from 'react';
import { X, Upload } from 'lucide-react';

interface UploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File, reportName?: string) => void;
}

export default function UploadDialog({ isOpen, onClose, onUpload }: UploadDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [reportName, setReportName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onUpload(file, reportName.trim() || undefined);
      setFile(null);
      setReportName('');
      onClose();
    }
  };

  const resetDialog = () => {
    setFile(null);
    setReportName('');
    setIsDragging(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upload Report</h3>
          <button onClick={resetDialog} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Name (Optional)
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter report name..."
            />
          </div>

          <div className="mb-4">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragging
                  ? 'border-blue-400 bg-blue-50'
                  : file
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {file ? (
                <div>
                  <div className="text-green-600 mb-2">
                    <Upload className="h-8 w-8 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-green-800">{file.name}</p>
                  <p className="text-xs text-green-600 mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-gray-400 mb-2">
                    <Upload className="h-8 w-8 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Drag and drop a file here, or{' '}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      browse
                    </button>
                  </p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              className="hidden"
              accept=".pdf,.doc,.docx,.xlsx,.csv,.ppt,.pptx"
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
              disabled={!file}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}