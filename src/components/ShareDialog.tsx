import React, { useState } from 'react';
import { X, Search, User, Users } from 'lucide-react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  reportName: string;
  onShare: (users: string[], groups: string[]) => void;
}

const availableUsers = [
  { id: 'heena', name: 'Heena Sood', type: 'user' },
  { id: 'saurabh', name: 'Saurabh Khera', type: 'user' },
];

const availableGroups = [
  { id: 'sales-team', name: 'Sales Team', type: 'group' },
];

export default function ShareDialog({ isOpen, onClose, reportName, onShare }: ShareDialogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  if (!isOpen) return null;

  const filteredUsers = availableUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGroups = availableGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserToggle = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShare(selectedUsers, selectedGroups);
    resetDialog();
  };

  const resetDialog = () => {
    setSearchTerm('');
    setSelectedUsers([]);
    setSelectedGroups([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Share "{reportName}"</h3>
          <button onClick={resetDialog} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search users and groups..."
              />
            </div>
          </div>

          <div className="mb-4 max-h-48 overflow-y-auto">
            <div className="space-y-2">
              {filteredUsers.map((user) => (
                <label
                  key={user.id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleUserToggle(user.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-900">{user.name}</span>
                </label>
              ))}

              {filteredGroups.map((group) => (
                <label
                  key={group.id}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedGroups.includes(group.id)}
                    onChange={() => handleGroupToggle(group.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-gray-900">{group.name}</span>
                </label>
              ))}

              {filteredUsers.length === 0 && filteredGroups.length === 0 && searchTerm && (
                <p className="text-gray-500 text-center py-4">No users or groups found</p>
              )}
            </div>
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
              disabled={selectedUsers.length === 0 && selectedGroups.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}