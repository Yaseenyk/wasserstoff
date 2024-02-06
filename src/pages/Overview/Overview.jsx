// Importing necessary modules and styles
import React from 'react';
import './Overview.scss';
import DesignOverview from '../../components/OverviewComponents/DesignComponent/DesignComponent';
import DataOverview from '../../components/OverviewComponents/DataOverview/DataOverview';

// Functional component definition for Overview
const Overview = () => {
  // Render the Overview component
  return (
    <div className='OverviewContainer'>
      {/* Left container for Design Overview */}
      <div className='leftContainer'>
        <DesignOverview />
      </div>
      
      {/* Right container for Data Overview */}
      <div className='rightContainer'>
        <DataOverview />
      </div>
    </div>
  );
};

export default Overview;
