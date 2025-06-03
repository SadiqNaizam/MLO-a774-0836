import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 42 },
  { name: 'April', closedWon: 50, closedLost: 30 },
  { name: 'May', closedWon: 85, closedLost: 40 },
  { name: 'June', closedWon: 70, closedLost: 5 },
  { name: 'July', closedWon: 80, closedLost: 45 },
  { name: 'August', closedWon: 100, closedLost: 30 },
];

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <Button
    variant="ghost"
    size="sm"
    className={cn(
      'text-secondary-text hover:bg-muted',
      isActive && 'bg-primary/10 text-primary hover:bg-primary/20'
    )}
    onClick={onClick}
  >
    {label}
  </Button>
);

const LeadsTrackingChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted');
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>('last-6-months');

  return (
    <Card className="w-full col-span-2 bg-card text-card-foreground">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-primary-text">Leads tracking</CardTitle>
          <div className="mt-2 space-x-1 sm:space-x-2">
            <span className="text-2xl font-bold text-primary-text">680</span>
            <span className="text-sm text-secondary-text mr-3">total closed</span>
            <span className="text-2xl font-bold text-primary-text">70</span>
            <span className="text-sm text-secondary-text">total lost</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-end mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex space-x-1 p-0.5 bg-muted rounded-md">
            <TabButton label="Leads came" isActive={activeTab === 'came'} onClick={() => setActiveTab('came')} />
            <TabButton label="Leads Converted" isActive={activeTab === 'converted'} onClick={() => setActiveTab('converted')} />
            <TabButton label="Total deals size" isActive={activeTab === 'size'} onClick={() => setActiveTab('size')} />
          </div>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-full sm:w-[180px] bg-card focus:ring-ring focus:ring-1">
              <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="last-6-months">Last 6 months</SelectItem>
              <SelectItem value="last-12-months">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0AB39C" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0AB39C" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F06548" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} dx={-5} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
                itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3'}}
              />
              <Area type="monotone" dataKey="closedWon" stroke="#0AB39C" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedWon)" dot={{ r: 4, fill: '#0AB39C', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#0AB39C', stroke: 'hsl(var(--card))', strokeWidth: 2 }} name="Closed Won" />
              <Area type="monotone" dataKey="closedLost" stroke="#F06548" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedLost)" dot={{ r: 4, fill: '#F06548', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#F06548', stroke: 'hsl(var(--card))', strokeWidth: 2 }} name="Closed Lost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center text-sm">
            <span className="w-3 h-3 rounded-sm mr-2 bg-accent-teal" />
            <span className="text-secondary-text">Closed won</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="w-3 h-3 rounded-sm mr-2 bg-accent-red" />
            <span className="text-secondary-text">Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
