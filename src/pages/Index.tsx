import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelStatsCard from '../components/Dashboard/FunnelStatsCard';
import PieChartCard from '../components/Dashboard/PieChartCard';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import LossReasonStatsGrid from '../components/Dashboard/LossReasonStatsGrid';

const DashboardOverviewPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard">
      {/* PageHeader includes tabs for 'Sales'/'Leads' and a date range filter */}
      <PageHeader />

      {/* Main content grid for dashboard widgets */}
      {/* Conforms to Layout Requirements: mainContent.container: "grid grid-cols-2 gap-6" */}
      {/* FunnelStatsCard and PieChartCard will occupy one column each. */}
      {/* LeadsTrackingChart and LossReasonStatsGrid have internal col-span-2, so they will span both columns. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FunnelStatsCard />
        <PieChartCard />
        <LeadsTrackingChart />
        <LossReasonStatsGrid />
      </div>
    </MainAppLayout>
  );
};

export default DashboardOverviewPage;
