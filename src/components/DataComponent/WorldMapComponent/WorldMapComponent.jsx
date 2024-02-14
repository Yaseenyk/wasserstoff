import React, { useEffect, useState } from "react";
import WorldMap from "../../../helpers/WorldMap/WorldMap";
import "./WordMap.scss";
import ToolTip from "../../../helpers/ToolTip/ToolTip";
import {toolTipDesktopData,toolTipTabletData} from '../../../helpers/ToolTip/ToolTipData';
import { useView } from "../../../context/ViewContext";
const WorldMapComponent = () => {
  const {view}=useView()
  const [toolTipData,setToolTipData] = useState([]);
  useEffect(()=>{
    if(view==='desktop'){
      setToolTipData(toolTipDesktopData)
    }else if(view==='tablet'){
      setToolTipData(toolTipTabletData)
    }

  },[view])
  return (
    <>
      <div>
        <WorldMap />
      </div>
      <>
      {toolTipData.map(({ id, content, info, style, icon ,backgroundColor}) => (
        <ToolTip key={id} content={content} info={info} style={style} icon={icon} backgroundColor={backgroundColor}/>
      ))}
    </>
    </>
  );
};

export default WorldMapComponent;
