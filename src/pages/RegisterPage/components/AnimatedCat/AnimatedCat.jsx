import {useState, useEffect} from "react";

import styles from "./animated-cat.module.css" 

import catFrame1 from "@assets/register/catFrame/catFrame1.png"; 
import catFrame2 from "@assets/register/catFrame/catFrame2.png"; 
import catFrame3 from "@assets/register/catFrame/catFrame3.png"; 

const frames = [catFrame1, catFrame2, catFrame3, catFrame2]; 

const AnimatedCat = () => {
    // at first, useState(0) assigns 0 to curFrame
    // then, curFrame is linked internally to React
    
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // prev is the most recent frame
            setFrameIndex((prev) => (prev + 1) % frames.length); 
        }, 500); 
    
        return () => clearInterval(interval);
    }, []);   

    return (
        <div>
            <img className={styles.animatedCat} src={frames[frameIndex]} alt="Cat" />
        </div>
    );
};

export default AnimatedCat; 