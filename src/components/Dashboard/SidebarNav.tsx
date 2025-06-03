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
  Briefcase
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

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-60 bg-sidebar text-sidebar-foreground flex flex-col h-screen fixed top-0 left-0 p-4 border-r border-sidebar-border">
      <div className="mb-8 flex items-center space-x-2 pl-2 pt-2">
        <Briefcase className="h-8 w-8 text-primary" />
        <span className="font-bold text-xl text-primary-text">DO</span>
      </div>

      <nav className="flex-grow space-y-1">
        {mainNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
              item.isActive
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-1 pb-4">
        {secondaryNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
        <a
          href="#"
          className={cn(
            'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80 border-t border-sidebar-border pt-3 mt-3'
          )}
        >
          <CircleUserRound className="h-5 w-5" />
          <span>User Profile</span> 
        </a>
      </div>
    </aside>
  );
};

export default SidebarNav;
