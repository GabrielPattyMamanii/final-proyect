import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { productsCat } from '../productsCat'
import { Error404 } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductDetail = () => {
  /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
  const rute = useParams() 
  const productFound = productsCat.find((product) => product.id === Number(rute.id) )

  const {handleAddProduct} = useGlobalContext()

  const [selectCant, setSelectCant] = useState('');
  

    const handleCantProduct = (evento) => {
      setSelectCant(evento.target.value); //?????????????ignora el primer numero
     /*  console.log("el nuevo valor de tu SELECTCANT ES:", selectCant) */
      /* console.log("me ejecuto") */
    }


  return (
    <div>
      {
        productFound 
        ?
        <div className='product-container'>
          <h2>{productFound.nombre}</h2>
          <img src={productFound.image} width={"300px"} height={"300px"}/>
          <span>Precio: ${productFound.precio}</span>
          <div className="cant-container">
            <input className= "search-item" type="text" placeholder='Introduzca cantidad' value={selectCant} onChange={handleCantProduct}/> 
            <button onClick={() => handleAddProduct((productFound.id), parseInt(selectCant))}>Añadir al carrito</button>
          </div>
          
        </div>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
      }
      
    </div>
  )
}

export default ProductDetail