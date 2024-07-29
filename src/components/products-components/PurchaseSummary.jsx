/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* import { useState } from 'react'; */
import { useGlobalContext } from '../../context/GlobalContextProvider';
import "../styles/PurchaseSummary.css"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const PurchaseSummary = () => {

  const {anyObjects, activateSummary, cart, deleteObject, totalProductInTheCart, controlCant, finishBuy, totalDevolver, popup, changePopup} = useGlobalContext()
/*   const [selectCant, setSelectCant] = useState() */
  


  return (
    

    <div className="summaryContainer ">
      { anyObjects ?   <div className='nothing'>
        <h1>NADA POR ACA!</h1>
        <p>
          Añade un producto a tu carrito y luego vuelve aqui!!
        </p>
        </div>  : null}
      
      <div className="summary-backgraund">
          <div className="exitSummary">
            <HighlightOffIcon className='HighlightOffIcon' onClick={activateSummary}/>
          </div>
        <div className="summary">
          {
            cart.map(({nombre, precio, categoria, id, quantity})=>(
                <CartProduct
                id={id} 
                key={id} 
                nombre={nombre} 
                precio={precio} 
                categoria={categoria} 
                cantidad={quantity} 
                deleteObject={deleteObject}
                controlCant={controlCant}
                />
              )
            )
          }
        </div>

        { !anyObjects ? 
        <div className='information-buy'>
        <h3>Total: ${totalDevolver}</h3>
        <h4>Cant.de productos: {totalProductInTheCart}</h4>
        <button onClick={()=>finishBuy()}>Comprar</button>
        </div>
        
        :null}
      </div>

      { popup ? <div className='finish-buy-container'>
        <div className='finish-buy'>
          ¡Compra realizada!
          <button onClick={()=>changePopup(1)}>Seguir Comprando</button></div>
        </div>:null}

    </div>
  );
};

export default PurchaseSummary;

const CartProduct = ({id, nombre, precio, categoria, cantidad, deleteObject, controlCant}) => {

  console.log()

return(
  <div className='cartProduct'>
    <div className='container'>
      <div>
        <h5>{nombre}</h5>
        <p>Categoria: {categoria}</p>
      </div>
      <p>${precio}</p>
    </div>
    
    <div className='container'>
      <div>
        <button onClick={() => controlCant("+", id)}>+</button>
        <p>{cantidad}</p>
        <button onClick={() => controlCant("-", id)}>-</button>
      </div>
      <button onClick={() => deleteObject(id)}>Eliminar todos</button>
    </div>
  </div>
)
}