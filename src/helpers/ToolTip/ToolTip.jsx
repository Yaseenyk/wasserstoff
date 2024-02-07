import './ToolTip.scss'
const ToolTip = ({ content, info, style,icon,backgroundColor }) => {
    const iconStyle = {
        backgroundColor:backgroundColor,
    }
  return (
    <div className="tooltip" style={style}>
    <div className="icon" style={iconStyle}>
      {icon}
    </div>
    <div className="renderContent">
      <div className="Content">{content}</div>
      <div className="renderInfo">{info}</div>
    </div>
  </div>
  )
}

export default ToolTip
