import {createPortal} from "react-dom";
import React, {useEffect} from "react";

interface Props {
    children:React.ReactNode;
    closeModal: () => void;
}



export const Portal = ({children,closeModal}: Props) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, []);
    return createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={closeModal}
            >
                {children}
            </div>
        </div>,
        document.getElementById("portal")!
    );
};