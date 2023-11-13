import { useContext, createContext, useState } from "react";
/* import { products } from "../productsDB"; */
import { productsCat } from "../productsCat";

const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [prodSearch, setProdSearch] = useState([]);
  const [totalDevolver, setTotalDevolver] = useState(0)

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAddProduct = (id, cant) => {

    const productFound = productsCat.find((prod) => Number(prod.id) === Number(id));

    const isInCart = cart.find((producto) => producto.id == id);
    




    if (isInCart) {
      setCart(
        cart.map((producto) => {
          if(cant>0){
            producto.quantity=producto.quantity+cant
          }
          return producto;
        })
      );
    } else {
      if(cant>0){
        setCart([...cart, {...productFound, quantity: cant}]);
      }
    }
    
    calcularTotal(id, cant, 0)
      
  };

  const deleteObject = (id) => {

    const updatedCart  = cart.filter((producto) => producto.id !== id);
    
    setCart(updatedCart )

    calcularTotal(id, 0, 1)

  }

  const controlCant = (control, id) => {

    console.log("id:",id)
/* 
    const productFound = cart.find((producto) => producto.id == id); */

/*     let nuevaCantidad = 0

    if(control=="+"){
      nuevaCantidad = productFound.quantity++
    }else if(control=="-"){
      nuevaCantidad = productFound.quantity--
    } */
/*       setCart(
        (prevProductos) =>
        prevProductos.map((producto) =>
          producto.id === id ? { ...producto, quantity: nuevaCantidad } : producto
        )

      ) */
/*         cart.map((producto) => {
          if(control=="+"){
              productFound.quantity++
          }else if (control=="-"){
            if(productFound.quantity>1){
                productFound.quantity--
            }
          }
          return producto;
        }) */
  }

  const calcularTotal = (id, cant, isdelete) => {

    let total=0

    console.log(cant, "numero recibido")

    const isInCart = cart.find((producto) => producto.id == id);

    if(isInCart){
      cart.forEach((producto) => {
        if(cant === 0 && isdelete === 1 ){
          total=0;
        }else{
          total = total + producto.precio * cant;
          setTotalDevolver(total)
        }
      });
    }
    setTotalDevolver(total)
    
    console.log(totalDevolver, "es el total") 
  
  };

  const productsSearch = (prod) => {
    setProdSearch(prod);
  };

  const activateSummary = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };

console.log("cart:",cart)

  return (
    <GlobalContext.Provider
      value={{ handleAddProduct, productsSearch, calcularTotal, activateSummary, deleteObject, controlCant,
      sidebarOpen, totalDevolver , prodSearch, cart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;