import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

const CardLarge = memo(({ data }: any) => {
    return <>
        <div
            className="w-[300px] max-w-sm bg-slate-50 shadow rounded-lg">
            <Image className="rounded-xl hover:scale-110 transition-all duration-300"
                src={data?.images[0]?.file?.url}
                alt="product image"
                height={500}
                width={500}
                unoptimized={true}
            />
            {/* <AddToWishlist product={data} /> */}
            <div className="px-5 py-5">
                <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
                <p className="text-sm my-1 font-semibold text-slate-600 flex flex-row flex-wrap">
                    <p className="whitespace-nowrap me-2">Starts At:</p>
                    <p className="space-x-2">
                        {data?.sale_price ?
                            <>
                                <span className="">{formatCurrency({ amount: data?.sale_price })}&nbsp;/-</span>
                                <span className="line-through">{formatCurrency({ amount: data?.price })}/-</span>
                            </>
                            :
                            <span>{formatCurrency({ amount: data?.price })}/-</span>
                        }
                    </p>
                </p>
            </div>
        </div>
    </>
});

CardLarge.displayName = 'CardLarge';

export default CardLarge;