import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  amount: number;
  color: string;
}

const pieChartData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, amount: 3000, color: '#F06548' }, // accent-red
  { name: 'Behance', value: 1000, percentage: 40, amount: 1000, color: '#FFCE54' }, // accent-yellow
  { name: 'Instagram', value: 1000, percentage: 10, amount: 1000, color: '#0AB39C' }, // accent-teal
  { name: 'Dribbble', value: 1000, percentage: 10, amount: 1000, color: '#299CDB' }, // accent-blue (approx for light green/teal)
];

const PieChartCard: React.FC = () => {
  return (
    <Card className="w-full bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary-text">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                stroke="hsl(var(--card))"
                strokeWidth={3}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))' }}
                itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <ul className="space-y-3 mb-2">
          {pieChartData.map((source) => (
            <li key={source.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-sm mr-3" style={{ backgroundColor: source.color }} />
                <span className="text-primary-text">{source.name}</span>
              </div>
              <div className="flex items-center space-x-4 text-right">
                <span className="w-16 text-secondary-text">$ {source.amount.toLocaleString()}</span>
                <span className="w-10 text-secondary-text">{source.percentage}%</span>
              </div>
            </li>
          ))}
        </ul>
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <p className="text-xs text-muted-foreground text-right cursor-default">
                        from leads total
                        <span className="inline-block ml-1 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    </p>
                </TooltipTrigger>
                <TooltipContent className="bg-popover text-popover-foreground">
                    <p>Data aggregated from total leads</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
