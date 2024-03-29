import React from "react";
import WorldMap from "../../../helpers/WorldMap/WorldMap";
import "./WordMap.scss";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import ToolTip from "../../../helpers/ToolTip/ToolTip";
import { RiBuilding2Line } from "react-icons/ri";
import { LuBuilding } from "react-icons/lu";
import { FaBuildingFlag } from "react-icons/fa6";
import { GiGreatPyramid } from "react-icons/gi";
import { GiIndianPalace } from "react-icons/gi";
const WorldMapComponent = () => {
  const tooltipsData = [
    { 
      id: 1, 
      content: 'Berlin', 
      info: '12,320,300', 
      style: { 
        position: 'absolute', 
        top: '5vh', 
        left: '38vw', 
      },
      backgroundColor:'#7BDDA2', 
      icon: <MdOutlineMapsHomeWork />
    },
    { 
      id: 2, 
      content: 'QueensLand', 
      info: '8,623,000', 
      style: { 
        position: 'absolute', 
        top: '50vh', 
        left: '60vw', 
      },
      backgroundColor:'#669aff',
      icon: <LuBuilding />
    },
    { 
      id: 3, 
      content: 'Manaus', 
      info: '37,833,000', 
      style: { 
        position: 'absolute', 
        top: '35vh', 
        left: '15vw', 
      },
      backgroundColor:'#f5a044', 
      icon: <RiBuilding2Line />
    },
    { 
      id: 4, 
      content: 'Giza', 
      info: '8,982,000', 
      style: { 
        position: 'absolute', 
        top: '200px', 
        left: '36.8vw', 
      },
      backgroundColor:' #383874',
      icon: <GiGreatPyramid />
    },
    { 
      id: 5, 
      content: 'Chicago', 
      info: '2,148,000', 
      style: { 
        position: 'absolute', 
        top: '8vh', 
        left: '250px', 
      },
      backgroundColor:'#669AFF',
      icon: <FaBuildingFlag />
    },
    { 
      id: 6, 
      content: 'Mumbai', 
      info: '2,148,000', 
      style: { 
        position: 'absolute', 
        top: '22vh', 
        left: '47vw', 
      },
      backgroundColor:'#E8A5FF',
      icon: <GiIndianPalace />
    },
  ];
  return (
    <>
      <div>
        <WorldMap />
      </div>
      <>
      {tooltipsData.map(({ id, content, info, style, icon ,backgroundColor}) => (
        <ToolTip key={id} content={content} info={info} style={style} icon={icon} backgroundColor={backgroundColor}/>
      ))}
    </>
    </>
  );
};

export default WorldMapComponent;
