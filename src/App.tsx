import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid2x2 as Grid, List, Bell, User, Menu, ChevronDown } from 'lucide-react';
import CategoryCard from './components/CategoryCard';
import ReportCard from './components/ReportCard';
import AddMenu from './components/AddMenu';
import Breadcrumb from './components/Breadcrumb';
import UploadDialog from './components/UploadDialog';
import AddReportDialog from './components/AddReportDialog';
import AddCategoryDialog from './components/AddCategoryDialog';
import LoadingTooltip from './components/LoadingTooltip';
import EmptyState from './components/EmptyState';
import ShareDialog from './components/ShareDialog';

interface Category {
  id: string;
  name: string;
  subCategories: Category[];
  reports: Report[];
  parentId?: string;
}

interface Report {
  id: string;
  name: string;
  type: 'file' | 'bi-tool';
  fileType?: string;
  biTool?: string;
  url?: string;
  isLoading?: boolean;
}

function App() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Selective Insurance',
      subCategories: [
        {
          id: '1-1',
          name: 'Claims Processing',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-2',
          name: 'Policy Management',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-3',
          name: 'Risk Assessment',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-4',
          name: 'Customer Analytics',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-5',
          name: 'Financial Reports',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-6',
          name: 'Compliance',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-7',
          name: 'Underwriting',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-8',
          name: 'Fraud Detection',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-9',
          name: 'Market Analysis',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-10',
          name: 'Agent Performance',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-11',
          name: 'Product Development',
          subCategories: [],
          reports: [],
          parentId: '1'
        },
        {
          id: '1-12',
          name: 'Regulatory Reporting',
          subCategories: [],
          reports: [],
          parentId: '1'
        }
      ],
      reports: [
        {
          id: 'r1-1',
          name: 'Q4 Claims Summary',
          type: 'file',
          fileType: 'pdf'
        },
        {
          id: 'r1-2',
          name: 'Policy Dashboard',
          type: 'bi-tool',
          biTool: 'powerbi',
          url: 'https://app.powerbi.com/policy-dashboard'
        },
        {
          id: 'r1-3',
          name: 'Risk Analysis Report',
          type: 'file',
          fileType: 'xlsx'
        }
      ]
    },
    {
      id: '2',
      name: 'ZENOPTICS DEMO',
      subCategories: [
        {
          id: '2-1',
          name: 'Sales Analytics',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-2',
          name: 'Customer Insights',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-3',
          name: 'Marketing Performance',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-4',
          name: 'Financial Dashboards',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-5',
          name: 'Operational Metrics',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-6',
          name: 'Product Analytics',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-7',
          name: 'Supply Chain',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-8',
          name: 'HR Analytics',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-9',
          name: 'Quality Metrics',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-10',
          name: 'Inventory Management',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-11',
          name: 'Customer Support',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-12',
          name: 'Competitive Analysis',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-13',
          name: 'Regional Performance',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-14',
          name: 'Trend Analysis',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-15',
          name: 'Executive Summary',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-16',
          name: 'Budget Planning',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-17',
          name: 'Risk Management',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-18',
          name: 'Performance KPIs',
          subCategories: [],
          reports: [],
          parentId: '2'
        },
        {
          id: '2-19',
          name: 'Market Research',
          subCategories: [],
          reports: [],
          parentId: '2'
        }
      ],
      reports: [
        {
          id: 'r2-1',
          name: 'Demo Dashboard Overview',
          type: 'bi-tool',
          biTool: 'tableau',
          url: 'https://tableau.com/demo-dashboard'
        },
        {
          id: 'r2-2',
          name: 'Sample Data Analysis',
          type: 'file',
          fileType: 'xlsx'
        },
        {
          id: 'r2-3',
          name: 'ZenOptics Features Guide',
          type: 'file',
          fileType: 'pdf'
        },
        {
          id: 'r2-4',
          name: 'Interactive Demo',
          type: 'bi-tool',
          biTool: 'powerbi',
          url: 'https://app.powerbi.com/zenoptics-demo'
        }
      ]
    },
    {
      id: '3',
      name: 'Personal',
      subCategories: [
        {
          id: '3-1',
          name: 'Personal Lines',
          subCategories: [
            {
              id: '3-1-1',
              name: 'Field Manager',
              subCategories: [],
              reports: [
                {
                  id: 'r3-1-1-1',
                  name: 'SalesPerformance.xlsx',
                  type: 'file',
                  fileType: 'xlsx'
                },
                {
                  id: 'r3-1-1-2',
                  name: 'Annual sales.xlsx',
                  type: 'file',
                  fileType: 'xlsx'
                },
                {
                  id: 'r3-1-1-3',
                  name: 'Campaign activity.docx',
                  type: 'file',
                  fileType: 'docx'
                }
              ],
              parentId: '3-1'
            }
          ],
          reports: [],
          parentId: '3'
        }
      ],
      reports: []
    }
  ]);

  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isAddReportDialogOpen, setIsAddReportDialogOpen] = useState(false);
  const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [shareReportName, setShareReportName] = useState('');
  const [shareReportId, setShareReportId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [reportView, setReportView] = useState<'my' | 'shared'>('my');

  // Shared reports data
  const sharedReports: Report[] = [
    {
      id: 'shared-1',
      name: 'Policy Premium',
      type: 'file',
      fileType: 'docx'
    },
    {
      id: 'shared-2',
      name: 'Sales',
      type: 'file',
      fileType: 'docx'
    }
  ];

  // Helper function to count all reports recursively
  const countAllReports = (category: Category): number => {
    let count = category.reports.length;
    category.subCategories.forEach(subCat => {
      count += countAllReports(subCat);
    });
    return count;
  };

  // Helper function to count all subcategories recursively
  const countAllSubCategories = (category: Category): number => {
    let count = category.subCategories.length;
    category.subCategories.forEach(subCat => {
      count += countAllSubCategories(subCat);
    });
    return count;
  };

  const getCurrentCategoryFromPath = (path: string[]): Category | null => {
    if (path.length === 0) return null;

    let current = categories.find(cat => cat.name === path[0]);
    if (!current) return null;

    for (let i = 1; i < path.length; i++) {
      current = current.subCategories.find(cat => cat.name === path[i]);
      if (!current) return null;
    }

    return current;
  };

  useEffect(() => {
    setCurrentCategory(getCurrentCategoryFromPath(currentPath));
  }, [currentPath, categories]);

  const navigateToCategory = (category: Category) => {
    setCurrentPath([...currentPath, category.name]);
  };

  const navigateToBreadcrumb = (index: number) => {
    if (index === -1) {
      setCurrentPath([]);
    } else {
      setCurrentPath(currentPath.slice(0, index + 1));
    }
  };

  const updateCategoryInState = (updatedCategory: Category, path: string[]) => {
    setCategories(prevCategories => {
      const newCategories = [...prevCategories];
      
      if (path.length === 1) {
        const index = newCategories.findIndex(cat => cat.name === path[0]);
        if (index !== -1) {
          newCategories[index] = updatedCategory;
        }
      } else {
        let current = newCategories.find(cat => cat.name === path[0]);
        if (current) {
          for (let i = 1; i < path.length - 1; i++) {
            current = current.subCategories.find(cat => cat.name === path[i]);
            if (!current) break;
          }
          if (current) {
            const index = current.subCategories.findIndex(cat => cat.name === path[path.length - 1]);
            if (index !== -1) {
              current.subCategories[index] = updatedCategory;
            }
          }
        }
      }
      
      return newCategories;
    });
  };

  const handleUploadReport = (file: File, reportName?: string) => {
    if (!currentCategory) return;

    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    const newReport: Report = {
      id: Date.now().toString(),
      name: reportName || file.name.replace(/\.[^/.]+$/, ''),
      type: 'file',
      fileType: fileExtension
    };

    const updatedCategory = {
      ...currentCategory,
      reports: [...currentCategory.reports, newReport]
    };

    updateCategoryInState(updatedCategory, currentPath);
  };

  const handleAddReport = (biTool: string, reportName: string, url: string) => {
    if (!currentCategory) return;

    const newReport: Report = {
      id: Date.now().toString(),
      name: reportName,
      type: 'bi-tool',
      biTool: biTool,
      url: url,
      isLoading: true
    };

    const updatedCategory = {
      ...currentCategory,
      reports: [...currentCategory.reports, newReport]
    };

    updateCategoryInState(updatedCategory, currentPath);

    // Simulate loading for 10 seconds
    setTimeout(() => {
      const finalUpdatedCategory = {
        ...updatedCategory,
        reports: updatedCategory.reports.map(report =>
          report.id === newReport.id ? { ...report, isLoading: false } : report
        )
      };
      updateCategoryInState(finalUpdatedCategory, currentPath);
    }, 10000);
  };

  const handleAddCategory = (categoryName: string) => {
    const newCategory: Category = {
      id: Date.now().toString(),
      name: categoryName,
      subCategories: [],
      reports: []
    };

    if (currentPath.length === 0) {
      setCategories(prev => [...prev, newCategory]);
    } else if (currentCategory) {
      const updatedCategory = {
        ...currentCategory,
        subCategories: [...currentCategory.subCategories, newCategory]
      };
      updateCategoryInState(updatedCategory, currentPath);
    }
  };

  const handleDeleteReport = (reportId: string) => {
    if (!currentCategory) return;

    const updatedCategory = {
      ...currentCategory,
      reports: currentCategory.reports.filter(report => report.id !== reportId)
    };

    updateCategoryInState(updatedCategory, currentPath);
  };

  const handleShareReport = (reportId: string, reportName: string) => {
    setShareReportId(reportId);
    setShareReportName(reportName);
    setIsShareDialogOpen(true);
  };

  const handleShare = (users: string[], groups: string[]) => {
    console.log('Sharing report:', shareReportName, 'with users:', users, 'and groups:', groups);
    setIsShareDialogOpen(false);
    setShareReportId('');
    setShareReportName('');
  };

  const handleDeleteCategory = (categoryId: string) => {
    if (currentPath.length === 0) {
      setCategories(prev => prev.filter(cat => cat.id !== categoryId));
    } else if (currentCategory) {
      const updatedCategory = {
        ...currentCategory,
        subCategories: currentCategory.subCategories.filter(cat => cat.id !== categoryId)
      };
      updateCategoryInState(updatedCategory, currentPath);
    }
  };

  // Helper function to check if current category is within Personal hierarchy
  const isPersonalCategory = (category: Category | null): boolean => {
    if (!category) return false;

    // Check if we're in Personal category or any of its subcategories
    let current = category;
    while (current) {
      if (current.name === 'Personal') return true;

      // Find parent category
      const parentPath = currentPath.slice(0, -1);
      if (parentPath.length === 0) {
        // We're at root level, check if this is Personal
        return current.name === 'Personal';
      }

      // Navigate up the hierarchy
      current = getCurrentCategoryFromPath(parentPath);
      if (current && current.name === 'Personal') return true;
      break;
    }

    return false;
  };

  const getFilteredData = () => {
    // If in Personal category and viewing shared reports, show shared reports
    if (reportView === 'shared' && currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)))) {
      const filteredSharedReports = searchTerm
        ? sharedReports.filter(report => report.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : sharedReports;

      return {
        subCategories: [],
        reports: filteredSharedReports
      };
    }

    const currentData = currentCategory || { subCategories: categories, reports: [] };

    if (!searchTerm) return currentData;

    const filteredSubCategories = currentData.subCategories.filter(cat =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredReports = currentData.reports.filter(report =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      subCategories: filteredSubCategories,
      reports: filteredReports
    };
  };

  const filteredData = getFilteredData();

  // Calculate total items including shared reports when in Personal category
  const getTotalItems = () => {
    const isInPersonal = currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)));
    const baseCount = (currentCategory?.subCategories.length || categories.length) +
                      (currentCategory?.reports.length || 0);

    // Add shared reports count if in Personal category
    if (isInPersonal) {
      return baseCount + sharedReports.length;
    }

    return baseCount;
  };

  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">Z</span>
              </div>
              <span className="text-xl font-semibold">ZenOptics</span>
            </div>
            <Menu className="h-5 w-5" />
            <div className="flex items-center space-x-1 text-sm">
              <span>📁</span>
              <span>Categories</span>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for reports, metadata, catego..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5" />
            <Bell className="h-5 w-5" />
            <Grid className="h-5 w-5" />
            <User className="h-5 w-5" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {(currentPath.length > 0 || reportView === 'shared') && (
          <Breadcrumb
            path={reportView === 'shared' ? [] : currentPath}
            onNavigate={navigateToBreadcrumb}
            reportView={reportView === 'shared' ? 'shared' : ((currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)))) ? reportView : undefined)}
          />
        )}

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            {(currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)))) && (
              <>
                <button
                  onClick={() => setReportView('my')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    reportView === 'my'
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  My Reports
                </button>
                <button
                  onClick={() => setReportView('shared')}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    reportView === 'shared'
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Shared with me
                </button>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option>Newest First</option>
            </select>
            <div className="flex border border-gray-300 rounded">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        {filteredData.subCategories.length === 0 && filteredData.reports.length === 0 ? (
          <EmptyState showAddButton={currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)))} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredData.subCategories.map((category) => {
              // Count all nested reports and subcategories for Personal category on main page
              const reportsCount = category.name === 'Personal' && currentPath.length === 0
                ? countAllReports(category) + sharedReports.length
                : category.reports.length;

              const subCategoriesCount = category.name === 'Personal' && currentPath.length === 0
                ? countAllSubCategories(category)
                : category.subCategories.length;

              return (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  subCategories={subCategoriesCount}
                  reports={reportsCount}
                  onClick={() => navigateToCategory(category)}
                  onDelete={() => handleDeleteCategory(category.id)}
                  isDeletable={!['Personal', 'Selective Insurance', 'ZENOPTICS DEMO'].includes(category.name)}
                />
              );
            })}

            {filteredData.reports.map((report) => {
              const isInPersonal = currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)));
              const isSharedView = reportView === 'shared';

              return (
                <LoadingTooltip key={report.id} show={report.isLoading || false}>
                  <ReportCard
                    name={report.name}
                    type={report.type}
                    fileType={report.fileType}
                    biTool={report.biTool}
                    isLoading={report.isLoading}
                    showShare={isInPersonal}
                    showDelete={!isSharedView}
                    onDelete={!isSharedView ? () => handleDeleteReport(report.id) : undefined}
                    onShare={() => handleShareReport(report.id, report.name)}
                  />
                </LoadingTooltip>
              );
            })}
          </div>
        )}

        {/* Add Menu - Only show when in a category and not viewing shared reports */}
        {(reportView === 'my' && currentPath.length > 0 && (currentPath[0] === 'Personal' || (currentCategory && isPersonalCategory(currentCategory)))) && (
          <div className="fixed bottom-6 right-6">
            <AddMenu
              onUploadReport={() => setIsUploadDialogOpen(true)}
              onAddReport={() => setIsAddReportDialogOpen(true)}
              onAddCategory={() => setIsAddCategoryDialogOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Dialogs */}
      <UploadDialog
        isOpen={isUploadDialogOpen}
        onClose={() => setIsUploadDialogOpen(false)}
        onUpload={handleUploadReport}
      />

      <AddReportDialog
        isOpen={isAddReportDialogOpen}
        onClose={() => setIsAddReportDialogOpen(false)}
        onAdd={handleAddReport}
      />

      <AddCategoryDialog
        isOpen={isAddCategoryDialogOpen}
        onClose={() => setIsAddCategoryDialogOpen(false)}
        onAdd={handleAddCategory}
      />

      <ShareDialog
        isOpen={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
        reportName={shareReportName}
        onShare={handleShare}
      />
    </div>
  );
}

export default App;