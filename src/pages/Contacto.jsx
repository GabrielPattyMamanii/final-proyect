import "../pages/styles/Contacto.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Titulo from "../components/home-Components/Titulo";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="contacto">


      <Titulo title={'CONTACTO'}/>
      

      <div className="colums-wrapper">
      <div className="colum-1">
        <div>
          <h2>CONTACTANOS</h2>
          <a href=""><PhoneIcon/> +54 1132557322</a>
          <a href=""><EmailIcon/> gabriel.patty.1991@gmail.com</a>
          <a href=""><LocationOnIcon/> la matanza</a>
        </div>
        <div className="mapa">
          <Map/>
        </div>
      </div>
      <div className="colum-2">
      <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Email:</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Telefono(Opcional):</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Mensaje(Opcional):</label>
            <input type="text"/>
          </div>
      </div>
      </div>

    </div>
  )
}

export default Contacto

const Map = () =>{
  return(
      <div>
        <MapContainer center={[-34.621074, -58.455834]} zoom={14} scrollWheelZoom={false} className='mapa'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-34.621074, -58.455834]}>
    <Popup>
      <h3>Encontranos aca</h3>
    </Popup>
  </Marker>
</MapContainer>
      </div>

  )
}
