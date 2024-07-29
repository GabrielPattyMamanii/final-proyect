
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "../components/styles/Moreinformation.css"

const Moreinformation = () => {
  return (
    <section className="more-information">
    <section className="follower-wrapper">
        <div className="subtitle"><h2>SEGUINOS</h2></div>
        <div className="socials-icons">
            <span><InstagramIcon/></span>
            <span><FacebookIcon/></span>
        </div>
    </section>

    <section className='service-container'>

        <div className="service-card">
            <h3><LocalShippingIcon/>ENVIAMOS TU COMPRA</h3>
            <p>Entregas a todo el pais</p>
            </div>

        <div className="service-card">
            <h3><AttachMoneyIcon/>VENTA MAYORISTA</h3>
            <p>Minimo de compra $18.000</p>
            </div>

        <div className="service-card">
            <h3><WhatsAppIcon/>ESCRIBINOS POR WHATSAPP!</h3>
            <p>+54 1132551043</p>
            </div>

    </section>
    </section>
  )
}

export default Moreinformation