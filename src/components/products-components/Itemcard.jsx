/* eslint-disable react/prop-types */
{/*import { useState } from "react"*/}
{/*import image from "../products-components/remera.webp"*/}

import "../styles/Itemcard.css"
import { Link } from "react-router-dom";

const Itemcard = ({image, id, nombre, precio}) => {

/*   const llamar = () => {
    ejecutarFuncion(categoria, precio, nombre)
  } */

  console.log("id:",id)
  return (
    <div>
      <div className="itemcard">

        <div className="image">
          <img src={image} style={{width:"171.625px", height:"100%"}} />
        </div>

        <div className="info-card">
          <h4>{nombre}</h4>
          <span>${precio}</span>
          {/* <button onClick={llamar} id="viewmore">Ver mas</button> */}
          <button><Link className="link" to={"/detail/" + id}>Ver Mas</Link></button>

        </div>
      </div>
    </div>

  )
}
export default Itemcard


/* const ModalWindow = ({image, id, nombre, precio}) =>{

  <>
   
    <div className="propiedades">
      <h1></h1>
      <h4>categoria</h4>
      <span>precio</span>

      <div className="colors">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
      </div>

      <div className="buttons">
        <button id="viewmore">AGREGAR AL CARRITO</button>
        <button>AGREGAR TODAS LAS VARIANTES AL CARRITO</button>
        <button>BORRAR TODAS LAS VARIANTES DEL CARRITO</button>
      </div>
    </div>
  </>

} */

