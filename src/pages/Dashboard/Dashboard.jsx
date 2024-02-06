import React from 'react'
import DataComponent from '../../components/DataComponent/DataComponent'
import BottomComponent from '../../components/BottomComponent/BottomComponent'
import './Dashboard.scss'
import Popup from '../../helpers/Popup/Popup'
const Dashboard = () => {
  return (
    <>
      <div className='TopComponent'>
        <DataComponent/>
      </div>
      <div className='BottomComponent'>
      <BottomComponent/>
      </div>
      <div className='Popup'>
        <Popup/>
      </div>
    </>
  )
}

export default Dashboard
