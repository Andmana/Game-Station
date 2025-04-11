import { useNavigate } from "react-router-dom";

import CButton from "../common/CButton";
import { IGame } from "../../types/IGame";

const GameHeader = ({ data }: { data?: IGame }) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center text-4xl font-black">
            <CButton
                onClick={() => {
                    navigate("/shop");
                }}
                customClass="!text-3xl !font-bold"
            >
                Back
            </CButton>
            {data && <div className="flex-1 text-end">{data.name}</div>}
        </div>
    );
};

export default GameHeader;
