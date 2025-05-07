import Image from "next/image";

interface Props {
    src?: string | null;
    alt: string;
    width: number | string;
    height: number | string;
    className?:string;
}

export const ImageView = ({src='',alt,width,height,className}:Props) => {

    const imageSrc = src ? (src.startsWith('/uploads') ? 'https://nest.navaxcollege.com'+src : src) : '';


     return (
            <Image src={imageSrc} alt={alt} width={Number(width)} height={Number(height)} className={className ?? ''} />
     );
};
