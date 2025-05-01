
import React from "react";
import {Footer, Header} from "@/components";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({children}:Props) => {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

