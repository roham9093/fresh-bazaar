import Link from "next/link";
import {ImageView} from "@/components";

export const Logo = () => {
    return (
            <Link href={'/'}>
                <ImageView src={"/assets/images/Logo.png"} alt={"logo"} width={242} height={66} className={"w-[117px] lg:w-[242px]"}/>
            </Link>
    );
};
