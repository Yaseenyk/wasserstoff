import React, { Suspense, lazy } from "react";
import UsersComponent from './UsersComponent/UsersComponent';

// Lazy load WorldMapComponent
const LazyWorldMapComponent = lazy(() => import('./WorldMapComponent/WorldMapComponent'));

const DataComponent = () => {
  return (
    <>
      <div className="user-component">
        <UsersComponent/>
      </div>
      <div className='worldMap'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyWorldMapComponent />
        </Suspense>
      </div>
    </>
  )
}

export default DataComponent;
