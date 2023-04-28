import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {//!destrcituring
   //!Estados:
   const [id,setId]=useState("");
   //!Funciones:
   const handleChange = (evento) => {
      setId(evento.target.value)

   }
   return (
      <div className={style.bar} >
         {/* <input type='search' />
      <button onClick={}>Agregar</button> */}
      <input type='search' className={style.searchInput}
         onChange={handleChange}
      />
      <button className={style.searchButton}
         onClick={()=> onSearch(id)} >
         {/* //! onSearch es una función y necesito un función que ejecute la función */}
         Agregar
      </button>
      {/* //! al dar click ejecutar la arrow function que está en onSearch   onClick siempre pide una función*/}
      </div>
   );
}
