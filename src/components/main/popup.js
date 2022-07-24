import React from "react";
import "./popupStyle.scss";
import { AiFillCloseCircle } from "react-icons/ai";

function Popup({ recipe, closeFunction }) {
    let hide = true;
    if (Object.keys(recipe).length !== 0) hide = false;
    return (
        <div className="rpopup" hidden={hide}>
            <div className="recipeCont">
                <AiFillCloseCircle
                    className="close"
                    onClick={closeFunction}
                ></AiFillCloseCircle>
                <div className="recipe"></div>
            </div>
        </div>
    );
}

export default Popup;
