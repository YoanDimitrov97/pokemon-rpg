import React, { useEffect, useState, useContext } from 'react';
import { Context } from "../../App";
import CharacterBox from './CharacterBox';
import CSS from './CharacterSelection.module.css';
// import io from "socket.io-client";

const CharacterSelection = () => {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useContext(Context).characters;
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('http://localhost:3000/characters');

                const result = await response.json();
                console.log(result);
                setCharacters(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className={CSS.holder}>
            {/* Render your data here */}
            {characters && (
                <ul >
                    {characters.map((character,i) => (
                        <CharacterBox key={i} name={character.name} sprite={character.sprite} colorScheme={character.type[0]}/>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CharacterSelection;