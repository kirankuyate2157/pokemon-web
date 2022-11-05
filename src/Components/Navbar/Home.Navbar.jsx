import React from 'react'
import { FiMenu, FiSearch } from 'react-icons/fi'
const HomeNavbar = () => {
    return (
        <div className="max-w-5xl mx-auto">

            <nav className="border-gray-200 px-2 ">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="flex">
                        <img className="h-10 mr-3" src="data:image/png;base64,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" alt="hero logo" />
                        <span className="self-center text-lg font-semibold whitespace-nowrap">Pockemon</span>
                    </div>
                    <div className="flex justify-content-between  ">
                        <div className="md:order-2 mx-7">
                            <div className="relative mr-3 md:mr-0 hidden md:block">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  text-gray-500">
                                    <FiSearch />
                                </div>
                                <input type="text" className="bg-gray-50 border focus:outline-none focus:border-reds-500 focus:ring-1 focus:ring-reds-500  border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2" placeholder="Search..." />
                            </div>
                            <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-reds-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <FiMenu />
                            </button>
                        </div>
                        <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a href="#" className=" md:bg-transparent  block pl-3 pr-4 py-2 md:text-gray-600 md:p-0 rounded hover:text-black">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-bold-xl border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 hover:text-black md:p-0">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
};
export default HomeNavbar;