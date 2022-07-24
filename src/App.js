import "./App.scss";
import Login from "./components/login/Login";
import Header from "./components/main/header";
import FoodCarusel from "./components/main/foodCarusel";
import { useState } from "react";
import Popup from "./components/main/popup";
import { rese } from "./scripts/food";
function App() {
    const [user, setUser] = useState("");
    const [targetRes, settargetRes] = useState({});
    let conasguest = (guestID) => {
        setUser(guestID);
    };
    let closeFunction = () => {
        settargetRes({});
    };
    let popUpRes = (res) => {
        settargetRes(res);
    };
    console.log(user);
    return (
        <div className="App">
            <Login GuestLogin={conasguest} loggedin={user} />
            <Popup recipe={targetRes} closeFunction={closeFunction}></Popup>
            <Header></Header>
            <div className="mainbody">
                <div className="maincontent">
                    <FoodCarusel rese={rese} reseClick={popUpRes}></FoodCarusel>
                </div>
            </div>
        </div>
    );
}

export default App;
