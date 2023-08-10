import React, { useContext } from "react";
import "./CSS/Audio.css";
import { AiFillSound } from "react-icons/ai";
import { InfoContext } from "./InfoContext";

const Audio = () => {
  const {
    state: { modalOpen },
    actions: { setModalOpen },
  } = useContext(InfoContext);

  const checkModal = () => {
    if (modalOpen !== "audio") {
      return;
    } else {
      return setModalOpen("audio");
    }
  };

  return (
    <>
      <div className="audio-dropdown">
        <button className="audio" onClick={setModalOpen("audio")}>
          <AiFillSound />
        </button>
        {modalOpen === "audio" && (
          <div
            className="audio-dropdown-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <input type="range" min="0" max="100" value="50"></input>
          </div>
        )}
      </div>
    </>
  );
};

export default Audio;

// return (
//   <>
//     <div className="audio-dropdown">
//       <button className="audio" onClick={setModalOpen(true)}>
//         <AiFillSound />
//       </button>
//       {modalOpen ? (
//         <div className="audio-dropdown-menu">
//           <input type="range" min="0" max="100" value="50"></input>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   </>
// );
