export const transitionConfig = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    exit: { opacity: 0 },
    transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 5,
    },
};

export const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};
