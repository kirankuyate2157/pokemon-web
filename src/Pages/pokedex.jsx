import React, { useState } from "react";
import PokCard from '../Components/card';
export const PokContext = React.createContext();


const Pokedex = () => {
    return (
        <>
            <div className="justify-start flex flex-wrap gap-4 "><PokCard /><PokCard /><PokCard /><PokCard /><PokCard /><PokCard /><PokCard /></div>

        </>
    );
}
export default Pokedex;