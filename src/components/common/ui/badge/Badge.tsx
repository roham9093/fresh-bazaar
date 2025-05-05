interface Props {
    badge: string;
    price: number;
    sale_Price?: number;
}

export const Badge = ({badge='',price,sale_Price}: Props) => {
    return (
        badge.length > 0?
            <div className={`badge 
        ${badge.toLowerCase() === 'hot'
                ? 'badge--hot'
                : badge.toLowerCase() === 'sale'
                    ? 'badge--sale'
                    : badge.toLowerCase() === 'new'
                        ? 'bg-cyan-500'
                        : ''}
         absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{badge}</div>
            : (sale_Price ?
               <div className={`badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>
                   -{Math.round(((price - sale_Price) / price) * 100)}%
               </div>
                : <></>
            )

    );
};