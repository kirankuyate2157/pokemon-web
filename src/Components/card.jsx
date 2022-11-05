import React from 'react'

const PokCard = () => {
    return (
        <div className="w-64 p-4 border bg-yt-100 border-gray-100 rounded-lg shadow-xl hover:shadow-2xl  hover:w-74">
            <div className="">
                <div className="items-center  ">
                    <div className="  bg-gray-200 w-56 h-56 lg:h-64 relative p-1 rounded-t-xl " >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                            alt="poke images"
                            className="w-full h-full " />
                    </div>
                    <div className="mx-3">
                        <h3 className="text-gray-500 italic ">#879</h3>
                        <h2 className="text-black font-bold text-2xl">Ekans</h2>
                        <div className="text-sm justify-start flex flex-wrap gap-1 ">
                            <span className="bg-red-400 rounded px-4 ">fire</span><span className="bg-red-400 rounded px-5 ">fire</span>
                            <span className="bg-green-400 rounded px-5 ">green</span>
                        </div></div>
                </div>
            </div>
        </div>
    )
}
export default PokCard;