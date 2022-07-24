import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./caruselStyle.scss";

export default function FoodCarusel({ rese, reseClick }) {
    console.log(rese);
    const [Cwidth, setCwidth] = useState(0);
    const Carusel = useRef();
    useEffect(() => {
        setCwidth(Carusel.current.scrollWidth - Carusel.current.offsetWidth);
    }, []);
    return (
        <div className="Carusel">
            <h3>Featured</h3>
            <motion.div ref={Carusel} className="caruselouter">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -Cwidth }}
                    className="caruselinner"
                >
                    {rese.map((res, index) => (
                        <motion.div key={index} className="caruselItem">
                            <p
                                onClick={() => {
                                    reseClick(res);
                                }}
                            >
                                {res.name}
                            </p>
                            <img src={res.image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
