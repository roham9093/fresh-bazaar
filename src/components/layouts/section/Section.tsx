import React from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Section = ({className='',children}: Props) => {
    return (
        <section className={ twMerge('container mb-[68px]', className)}>
            {children}
        </section>
    );
};