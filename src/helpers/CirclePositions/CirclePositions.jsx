import {circlesData} from './CircleData';

const CirclePositions = () => {
  return (
    <>
      {circlesData.map((circle, index) => (
          <div
            key={index}
            className="circle"
            style={{
              top: circle.top,
              left: circle.left,
              backgroundColor: circle.backgroundColor,
              width: circle.width,
              height: circle.height,
              position: "absolute",
              borderRadius: "50%",
              background: circle.style.background,
              boxShadow: circle.style.boxShadow,
            }}
          >
            {circle.content}
          </div>
        ))}
    </>
  )
}

export default CirclePositions
