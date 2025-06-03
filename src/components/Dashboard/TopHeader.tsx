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

interface TopHeaderProps {
  title?: string;
  onToggleSidebar?: () => void; 
}

const TopHeader: React.FC<TopHeaderProps> = ({ title = 'Dashboard', onToggleSidebar }) => {
  return (
    <header 
      className={cn(
        'h-[64px] bg-card text-card-foreground',
        'fixed top-0 left-0 md:left-60 right-0 z-10',
        'flex items-center justify-between px-6 border-b'
      )}
    >
      <div className="flex items-center">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden mr-4">
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-xl font-semibold text-primary-text">{title}</h1>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card">
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Lead</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Contact</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted focus:bg-muted">New Task</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
