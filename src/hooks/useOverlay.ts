import {useEffect} from "react";

interface Props {
    onClick: () => void;
    isOverflowHidden?: boolean;
}

export function useOverlay({onClick,isOverflowHidden=false}:Props) {
    useEffect(()=> {
        const toggleMenu =  () => {
            onClick()
        }
        document.addEventListener("click",toggleMenu)
        return () => {
            document.removeEventListener("click", toggleMenu)
        }
    },[])

    useEffect(() => {
        if (isOverflowHidden){
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [isOverflowHidden]);
}