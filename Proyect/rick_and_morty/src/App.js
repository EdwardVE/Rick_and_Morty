import style from './App.module.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
//import characters from './data.js'
import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App () {
  //! Funciones:
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "6a558863cec5.bbf374e338e3a55bebb7";

    if (characters.find((person)=>person.id ===id)) {//! && => significa SI  encuentro en personas un person.id igual id ROMPe
      return alert("Personaje reperido");
    }
    
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
      .then((data) => {
        if (data.name ) {
          setCharacters((oldChars) => [...oldChars, data]);
          //!eso es igual a setCharacters( [...characters, data]);
        } else {
          alert("No hay personajes con ese ID ");
        }
      })
  }
  const onClose = (id) => {
    //!sirve porque filter no modifica el array original y entrega uno nuevo quitando el que ya estaba
    setCharacters(characters.filter((character)=> character.id !==id))
  }
  //!Estados: useState 
  const[characters, setCharacters]=useState([
    // {
    //   name: 'Morty Smith',
    //   species: 'Human',
    //   gender: 'Male',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    // }
  ])
  //! estado, fun que modifica el estado, valor inicial del estado characters=[]

  // <Nav /> debe que aparecer en todas las rutas.
  // <Cards /> debe aparecer sólo en la ruta /home.
  // <About /> debe aparecer sólo en la ruta /about.
  // <Detail /> debe aparecer sólo en la ruta /detail/:detailId
  
  //!RENDER: useState
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}>

      <Nav onSearch={onSearch} />
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/detail/:detailId' element = {<Detail />} ></Route>

        </Routes>
        
        


      </div>
    </div>
  )
}

export default App
