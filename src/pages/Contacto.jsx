import "../pages/styles/Contacto.css"



import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Titulo from "../components/home-Components/Titulo";

const contacto = () => {
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
        <div>
          
        </div>
      </div>
      <div className="colum-2">
      <div className="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label for="nombre">Email:</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label for="nombre">Telefono(Opcional):</label>
            <input type="text"/>
          </div>
          <div className="form-group">
            <label for="nombre">Mensaje(Opcional):</label>
            <input type="text"/>
          </div>
      </div>

      </div>

    </div>
  )
}

export default contacto
