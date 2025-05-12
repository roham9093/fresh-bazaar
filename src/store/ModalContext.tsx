import React, {createContext, useContext, useEffect, useState} from "react";


interface Props {
    children: React.ReactNode;
}

interface ContextType {
    currentModal:ModalType;
    openModal:(modalName : ModalType)=>void;
    closeModal:()=>void;
}

type ModalType = "register"|"login"|null

 const modalContext = createContext<ContextType>({
    currentModal : null,
    openModal :()=>{},
    closeModal :()=>{},
})



export const useModal = () => useContext(modalContext)


export const ModalContextProvider = ({children}:Props) => {
    const [showModal, setShowModal] = useState<ModalType>(null);
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if(hash.includes('-modal')){
            const modalName = hash.split('-')[0] as ModalType;
            setShowModal(modalName);
        }
    }, []);
    const openModal = (modalName:"register"|"login"|null)=>{
        setShowModal(modalName);
    }

    const closeModal = ()=>{
        setShowModal(null);
    }
    return (
        <modalContext.Provider value={{currentModal : showModal , openModal : openModal , closeModal  : closeModal}}>
            {children}
        </modalContext.Provider>
    )
}