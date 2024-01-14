import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const CardLarge = memo(() => {
    return <>
        <div
            className="w-[300px] max-w-sm bg-slate-50 shadow rounded-lg">
            <Image className="rounded-xl hover:scale-110 transition-all duration-300"
                src="/background.jpg"
                alt="product image"
                height={500}
                width={500}
                unoptimized={true}
            />
            <div className="px-5 py-5">
                <div className={'flex flex-row justify-between text-blue-500'}>
                    <p className={'flex flex-row items-center space-x-1'}>
                        <Clock size={20} />
                        <span>2N-3D</span>
                    </p>
                    <p className={'flex flex-row items-center space-x-1'}>
                        <MapPin size={20} />
                        <span>Bali</span>
                    </p>
                </div>
                <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">Goa</h5>
                <p className="text-sm my-1 font-semibold text-slate-400">Starts At $400/-</p>
            </div>
        </div>
    </>
});

CardLarge.displayName = 'CardLarge';

export default CardLarge;