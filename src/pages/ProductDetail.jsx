import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { productsCat } from '../productsCat'
import { Error404 } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'
import "../pages/styles/ProductDetail.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
  const rute = useParams() 

  const productFound = productsCat.find((product) => product.id === Number(rute.id) )

  const {handleAddProduct, handleFastAddProduct} = useGlobalContext()

  const [selectCant, setSelectCant] = useState('');

  const [flowImage, setFlowImage] = useState(0)
  

    const handleCantProduct = (evento) => {
      setSelectCant(evento.target.value); //?????????????ignora el primer numero
     /*  console.log("el nuevo valor de tu SELECTCANT ES:", selectCant) */
      /* console.log("me ejecuto") */
    }



const nextFlow = () => {
  setFlowImage((prevActive) => (prevActive+1) % productFound.image.length)
}


const prevFlow = () => {
  setFlowImage((prevActive) => prevActive === 0 ? productFound.image.length-1 : prevActive -1 )
}

console.log(productFound.image[flowImage])

  return (
    <div className='Product-Detail'>
      {
        productFound 
        ?
        <div className='product-container'>

          <div className="product-image">
            <ArrowBackIosNewIcon className='flowIcon' onClick={nextFlow}/>

            <img src={productFound.image[flowImage]} 
            width={"100%"} height={"100%"}
            />

            <ArrowForwardIosIcon className='flowIcon' onClick={prevFlow}/>
          </div>

          <div className="product-information">
            <h1>{productFound.nombre}</h1>
            <h2>${productFound.precio}</h2>
            
            <div className="cant-container">

              <div className="select-cant">
              <h5>Introducir manualamente</h5>
              <input className= "search-item" type="text" placeholder='Introduzca cantidad' value={selectCant} onChange={handleCantProduct}/> 
              <button onClick={() => handleAddProduct((productFound.id), parseInt(selectCant))}>Añadir</button>
              </div>
              

              <div className="add-by-item">
                <h5>Agregado rapido</h5>  
                <button onClick={()=> handleFastAddProduct((productFound.id))}>Añadir al carrito</button>
              </div>
            </div>

            <div className="description-product">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore explicabo saepe distinctio, deserunt harum natus facilis, 
                magni culpa perferendis nihil quisquam. Totam autem veritatis facere. Quod inventore dicta ab architecto.</p>
            </div>
          </div>

        </div>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
      }
      
    </div>
  )
}

export default ProductDetail