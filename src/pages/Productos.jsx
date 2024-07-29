import { useState, useEffect } from "react"

import Titulo from "../components/home-Components/Titulo"
import Itemcard from "../components/products-components/Itemcard"
import { useGlobalContext } from "../context/GlobalContextProvider"
import {productsCat} from "../productsCat"
import "../pages/styles/Productos.css"

const Productos = () => {
  const { productsSearch, prodSearch } = useGlobalContext();


  const [viewFilter, setViewFilter] = useState(false)

  const [searchString, setSearchString] = useState("");
/*    const [listaProductos, setListaProductos] = useState(productsCat);  */

  const handleFilterProducto = (evento) => {
    setSearchString(evento);
    setViewFilter(true)
  };

  const restartCatalog = () => {
      productsSearch(productsCat)
      setViewFilter(false)
  };

  useEffect(() => {
    const productosFiltrados = productsCat.filter((producto) =>
      producto.categoria.toLowerCase().includes(searchString.toLowerCase())
    );

    window.scrollTo(0, 0)

    productsSearch(productosFiltrados);
  }, [searchString]);


  return (
    <div className={`productos`}>
      
      <Titulo title={'PRODUCTOS'}/>

      <div className="products">
        <div className="category-container">
          <h4>CATEGORIAS</h4>
          
          <a onClick={()=>handleFilterProducto('pantalones')}>Pantalones</a>
          <a onClick={()=>handleFilterProducto('remeras')}>Remeras</a>
          <a onClick={()=>handleFilterProducto('camperas')}>Camperas</a>
          <a onClick={()=>handleFilterProducto('calzas')}>Calzas</a>
          <a onClick={()=>handleFilterProducto('termicos')}>Termicos</a>
          <a onClick={()=>handleFilterProducto('lenceria')}>Lenceria</a>
          { viewFilter ? 
          <a onClick={restartCatalog}>Eliminar filtro </a>
          : null }
        </div>

        <div className="catalog">
          {
            prodSearch.map(({id,image, categoria, nombre, precio})=>(
              <Itemcard key={id} id={id} categoria={categoria} nombre={nombre} precio={precio} image={image[0]}/>
              
            ))
            }
        </div>
      </div>

    <div>
    
    </div>

    </div>
  )
}

export default Productos
