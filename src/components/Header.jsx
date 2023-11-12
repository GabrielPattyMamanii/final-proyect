import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContextProvider";
import logo from '../assets/logo.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import "../components/styles/Header.css"
import {productsCat} from "../productsCat"


const Header = () => {
  const [searchString, setSearchString] = useState("");
  const { productsSearch, totalDevolver, activateSummary } = useGlobalContext();
  const [listaProductos, setListaProductos] = useState(productsCat);
  


  const handleFilterProducto = (evento) => {
    setSearchString(evento.target.value);
  };

  useEffect(() => {


    setListaProductos(
      productsCat.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchString.toLowerCase())
      )
    );
    productsSearch(listaProductos);
  }, [searchString]);



  return (
    <header className='header-container'>
          <div className="nav-head-main">
            <div className='logo'>
              <img src={logo} alt="" />
              </div>
            <div className="targets-navigation">
            <Link className="navigation" to={'/home'}>INICIO</Link>
            <Link className="navigation" to={'/contacto'}>CONTACTO</Link>
            <Link className="navigation" to={'/productos'}>PRODUCTOS</Link>
            <Link className="navigation" to={'/politicaDeDevolucion'}>POLITICA DE DEVOLUCION</Link>
            </div>
            <div className='middle-container'>
              <div className="Search-input">
                
                <input className="search-item" type="text" placeholder='Buscar' value={searchString} onChange={handleFilterProducto}/>
                <SearchIcon className='icon-search'/>
                </div>
              <div className="card-widget" onClick={activateSummary}>
                <ShoppingCartIcon className='ShoppingCartIcon'/>
                <div className="cant-items">0</div>
                <div className="price-total">${totalDevolver}</div>
              </div>
            </div>
          </div>
          
    </header>
  )
}

export default Header