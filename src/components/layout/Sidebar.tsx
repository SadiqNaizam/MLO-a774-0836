import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  UsersRound,
  UserCog,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  CircleUserRound,
  Briefcase,
  X,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: UsersRound, href: '#', isActive: false },
  { id: 'customers', label: 'Customers', icon: UserCog, href: '#', isActive: false },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#', isActive: false },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#', isActive: false },
  { id: 'items', label: 'Items', icon: ShoppingBag, href: '#', isActive: false },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#', isActive: false },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#', isActive: false },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#', isActive: false },
];

const secondaryNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#', isActive: false },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#', isActive: false },
];

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobileSidebar: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onCloseMobileSidebar, className }) => {
  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onCloseMobileSidebar}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'bg-sidebar text-sidebar-foreground flex flex-col h-screen p-4 border-r border-sidebar-border',
          'fixed inset-y-0 left-0 z-30 w-60',
          'transform transition-transform duration-300 ease-in-out md:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
        aria-label="Sidebar"
      >
        <div className="mb-8 flex items-center justify-between pl-2 pt-2">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-primary-text">DO</span>
          </div>
          <button 
            onClick={onCloseMobileSidebar} 
            className="md:hidden p-1 rounded-md text-sidebar-foreground/80 hover:text-sidebar-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-grow space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-sidebar-background">
          {mainNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
                item.isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80',
                'focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-accent'
              )}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-1 pt-4 border-t border-sidebar-border">
          {secondaryNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80',
                'focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-accent'
              )}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="#"
            className={cn(
              'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80 border-t border-sidebar-border pt-3 mt-3',
              'focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:bg-sidebar-accent'
            )}
          >
            <CircleUserRound className="h-5 w-5" aria-hidden="true" />
            <span>User Profile</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
