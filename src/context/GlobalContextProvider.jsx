import { useContext, createContext, useState, useEffect } from "react";
/* import { products } from "../productsDB"; */
import { productsCat } from "../productsCat";

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [prodSearch, setProdSearch] = useState([]);
  const [totalDevolver, setTotalDevolver] = useState(0)
  const [totalProductInTheCart, setTotalProductInTheCart] = useState(0)

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [anyObjects, setAnyObjects] = useState(true);
  const [popup, setPopup] = useState(false);

    let total = 0
    let totalProducts = 0
    let firstEjecution = 0


  const handleFastAddProduct = (id) => {
    const productFound = productsCat.find((prod) => Number(prod.id) === Number(id));

    const isInCart = cart.find((producto) => producto.id == id);


    if(isInCart){
      setCart(
        cart.map((producto) => {
          return producto.id === id? {...producto, quantity:producto.quantity+1} : producto
        })
      )
    }else{
      setCart([...cart, {...productFound, quantity:1}]);
    }
  }

  const handleAddProduct = (id, cant) => {

    const productFound = productsCat.find((prod) => Number(prod.id) === Number(id));

    const isInCart = cart.find((producto) => producto.id == id);
    

/*       if (isInCart) {
    // Si el producto ya está en el carrito, actualiza la cantidad
    setCart(
      cart.map((producto) =>
        producto.id === id ? { ...producto, quantity: producto.quantity + cant } : producto
      )
    );
  } else {
    // Si el producto no está en el carrito, agrégalo
    if (cant > 0) {
      setCart([...cart, { ...productFound, quantity: cant }]);
    }
  } */

    if (isInCart) {
      setCart(
        cart.map((producto) => {
            return producto.id === id ? { ...producto, quantity: producto.quantity + cant} : producto
/*             La función map está siendo utilizada para transformar un array. 
            La palabra clave return es necesaria en el bloque de la "arrow function" 
            dentro de map para indicar qué valor debe tener cada elemento transformado 
            del array resultante. En este caso, la función map devuelve un nuevo array 
            donde el producto con el id coincidente tiene su cantidad actualizada, y los 
            demás productos permanecen sin cambios. 
            ES DECIR QUE PARA SETEAR EL "CART(actualizar)".
            CADA VEZ QUE LA FUNCION MAP SE EJECUTA POR CADA PRODUCTO 
            ES NECESARIO DEVOLVER CON LA PALABRA return 
            DE ESTA FORMA SE DEVUELVE AL setCart el array actualizado*/
        })
      );
    } else {
      if(cant>0){
        setCart([...cart, {...productFound, quantity: cant}]);
      }
    }
    
    calcularTotal()
      
  };


  const deleteObject = (id) => {

    const updatedCart  = cart.filter((producto) => producto.id !== id);
    
    /* setCart(updatedCart, () => {calcularTotal()}); */

    setCart(updatedCart);
  };
  
  useEffect(() => {
    calcularTotal();

    if(cart.length>0){
      setAnyObjects(false)
      setPopup(false)
    }else{
      setAnyObjects(true)
    }
    
  }, [cart]); // Se ejecutará cuando el estado de cart se actualice

  /*
    useEffect se utiliza fuera de la función principal para que se ejecute 
    después de que la renderización del componente haya tenido lugar. En React, 
    el código dentro de un componente funcional se ejecuta cada vez que se renderiza 
    el componente. Sin embargo, hay ocasiones en las que necesitas realizar operaciones
    después de que la renderización haya terminado y el DOM se haya actualizado.

    useEffect proporciona un lugar para realizar efectos secundarios en función de 
    los cambios en el estado o las propiedades del componente. Se ejecuta después de 
    cada renderizado del componente, y puedes controlar cuándo se ejecuta especificando 
    dependencias (como el estado o las propiedades) en el array de dependencias.

    En este caso, estamos utilizando useEffect para ejecutar calcularTotal después de 
    que el estado de cart se actualice. ¿Tiene sentido?
    */

      

  const controlCant = (control, id) => {


    const productFound = cart.find((producto) => producto.id == id);

    let nuevaCantidad = 0

    if(control=="+"){
      nuevaCantidad = productFound.quantity++
    }else if(productFound.quantity==1){
      const updatedCart  = cart.filter((producto) => producto.id !== id);
      setCart(updatedCart )
    }else if (control=="-"){
      nuevaCantidad = productFound.quantity--
    }

    setCart((prevProductos) =>
  prevProductos.map((producto) =>
    producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
  )
);

calcularTotal()

  }


  const calcularTotal = () => {
    console.log("se actualiza el total")

    cart.map((producto) => 
    total=total+producto.precio*producto.quantity
    )

    cart.map((producto) => 
    totalProducts=totalProducts+producto.quantity
    )

    setTotalDevolver(total)
    setTotalProductInTheCart(totalProducts)
    
  
  };

  const productsSearch = (prod) => {
    setProdSearch(prod);
  };

  const activateSummary = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const finishBuy = () =>{
    setCart([])
    calcularTotal();
    changePopup()
  }

  const changePopup = (condition) =>{
    setPopup(!popup)
    {condition? setSidebarOpen(false) : null}
  }

console.log("cart:",cart)

  return (
    <GlobalContext.Provider
      value={{ handleAddProduct, productsSearch, calcularTotal, activateSummary, deleteObject, controlCant, finishBuy, changePopup, handleFastAddProduct,
      sidebarOpen, popup, anyObjects, totalDevolver, totalProductInTheCart , prodSearch, cart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;