import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<string>('leads');
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>('last-6-months');

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-between mb-6", className)}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4 sm:mb-0">
        <TabsList className="bg-muted p-1 rounded-md">
          <TabsTrigger 
            value="sales" 
            className="px-4 py-1.5 text-sm data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className="px-4 py-1.5 text-sm data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <SelectTrigger className="w-full sm:w-[180px] bg-card focus:ring-ring focus:ring-1">
          <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent className="bg-popover">
          <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
          <SelectItem value="last-7-days">Last 7 days</SelectItem>
          <SelectItem value="last-30-days">Last 30 days</SelectItem>
          <SelectItem value="last-6-months">Last 6 months</SelectItem>
          <SelectItem value="last-12-months">Last 12 months</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PageHeader;
