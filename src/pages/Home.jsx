import { products } from '../productsDB'
import { Link } from 'react-router-dom'
import CardRedirect from '../components/home-Components/CardRedirect'
import "../pages/styles/Home.css"
import { ButtonViewmore } from '../components'



const Home = () => {
    
  return (
    <div>
        
        <main>
            <section className="products-section-fast">
                <div className="fast-direction">
                <   CardRedirect title="buzos"/>
                    <CardRedirect title="buzos"/>
                    <CardRedirect title="buzos"/>
                </div>
                <div className="all-products--button">
                    <ButtonViewmore text="VER TODOS LOS PRODUCTOS"/>
                </div>
            </section>
            

            <section className="login-for-page">
                <div className="newsletter">
                    <h2>NUESTRO NEWSLETTER</h2>
                    <p>Inscribite para recibir nuestras últimas novedades.</p>
                    <div className="boxes">
                        <div className="input-box">
                            <input type="text" placeholder='Nombre'/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Tu-Email'/>
                        </div>
                        <ButtonViewmore text="INSCRIBIRSE"/>
                    </div>
                </div>
            </section>

 {/*
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
*/}

        </main>




        {/*
        <h1>Bienvenido a Apple Store</h1>
        <div>
            {
                products.map(({categoria, nombre, id, precio}) =>(
                    <Card categoria={categoria} nombre={nombre} id={id} precio={precio} key={id}/>
                ))
            }
        </div>
        */}
    </div>
  )
}

export default Home


const Card = ({categoria, nombre, precio, id}) => {
    return (
        <div>
            <h3>{categoria}</h3>
            <h2>{nombre}</h2>
            <span>${precio}</span>
            <Link to={'/detail/' + id }>Ver detalle</Link>
        </div>
    )
}

export {Card} 