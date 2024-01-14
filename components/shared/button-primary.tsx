interface Item {
    name: string;
}

export default function ButtonPrimary(item: Item) {
    return <>
        <div className="mx-auto h-16 w-64 flex justify-center items-center">
            <div className="h-16 w-64 bg-blue-600 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <p className="text-center text-white font-semibold z-10 pointer-events-none">{item?.name}</p>
        </div>
    </>
}