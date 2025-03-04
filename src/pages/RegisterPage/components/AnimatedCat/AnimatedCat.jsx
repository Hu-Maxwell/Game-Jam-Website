import {useState, useEffect} from "react";

import styles from "./animated-cat.module.css" 

import catFrame1 from "@assets/catFrame/catFrame1.png"; 
import catFrame2 from "@assets/catFrame/catFrame2.png"; 
import catFrame3 from "@assets/catFrame/catFrame3.png"; 
import catFrame4 from "@assets/catFrame/catFrame4.png"; 
import catFrame5 from "@assets/catFrame/catFrame5.png"; 

// this is absolutely terrible but it's fine for now 
const frames = [catFrame1, catFrame2, catFrame2, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1, catFrame1]; 

const AnimatedCat = () => {
    // at first, useState(0) assigns 0 to curFrame
    // then, curFrame is linked internally to React
    
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // prev is the most recent frame
            setFrameIndex((prev) => (prev + 1) % frames.length); 
        }, 100); 
    
        return () => clearInterval(interval);
    }, []);   

    return (
        <div>
            <img className={styles.animatedCat} src={frames[frameIndex]} alt="Cat" />
        </div>
    );
};

export default AnimatedCat; 