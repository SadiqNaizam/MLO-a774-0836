import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle = 'Dashboard Overview', className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className={cn('min-h-screen bg-background flex flex-col', className)}>
      <Sidebar 
        isMobileOpen={isSidebarOpen} 
        onCloseMobileSidebar={closeSidebar} 
      />
      <Header 
        title={pageTitle} 
        onToggleSidebar={toggleSidebar} 
      />
      <main
        className={cn(
          'flex-1 p-6 min-w-0 overflow-y-auto focus:outline-none',
          'mt-[64px]', 
          'md:ml-60'
        )}
        id="main-content"
        tabIndex={-1} // Make it focusable for skiplinks if any
      >
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
