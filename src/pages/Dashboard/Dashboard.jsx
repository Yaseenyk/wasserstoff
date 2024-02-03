import React from 'react'
import DataComponent from '../../components/DataComponent/DataComponent'
import BottomComponent from '../../components/BottomComponent/BottomComponent'
import './Dashboard.scss'
const Dashboard = () => {
  return (
    <>
      <div className='TopComponent'>
        <DataComponent/>
      </div>
      <div className='BottomComponent'>
      <BottomComponent/>
      </div>
    </>
  )
}

export default Dashboard
