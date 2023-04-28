import Card from '../Card/Card';//!   "./" = en esta carpeta "../" = sale de la carpeta
import {CardsContainer} from './styledComponents';//! Se importan las modificaciones de las etiquedas
export default function Cards(props) {
   const { characters, onClose } = props;
   return <CardsContainer>
      {
         characters.map((person)=>{//! haga esto con cada personaje
            return (
               <Card 
               //!cada personaje tiene id
            
            id={person.id}
            name={person.name} 
            species={person.species} 
            gender={person.gender} 
            image={person.image} 
            onClose = {onClose}/>
            );
            //! propiedad ={cosa en JS que voy a usar}
         })
      }
   </CardsContainer>;
}
