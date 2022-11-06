import React, { useState, useEffect } from 'react';
import axios from "axios";

import PokCard from '../Components/card';
import SearchBanner from '../Components/SearchBanner';



const Pokedex = () => {
    const [PokNames, setPokNames] = useState([]);
    const requestPokemons = async () => {
        const getPokemons = await axios.get("/");
        setPokNames(getPokemons.data.results);
    };
    useEffect(() => {
        requestPokemons();
    }, []);

    return (
        <>
            <SearchBanner />
            <div className="justify-start flex flex-wrap gap-4 ">
                {PokNames.map((Pokemon, id) =>
                    (<PokCard name={Pokemon.name} id={id} />))}
            </div>

        </>
    );
}
export default Pokedex;