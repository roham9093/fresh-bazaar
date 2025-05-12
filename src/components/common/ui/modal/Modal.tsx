import React from "react";
import {Portal} from "@/components";

interface Props {
    children: React.ReactNode;
    title: string;
    closeModal: () => void;
}

export const Modal = ({ children, closeModal, title,  }: Props) => {

    return (
        <Portal closeModal={closeModal}>

            <div  className="flex min-h-full items-center justify-center p-4 text-center">
                <div onClick={(e)=>e.stopPropagation()} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">

                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                        <button
                            onClick={closeModal}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6">
                        {children}
                    </div>

                    {/*<div className="bg-gray-50 px-4 py-3 flex justify-end gap-3">*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        onClick={closeModal}*/}
                    {/*        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"*/}
                    {/*    >*/}
                    {/*        انصراف*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"*/}
                    {/*    >*/}
                    {/*        تایید*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Portal>
    );
};