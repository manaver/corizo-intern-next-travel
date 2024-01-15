import ButtonPrimary from "@/components/shared/button-primary";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, IndianRupee } from "lucide-react";


export default function PackageInfo() {
    return <main>
        <section className="flex flex-col justify-end items-center">
            <div
                className="absloute w-[100dvw] brightness-50 mx-0 h-[800px] max-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex flex-col items-center justify-center pb-10"></div>

            <div className="z-10 absolute translate-y-[-100px] w-full flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-around p-3 flex-wrap items-center">
                <p className="text-5xl text-white brightness-125">Goa</p>
                <div>
                    <ButtonPrimary name={'Enquire Here'} />
                </div>
            </div>
        </section>
        <section className="my-10 p-2 min-h-screen w-full flex flex-col lg:flex-row justify-around">
            <div className="left space-y-5 px-10 z-10 w-full">
                <div className="heading flex flex-row flex-wrap space-x-8 items-center justify-around w-full">
                    <div className="space-y-2">
                        <p className="bg-blue-50 p-3 w-fit rounded-full"><Clock size={30} /></p>
                        <p className="text-md flex flex-col text-slate-500">Duration <span>4D-3N</span>
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="bg-blue-50 p-3 w-fit rounded-full"><IndianRupee size={30} /></p>
                        <p className="text-md flex flex-col text-slate-500">Starting Price <span>$400</span></p>
                    </div>
                </div>
                <div className="tabs flex items-center justify-center">
                    <Tabs defaultValue="itinerary" className="flex flex-col w-full">
                        <TabsList className="w-fit mx-auto">
                            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                            <TabsTrigger value="info">Other Info</TabsTrigger>
                        </TabsList>
                        <TabsContent value="itinerary">
                            <Accordion type="single" collapsible>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <AccordionItem key={index}
                                        className="min-w-[200px] w-full"
                                        value={`item-${index + 1}`}>
                                        <AccordionTrigger>Day {index + 1}</AccordionTrigger>
                                        <AccordionContent>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ipsum harum, quaerat cum voluptatum consectetur, inventore iure impedit corrupti possimus est architecto.
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        </TabsContent>
                        <TabsContent value="info">
                            <h4 className="text-xl font-bold my-3">Must Carry</h4>
                            <ul className="list-disc">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quas commodi animi consequatur. Amet similique minima sapiente? Consequatur, eligendi.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quas commodi animi consequatur. Amet similique minima sapiente? Consequatur, eligendi.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quas commodi animi consequatur. Amet similique minima sapiente? Consequatur, eligendi.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quas commodi animi consequatur. Amet similique minima sapiente? Consequatur, eligendi.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quas commodi animi consequatur. Amet similique minima sapiente? Consequatur, eligendi.</li>
                            </ul>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="right w-full sm:max-w-xl my-10 relative py-3 sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Book your Trip Now</h1>
                        </div>
                        <div className="grid  gap-8 grid-cols-1">
                            <div className="mt-5">
                                <div className="form">
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Destination</label>
                                            <input placeholder="Enter Your Destination" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Check in</label>
                                            <input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="date" />
                                        </div>
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Check out</label>
                                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="date"
                                            />
                                        </div>
                                    </div>


                                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Your Location</label>
                                            <input placeholder="Enter your location.." className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" />
                                        </div>
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Type Of Trip
                                            </label>
                                            <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " >
                                                <option value="">Solo Trip</option>
                                                <option value="">Group Trip</option>
                                                <option value="">Buiness Trip</option>
                                            </select>
                                            <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                        </div>
                                    </div>

                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2">Name</label>
                                            <input placeholder="Enter Your Full Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Email</label>
                                            <input placeholder="Enter your email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="email" />
                                        </div>
                                        <div className="w-full flex flex-col mb-3">
                                            <label className="font-semibold text-gray-600 py-2">Phone Number</label>
                                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="number"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                        <label className="font-semibold text-gray-600 py-2">Extra Request</label>
                                        <textarea name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter additional request"></textarea>
                                    </div>

                                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                        <button className="mb-2 md:mb-0 bg-blue-500 px-5 py-2 text-md shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}