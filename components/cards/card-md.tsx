'use client'

import Image from "next/image";
import { memo } from "react";

const CardSmall = memo(() => {

    return <>
        <div className="bg-slate-100 border-[1px] duration-200 hover:drop-shadow rounded-full w-fit p-3 flex flex-row space-x-5 items-center m-3 h-[100px]  hover:shadow-lg transition ease-in-out delay-150 hover:scale-105 max-w-[250px]">
            <div className="image max-w-[80px]">
                <Image
                    src={'/background.jpg'}
                    alt="fever"
                    height={200}
                    width={200}
                    className="h-[80px] min-w-[80px] rounded-full"
                />
            </div>
            <div className="content flex flex-col overflow-hidden">
                <h6 className="text-md font-bold whitespace-nowrap">Goa</h6>
                <p className="text-xs">
                    Lorem ipsum dolor sit...
                </p>
            </div>
        </div>
    </>
});


CardSmall.displayName = 'CardSmall';

export default CardSmall;