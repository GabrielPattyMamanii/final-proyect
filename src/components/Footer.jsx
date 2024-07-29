import { Link } from 'react-router-dom'

/*PAYMENT-CARDS*/
import amex from "../assets/payment-images/amex@2x.png"
import argencard from "../assets/payment-images/argencard@2x.png"
import banelco from "../assets/payment-images/banelco@2x.png"
import cabal from "../assets/payment-images/cabal@2x.png"
import cabaldebit from "../assets/payment-images/cabaldebit@2x.png"
import diners from "../assets/payment-images/diners@2x.png"
import mastercard from "../assets/payment-images/mastercard@2x.png"
import mercadopago from "../assets/payment-images/mercadopago@2x.png"
import pagofacil from "../assets/payment-images/pagofacil@2x.png"
import rapipago from "../assets/payment-images/rapipago@2x.png"
import tarjetanaranja from "../assets/payment-images/tarjeta-naranja@2x.png"
import tarjetashopping from "../assets/payment-images/tarjeta-shopping@2x.png"
import visa from "../assets/payment-images/visa@2x.png"
import visadebit from "../assets/payment-images/cabaldebit@2x.png"

import PaymentCard from '../components/home-Components/PaymentCard'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "../components/styles/Footer.css"

const Footer = () => {
  return (
    <footer>
            <div className="footer-main">
                <div className="navigation-card">
                    <h4>NAVEGACION</h4>
                    <Link className="navigation" to={'/home' }>INICIO</Link>
                    <Link className="navigation" to={'/contacto' }>CONTACTO</Link>
                    <Link className="navigation" to={'/productos' }>PRODUCTOS</Link>
                    <Link className="navigation" to={'/politicaDeDevolucion' }>POLITICA DE DEVOLUCION</Link>
                </div>

                <div className="payment-methods">
                    <h4>MEDIOS DE PAGO</h4>
                    <div className="payments-container">
                        <PaymentCard image={amex}/>
                        <PaymentCard image={argencard}/>
                        <PaymentCard image={banelco}/>
                        <PaymentCard image={cabal}/>
                        <PaymentCard image={cabaldebit}/>
                        <PaymentCard image={diners}/>
                        <PaymentCard image={mastercard}/>
                        <PaymentCard image={mercadopago}/>
                        <PaymentCard image={pagofacil}/>
                        <PaymentCard image={rapipago}/>
                        <PaymentCard image={tarjetanaranja}/>
                        <PaymentCard image={tarjetashopping}/>
                        <PaymentCard image={visa}/>
                        <PaymentCard image={visadebit}/>
                    </div>



                </div>
                    
                <div className="contact">
                    <h4>CONTACTANOS</h4>
                    <a href=""><PhoneIcon/> +54 1132551043</a>
                    <a href=""><EmailIcon/> gabriel.patty.1991@gmail.com</a>
                    <a href=""><LocationOnIcon/> vicente lopez</a>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright BENKA - 2023. Todos los derechos reservados.
                Defensa de las y los consumidores</p>
            </div>
        </footer>
  )
}

export default Footer
