import {useState, useEffect} from "react";

import styles from "./animated-scroll.module.css" 

import scroll1 from "@assets/scroll/scroll1.png"; 
import scroll2 from "@assets/scroll/scroll2.png";
import scroll3 from "@assets/scroll/scroll3.png";
import scroll4 from "@assets/scroll/scroll4.png";
import scroll5 from "@assets/scroll/scroll5.png";
import scroll6 from "@assets/scroll/scroll6.png";
import scroll7 from "@assets/scroll/scroll7.png";
import scroll8 from "@assets/scroll/scroll8.png";
import scroll9 from "@assets/scroll/scroll9.png";
import scroll10 from "@assets/scroll/scroll10.png";
import scroll11 from "@assets/scroll/scroll11.png";
import scroll12 from "@assets/scroll/scroll12.png";

// this is absolutely terrible but it's fine for now 
const frames = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7, scroll8, scroll9, scroll10, scroll11, scroll12]; 

const AnimatedScroll = () => {
    // at first, useState(0) assigns 0 to curFrame
    // then, curFrame is linked internally to React
    
    const [frameIndex, setFrameIndex] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    // 3 secs after webpage loaded, do not play animation
    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartAnimation(true);
        }, 3000);

        return () => { 
            clearTimeout(timeout);
        } 
    }, []);

    // plays animation until last frame
    useEffect(() => {
        // if animation isnt loaded yet, return
        if (!startAnimation) return; 

        if (frameIndex === frames.length - 1) return;

        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % frames.length);
        }, 100);

        return () => { 
            clearInterval(interval); 
        }
    }, [startAnimation, frameIndex]);



    return (
        <div>
            <img className={styles.scrollImage} src={frames[frameIndex]} alt="scroll" />
        </div>
    );
};

export default AnimatedScroll; 