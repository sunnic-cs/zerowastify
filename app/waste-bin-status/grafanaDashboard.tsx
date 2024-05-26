import React from 'react'

interface DashboardIframeProps {
  id: string;
  darkMode: boolean;
}

const grafanaDashboard : React.FC<DashboardIframeProps> = ({id, darkMode}) => {
  const GRAFANA_DASHBOARD_URL = process.env.GRAFANA_DASHBOARD_URL || '';
  const dashboardName = "zerowastify-sensors-data";
  const GRAFANA_ID = process.env.GRAFANA_DASHBOARD_ID || '';
  // const lastWeekTimeStamp = 

  return (
    <div>
      <iframe 
      src={`${GRAFANA_DASHBOARD_URL}/d-solo/${GRAFANA_ID}/${dashboardName}?orgId=1&from=1716195402628&to=1716199038916&panelId=${id}"&kiosk&theme=${darkMode ? 'dark' : 'light'}`}
      width="450" 
      height="200" 
      frameBorder="0">
      </iframe>
    </div>
  )
}

export default grafanaDashboard