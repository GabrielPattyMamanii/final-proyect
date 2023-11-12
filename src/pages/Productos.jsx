/* import React, { useState } from "react"
 */
import Titulo from "../components/home-Components/Titulo"
import Itemcard from "../components/products-components/Itemcard"
import { useGlobalContext } from "../context/GlobalContextProvider"
import "../pages/styles/Productos.css"

/* import {productsCat} from "../productsCat" */

const productos = () => {
  const { prodSearch } = useGlobalContext();


  return (
    <div className={`productos`}>
      
      <Titulo title={'PRODUCTOS'}/>

      <div className="products">
        <div className="category-container">
          <h4>CATEGORIAS</h4>
          <a href="">Pantalones</a>
          <a href="">Remeras</a>
          <a href="">Camperas</a>
          <a href="">Calzas</a>
          <a href="">Termicos</a>
          <a href="">Lenceria</a>
        </div>

        <div className="catalog">
          {
            prodSearch.map(({id,image, categoria, nombre, precio})=>(
              <Itemcard key={id} id={id} categoria={categoria} nombre={nombre} precio={precio} image={image}/>
              
            ))
            }
        </div>
      </div>

    <div>
    
    </div>

    </div>
  )
}

export default productos




/* const DateProduct = () => {
  return(
    <div>
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

  )
} */
/*const CircleColors = () => {
  return(



  )
}*/