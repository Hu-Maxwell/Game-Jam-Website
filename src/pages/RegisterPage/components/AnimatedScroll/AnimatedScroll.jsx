import {useState, useEffect} from "react";

import styles from "./animated-scroll.module.css" 

// i chatgpted this, but here's all i understand about the code

// import.meta.glob() 
    // returns object where: 
        // keys are filepath
        // values are the imported file
// eager: true

// Object.entries
    // array of key-value pairs
    // ["/src/assets/scroll/1.png", "http://localhost:3000/assets/1.png"], [ next file path, next image url ]

// then this is sorted with .sort
// finally, .map takes only the URLs, which is the actual imported file

const frames = Object.entries(
    import.meta.glob("/src/assets/scroll/*.png", { eager: true, as: "url" })
)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([_, url]) => url);


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