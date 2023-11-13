/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* import { useState } from 'react'; */
import { useGlobalContext } from '../../context/GlobalContextProvider';
import "../styles/PurchaseSummary.css"

const PurchaseSummary = () => {

  const {activateSummary, cart, deleteObject, controlCant} = useGlobalContext()
/*   const [selectCant, setSelectCant] = useState() */
  


  return (
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
      <button onClick={activateSummary}>Cerrar</button>
      
    </div>
  );
};

export default PurchaseSummary;

const CartProduct = ({id, nombre, precio, categoria, cantidad, deleteObject, controlCant}) => {

  console.log()

return(
  <div>
    <h1>{nombre}</h1>
    <p>{precio}</p>
    <p>{categoria}</p>
    <p>{cantidad}</p>
    <button onClick={() => controlCant("+", id)}>+</button>
    <button onClick={() => controlCant("-", id)}>-</button>
    <button onClick={() => deleteObject(id)}>Eliminar todos</button>
  </div>
)
}