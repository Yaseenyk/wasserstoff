import UsersComponent from './UsersComponent/UsersComponent';
import WorldMapComponent from './WorldMapComponent/WorldMapComponent';

const DataComponent = () => {
  return (
    <>
      <div className="user-component">
        <UsersComponent/>
      </div>
      <div className='worldMap'>
        <WorldMapComponent/>
      </div>
    </>
  )
}

export default DataComponent
