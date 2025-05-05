import {IconBox} from "@/components";

interface Props {
    rate: number;
}

export const Rating = ({rate}: Props) => {

    let stars = []
    let nutStars = []
    for (let i = 0 ; i < rate; i++) {
        stars.push(<li className="flex"><IconBox icon={"icon-star-full"} size={12}/></li>)
    }
    for (let i = rate ; i < 5; i++) {
        nutStars.push(<li className="flex"><IconBox icon={"icon-star-empty"} size={12}/></li>)
    }

        return (
        <>
            <ul className="flex gap-1">
                {
                    stars
                }
                {
                    nutStars
                }
            </ul>
            <div className="text-xsmall text-gray-500 font-lato">({rate})</div>
        </>
    );
};