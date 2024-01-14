import PopularPackages from "@/components/cards/popular-packages";
import {Facebook, Github, Instagram, MonitorCheck, Percent, Phone, Wallet, X} from "lucide-react";


export default function Home() {

    return (
        <main className="overflow-hidden">
            <section className="flex flex-col justify-end items-center">
                <div
                    className="w-[100dvw] mx-0 h-[800px] max-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex flex-col items-center justify-center pb-10">
                    <div
                        className="text-white space-y-5 text-center bg-blue-900 bg-opacity-65 p-10 rounded-xl">
                        <p className="text-md sm:text-2xl">Discover Amazing Destinatoins, Live Fully</p>
                        <h1 className="text-4xl sm:text-6xl font-bold">Explore the World!</h1>
                        <p className="text-xs sm:text-sm font-bold">Exclusive Offers Tailored Just for You</p>
                    </div>
                </div>
            </section>
            <section className="my-10 p-5 min-h-screen">
                <PopularPackages/>
            </section>
            <section className="my-10 p-5 flex flex-row flex-wrap justify-center items-center">
                <div className="flex flex-col space-y-5 bg-white p-6 border-[1px] rounded-xl m-3 w-fit">
                    <div className="icon bg-blue-200 p-2 rounded-xl text-blue-800 w-fit">
                        <Wallet/>
                    </div>
                    <div className="content max-w-[200px] text-slate-400 text-xs">
                        <h5 className="text-xl font-bold text-slate-700 mb-1">Best Price</h5>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 bg-white p-6 border-[1px] rounded-xl m-3 w-fit">
                    <div className="icon bg-pink-200 p-2 rounded-xl text-pink-800 w-fit">
                        <MonitorCheck/>
                    </div>
                    <div className="content max-w-[200px] text-slate-400 text-xs">
                        <h5 className="text-xl font-bold text-slate-700 mb-1">Online payment</h5>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 bg-white p-6 border-[1px] rounded-xl m-3 w-fit">
                    <div className="icon bg-yellow-200 p-2 rounded-xl text-yellow-800 w-fit">
                        <Percent/>
                    </div>
                    <div className="content max-w-[200px] text-slate-400 text-xs">
                        <h5 className="text-xl font-bold text-slate-700 mb-1">Free cancellation</h5>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 bg-white p-6 border-[1px] rounded-xl m-3 w-fit">
                    <div className="icon bg-green-200 p-2 rounded-xl text-green-800 w-fit">
                        <Phone/>
                    </div>
                    <div className="content max-w-[200px] text-slate-400 text-xs">
                        <h5 className="text-xl font-bold text-slate-700 mb-1">24 hours support</h5>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
            </section>

            <footer className="relative bg-slate-50 pt-8 pb-6">
                <div className="px-4 text-slate-600 flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex flex-row">
                            <button
                                className="bg-white flex text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <X size={20}/>
                            </button>
                            <button
                                className="bg-white flex text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <Facebook size={20}/>
                            </button>
                            <button
                                className="bg-white flex text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <Instagram size={20}/>
                            </button>
                            <button
                                className="bg-white flex text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button">
                                <Github size={20}/>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://www.creative-tim.com/presentation?ref=njs-profile">About
                                            Us</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://blog.creative-tim.com?ref=njs-profile">Blogs</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Other Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT
                                            License</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://creative-tim.com/privacy?ref=njs-profile">Privacy
                                            Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}
