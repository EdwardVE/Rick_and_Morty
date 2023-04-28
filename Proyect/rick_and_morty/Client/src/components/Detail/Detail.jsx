//! componenete funcional
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//!Para poder usar estados
// import { useState } from "react";


const Detail = (props) => {
	//!aCÁ LOS ESTADOS
    // const [elemento, actualizador_de_elemento]= useState("como quiera inicializar el elemento, ej: []")//! elemento=[]

    //! aCÁ LAS FUNCIOES
    // actualizador_de_elemento([...elemento, loque voy agregar])
    const params = useParams();
    const [character, setCharacter] = useState({})


    useEffect(()=>{
        //Axios funciona como fetch
        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const KEY = "6a558863cec5.bbf374e338e3a55bebb7";
        axios(`${URL_BASE}/character/${params.detailId}?key=${KEY}`)
        .then(
            (response)=>{
                setCharacter(response.data)
            }
        )
    },[])

return (
    <div>
        <h3>Detalles</h3>
        {//!JS
        character.name?(//! si esto está, hacer: //?TERNARIO pregunta? postiva : negativa

        <div>
        {/* //!Así se llama al elemento */}
        {/* <p>elemento:{elemento}</p> */}
        <img src={character.image} alt="img   " />
        <p>name: {character.name}</p>
        <p>status: {character.status}</p>
        <p>species: {character.species}</p>
        <p>gender: {character.gender}</p>
        {/* //! el ? de abajo le pide que cuando origin llegue, ahí si correr el component */}
        <p>origin: {character.origin?.name}</p>
        </div>


        ):(//!si no está
        <h3>Loading...</h3>
        )

        }

    </div>
);
};
export default Detail;