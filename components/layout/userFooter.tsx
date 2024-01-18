
import { Facebook, Github, Instagram, X } from "lucide-react";

export default function UserFooter() {
    return <>
        <footer className="relative bg-slate-50 pt-8 pb-6">
            <div className="px-4 text-slate-600 flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                    <h4 className="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
                    <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                        Find us on any of these platforms, we respond 1-2 business days.
                    </h5>
                    <div className="mt-6 lg:mb-0 mb-6 flex flex-row">
                        <button
                            className="bg-white flex text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <X size={20} />
                        </button>
                        <button
                            className="bg-white flex text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <Facebook size={20} />
                        </button>
                        <button
                            className="bg-white flex text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <Instagram size={20} />
                        </button>
                        <button
                            className="bg-white flex text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button">
                            <Github size={20} />
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
                                        href="#" >
                                        About Us</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Blogs</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Github</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Other Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >MIT
                                        License</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Privacy
                                        Policy</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                        href="#" >Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}