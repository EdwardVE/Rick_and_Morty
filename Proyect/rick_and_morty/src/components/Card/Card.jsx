import style from './Card.module.css'
import { Link } from 'react-router-dom';//!Acá se rompió */


export default function Card(props) {
   return (
      <div className={style.container}>

         <button 
         className= {style.closeButton} 
         onClick={ ()=> {props.onClose(props.id)} }
         > X </button>

         <img  src={props.image} alt="" />
         
         <Link to={`/detail/${props.id}`} 
         ><h2>Name: {props.name}</h2>
         </Link>
         

         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>

      </div>
   );
}
