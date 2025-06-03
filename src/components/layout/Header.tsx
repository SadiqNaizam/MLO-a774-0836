import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
  onToggleSidebar?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Dashboard', onToggleSidebar, className }) => {
  return (
    <header
      className={cn(
        'h-[64px] bg-card text-card-foreground',
        'fixed top-0 right-0 z-10',
        'left-0 md:left-60',
        'flex items-center justify-between px-6 border-b border-border',
        className
      )}
      aria-label="Main header"
    >
      <div className="flex items-center">
        {onToggleSidebar && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggleSidebar} 
            className="md:hidden mr-4 text-primary-text hover:bg-muted focus:bg-muted focus:ring-2 focus:ring-ring"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-xl font-semibold text-primary-text">{title}</h1>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card border-border w-48">
          <DropdownMenuItem className="text-sm text-card-foreground hover:bg-muted focus:bg-muted focus:text-card-foreground cursor-pointer py-2 px-3">New Lead</DropdownMenuItem>
          <DropdownMenuItem className="text-sm text-card-foreground hover:bg-muted focus:bg-muted focus:text-card-foreground cursor-pointer py-2 px-3">New Contact</DropdownMenuItem>
          <DropdownMenuItem className="text-sm text-card-foreground hover:bg-muted focus:bg-muted focus:text-card-foreground cursor-pointer py-2 px-3">New Task</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
