import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStat {
  id: string;
  percentage: number;
  reason: string;
}

interface OtherDataStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const reasonsData: ReasonStat[] = [
  { id: 'proposal_unclear_1', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'venture_pursuit', percentage: 20, reason: 'However venture pursuit' },
  { id: 'other', percentage: 10, reason: 'Other' },
  { id: 'lack_of_budget', percentage: 30, reason: 'Lack of budget' }, // Changed from 'The proposal is unclear'
];

const otherData: OtherDataStat[] = [
  { id: 'total_leads', value: '900', label: 'total leads count' },
  { id: 'avg_conversion_time', value: '12', label: 'days in average to convert lead' },
  { id: 'inactive_leads', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const LossReasonStatsGrid: React.FC = () => {
  return (
    <Card className="w-full col-span-2 bg-card text-card-foreground">
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-primary-text mb-4">Reasons of leads lost</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {reasonsData.map((item) => (
              <div key={item.id}>
                <p className="text-3xl font-bold text-primary-text">{item.percentage}%</p>
                <p className="text-sm text-secondary-text">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-primary-text mb-4">Other data</h3>
          <div className="space-y-4">
            {otherData.map((item) => (
              <div key={item.id}>
                <p className="text-3xl font-bold text-primary-text flex items-center">
                  {item.value}
                  {item.hasInfo && (
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Info className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover text-popover-foreground">
                                <p>{item.infoText}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                  )}
                </p>
                <p className="text-sm text-secondary-text">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LossReasonStatsGrid;
