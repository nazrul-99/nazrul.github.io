import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 7; // number of stairs
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
    <>
    {/* Render 7 motion divs
    each has the same anitmation
    and animation is defined by stairAnimation object 
    the delay is calculated dynamically based on its reversed index
    which will create staggerd effect*/}
    {[...Array(7)].map((_, index) => {
        return (<motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-foreground relative"
            />
        ); 
    })}
    </>
    );
};

export default Stairs;