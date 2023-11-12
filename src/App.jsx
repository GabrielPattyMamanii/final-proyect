
import "./App.css";

import PageRouter from './router/PageRouter'
import { Header, PurchaseSummary } from './components'
import { Footer } from './components'
import { Moreinformation } from './components'
import { useGlobalContext } from "./context/GlobalContextProvider";


function App() {

  const {sidebarOpen} = useGlobalContext()


  
  return (
    <>
        <Header/>
        { sidebarOpen? <PurchaseSummary/> : null }
        <PageRouter/>
        <Moreinformation/>
        <Footer/>
    </>
  )
}

export default App
