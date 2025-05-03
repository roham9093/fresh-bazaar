import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    width: number | string;
    height: number | string;
    className?:string;
}

export const ImageView = ({src,alt,width,height,className}:Props) => {
    return (
        <Image src={src} alt={alt} width={Number(width)} height={Number(height)} className={className ?? ''} />
    );
};
