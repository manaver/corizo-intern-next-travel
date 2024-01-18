import DestinationsCarousal from "@/components/carousal/destinations";
import ButtonPrimary from "@/components/shared/button-primary";
import ShowPopularPackages from "./get-packages";

export default async function Home() {

    return (
        <main className="overflow-hidden">
            <section className="flex flex-col justify-end items-center">
                <div
                    className="w-[100dvw] brightness-75 mx-0 h-[800px] max-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex flex-col items-center justify-center pb-10">
                </div>
                <div
                    className="absolute translate-y-[-100px] text-white space-y-5 text-center bg-blue-900 bg-opacity-30 p-10 rounded-xl">
                    <p className="text-md sm:text-2xl">Discover Amazing Destinatoins, Live Fully</p>
                    <h1 className="text-4xl sm:text-6xl font-bold">Explore the World!</h1>
                    <p className="text-xs sm:text-sm font-bold">Exclusive Offers Tailored Just for You</p>
                    <ButtonPrimary name={'Find Your TRIP'} />
                </div>
            </section>

            <section className="my-10 p-5">
                <DestinationsCarousal />
            </section>

            <section className="my-10 p-5">
                <ShowPopularPackages />
            </section>
        </main>
    )
}
