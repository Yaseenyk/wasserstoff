import './Overview.scss';
import DesignOverview from '../../components/OverviewComponents/DesignComponent/DesignComponent';
import DataOverview from '../../components/OverviewComponents/DataOverview/DataOverview';
const Overview = () => {

  return (
    <div className='OverviewContainer'>
      <div className='leftContainer'>
      <DesignOverview/>
      </div>
      <div className='rightContainer'>
      <DataOverview/>
      </div>
    </div>
  )
}

export default Overview
