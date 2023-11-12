import remera from "../home-Components/remera.webp"
import "../styles/CardRedirect.css"
import { Link } from 'react-router-dom'
import ButtonViewmore from "./ButtonViewmore"

const CardRedirect = ({title, direction}) => {

return (
    <>
    <div className="colum-sm">
        <div className="banner-image">
                <img src={remera}/>
        </div>
        <div className="banner-text">
            <div className="title"><h3>{title}</h3></div>
            <Link className="cartita" to={"/detail/"+{direction} }>
            <div><ButtonViewmore text="VER MAS"/></div>
            </Link>
        </div>
    </div>
    </>

)
}

export default CardRedirect


