import { useEffect, useState } from "react";
import { games } from "./gameData";
import "./GameDisplay.scss";
import { motion } from "framer-motion";
import { TbArrowsCross } from "react-icons/tb";
const GameDisplayComponent = () => {
  const [popup, setPopup] = useState(false);
  const [gameDataId, setGameDataId] = useState(null);
  const [gameData, setGameData] = useState(null);
  const handleData = (id) => {
    setPopup(true);
    setGameDataId(id);
  };

  const handleClosePopup = () => {
    setPopup(false);
    setGameDataId(null);
    setGameData(null);
  };
  useEffect(() => {
    const filteredData = games.filter((id) => id.id === gameDataId);
    setGameData(filteredData);
  }, [gameDataId]);
  return (
    <>
      {games.map((data) => (
        <motion.div
          whileHover={{ scale: 1.03, cursor: "pointer" }}
          style={{ backgroundImage: `url(${data.backgroundImg})` }}
          className="gamesCard"
          key={data.id}
          onClick={() => handleData(data.id)}
        >
          <div className="gaming-card-inner">
            <div className="Title">{data.title}</div>
            <div className="Ratings">Ratings : {data.rating} Stars</div>
            <div className="Date">Release Date : {data.offerEnds}</div>
            <div className="Category">Category : {data.category}</div>
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#383874" }}
              className="Rupees"
            >
              Price : {data.rupees} &#x20B9;
            </motion.div>
          </div>
          <div className="imgInner">
            <img src={data.pngImg} alt={data.title} />
          </div>
        </motion.div>
      ))}
      {popup &&
        gameData.map((data) => (
          <div
            className="PopupDiv gamesCard"
            style={{ backgroundImage: `url(${data.backgroundImg})` }}
            key={data.id}
          >
            <div className="TopContainer">
              <TbArrowsCross onClick={handleClosePopup} />
            </div>
            <div className="mainContainer">
              <div className="leftPopupContainer">
                <div className="Title">{data.title}</div>
                <div className="Desc">
                  <span>Description :</span>
                  <p>{data.description}</p>
                </div>
                <div className="Ratings">
                  <span>Ratings : </span>
                  {data.rating} <span>Stars</span>
                </div>
                <div className="Date">
                  <span>Release Date :</span> {data.offerEnds}
                </div>
                <div className="Category">
                  <span>Category :</span> {data.category}
                </div>
              </div>
              <div
                className="rightPopupContainer"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="ImgBackground"
                  style={{
                    backgroundImage: `url(${data.backgroundImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "10px",
                  }}
                ></div>

                <div className="Rupees">
                  <motion.div
                    className="Span-inner"
                    whileHover={{
                      scale: 1.05,
                      border: "2px solid #383874",
                    }}
                  >
                    <span>Price : </span>
                    <div className="PriceDiv">{data.rupees} &#x20B9;</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default GameDisplayComponent;
