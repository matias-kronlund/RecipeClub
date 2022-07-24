import React from "react";
import "./header.scss";
import { GiKnifeFork } from "react-icons/gi";
import { ImUser } from "react-icons/im";
export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            R<GiKnifeFork className="fork"></GiKnifeFork>C
                        </a>
                    </li>
                    <li>
                        <a href="">Favorites</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li className="profile">
                        <a href="">
                            <ImUser className="profileicon"></ImUser>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="mainText">
                <h1 className="mainLogo">
                    R<GiKnifeFork className="fork"></GiKnifeFork>C
                </h1>
                <h2>Recipe Club</h2>
            </div>
        </header>
    );
}
