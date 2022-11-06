import React, { useState, useEffect } from 'react';
import axios from "axios";

import PokCard from '../Components/card';
export const PokContext = React.createContext();


const Pokedex = () => {
    const [PokNames, setPokNames] = useState([]);
    const requestPokemons = async () => {
        const getPokemons = await axios.get("/");
        setPokNames(getPokemons.data.results);
    };
    useEffect(() => {
        requestPokemons();
    }, []);
    // console.log(PokNames);
    // const [PokImages, setPokImages] = useState([]);
    // useEffect(() => {
    //     PokNames.forEach(name => {
    //         const requestPokImages = async () => {
    //             const getPokImages = await axios.get(`/${name.name}`);
    //             setPokImages(getPokImages.data.sprites.front_default);
    //         };
    //         requestPokImages();
    //     });
    // }, []);
    // console.log(PokImages);    
    return (
        <>

            <div className="justify-start flex flex-wrap gap-4 ">
                {PokNames.map((Pokemon, id) =>
                    (<PokCard name={Pokemon.name} id={id} />))}
            </div>

        </>
    );
}
export default Pokedex;