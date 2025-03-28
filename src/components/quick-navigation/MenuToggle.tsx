import { motion } from "framer-motion";
import ButtonWrapper from "../button-wrapper/ButtonWrapper";
import iconClose from "../../assets/images/icon-close.svg";
import iconOpen from "../../assets/images/icon-open.svg";

interface MenuToggleProps {
    toggleOpen: () => void;
    isOpen: boolean;
}

const MenuToggle = ({ toggleOpen, isOpen }: MenuToggleProps) => {
    return (
        <div className={`relative z-20 ${isOpen ? "" : "gelatine"}`}>
            {isOpen ? (
                <ButtonWrapper onClick={toggleOpen}>
                    <motion.img
                        src={iconClose}
                        className="w-8 h-8"
                        whileHover={{ rotate: "360deg" }} // Rotate effect on hover
                        whileTap={{ rotate: "-360deg" }} // Rotate effect on tap (click)
                        transition={{ duration: 0.4 }}
                    />
                </ButtonWrapper>
            ) : (
                <ButtonWrapper onClick={toggleOpen}>
                    <motion.div
                        className="flex items-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img src={iconOpen} className="w-8 h-8 " />
                        <span className="absolute right-0 transform rotate-[90deg] translate-x-[100%]">
                            More
                        </span>
                    </motion.div>
                </ButtonWrapper>
            )}
        </div>
    );
};

export default MenuToggle;
