import iconClose from "../../assets/images/icon-close.svg";
import iconOpen from "../../assets/images/icon-open.svg";
import CButton from "../common/CButton";

interface NavToggleProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const NavToggle = ({ isOpen, toggleOpen }: NavToggleProps) => {
    return (
        <>
            {isOpen ? (
                <CButton onClick={toggleOpen}>
                    <img src={iconClose} className="w-8 h-8 " alt="" />
                </CButton>
            ) : (
                <CButton onClick={toggleOpen}>
                    <div className="gelatine flex items-center">
                        <img src={iconOpen} className="w-8 h-8 " alt="" />
                        <span className="absolute right-0 transform rotate-[90deg] translate-x-[100%]">
                            More
                        </span>
                    </div>
                </CButton>
            )}
        </>
    );
};

export default NavToggle;
