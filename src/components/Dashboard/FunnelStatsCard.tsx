import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  textColor?: string;
  showTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-accent-red' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-accent-yellow', showTooltip: true },
  { id: 'conversation', name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-indigo-500', textColor: 'text-white'},
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-accent-teal', textColor: 'text-white' },
  { id: 'closed_won', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600', textColor: 'text-white' },
];

const FunnelStatsCard: React.FC = () => {
  const totalActiveLeads = 600;
  const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card className="w-full bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary-text">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary-text">{totalActiveLeads}</span>
          <span className="ml-2 text-sm text-secondary-text">active leads</span>
        </div>

        <div className="w-full h-3 mb-6 flex rounded overflow-hidden">
          {funnelData.map((stage) => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            />
          ))}
        </div>

        <TooltipProvider>
          <ul className="space-y-3">
            {funnelData.map((stage) => (
              <li key={stage.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className={cn('w-3 h-3 rounded-sm mr-3', stage.color)} />
                  <span className="text-primary-text">{stage.name}</span>
                </div>
                <div className="flex items-center space-x-6 text-right">
                  <span className="w-10 text-secondary-text">{stage.count}</span>
                  <span className="w-16 text-secondary-text">$ {stage.value}</span>
                  {stage.showTooltip ? (
                     <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <span className="w-20 text-secondary-text cursor-default relative">
                          {stage.duration}
                          <span className="absolute -top-1 -right-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-popover text-popover-foreground">
                        <p>Average time on this stage</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span className="w-20 text-secondary-text">{stage.duration}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default FunnelStatsCard;
