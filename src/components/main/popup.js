import React from "react";
import "./popupStyle.scss";
import { AiFillCloseCircle } from "react-icons/ai";

function Popup({ recipe, closeFunction }) {
    let hide = true;
    if (Object.keys(recipe).length !== 0) {
        return (
            <div className="rpopup">
                <div className="recipeCont">
                    <AiFillCloseCircle
                        className="close"
                        onClick={closeFunction}
                    ></AiFillCloseCircle>
                    <div className="recipe">
                        <div>
                            <h3>{recipe.name}</h3>

                            <ol>
                                {recipe.steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <img src={recipe.image} alt="" />
                            <h4>Igredients</h4>
                            <ul>
                                {recipe.ingredients.map((ing, index) => (
                                    <li key={index}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
