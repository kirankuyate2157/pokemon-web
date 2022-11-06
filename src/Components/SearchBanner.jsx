import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
const SearchBanner = () => {
    const [PokSearchName, setPokSearchName] = useState([]);
    console.log(PokSearchName);
    return (
        <div className="m-5 flex gap-10">

            <div className="relative w-1/2 md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  text-gray-500">
                    <FiSearch />
                </div>
                <input type="text" className="bg-gray-50 w-full border focus:outline-none focus:border-reds-500 focus:ring-1 focus:ring-reds-500  border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2" placeholder="Search Names and numbers of pokemons"
                    onChange={(e) => {
                        setPokSearchName(e.target.value);
                    }} />
            </div>
            <button className=" bg-reds-400 rounded-xl px-5   hover:shadow-2xl ">Seaarch</button>
        </div>
    )
}
export default SearchBanner;