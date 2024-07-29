
import { useEffect } from 'react'
import Titulo from '../components/home-Components/Titulo'

import "../pages/styles/PoliticaDeDevolucion.css"

const PoliticaDeDevolucion = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <div className='politicaDeDevolucion'>

      <Titulo title={'POLITICA DE DEVOLCION'}/>
      
      
      <div className='information'>
        <strong className='main-title'>POLITICA DE DEVOLUCION:</strong>
        <div className='conditions'>
          <strong>1) MOTIVOS DE CAMBIO</strong>
          <p>
            El Usuario tendrá derecho, dentro de los plazos legales, a 
            realizar cambios de los productos adquiridos por las siguientes 
            razones: a) Cambio de talle, b) Cambio por otra prenda, c) Prenda&nbsp;defectuosa, 
            d) recepción de prenda equivocada (EJ: modelo, color o talle)&nbsp;
          </p>
        </div>
        <div className='conditions'>
          <strong>2) CONDICIONES PARA EL CAMBIO</strong>
          <p>
            a. El Usuario deberá contactarse para realizar el cambio dentro del plazo 
            máximo de treinta (30) días de recibido el pedido, enviando un correo electrónico a 
            consultas@benkaindumentaria.com indicando en el mail:
          </p>

          <p>
            -Número de orden.
          </p>

          <p>
            -Número de whatsapp para que podamos ponernos en contacto.
          </p>

          <p>
            -Apellido y nombre.
          </p>

          <p>
            -Las prendas que desea cambiar y los motivos.
          </p>

          <p>
            b. El producto debe estar sin uso y en las mismas 
            condiciones en las que fue enviado, es importante que el 
            producto esté envuelto correctamente para preservar el buen estado del mismo.
          </p>

        </div>
        <div className='conditions'>
          <strong>3) PROCESO DE CAMBIO</strong>
          <p>Si el Usuario no cumple con las condiciones para el cambio indicados en el apartado precedente, BENKA se reserva el derecho a rechazar el cambio solicitado.</p>
          <p>Si el Usuario cumple con todas las condiciones para el cambio indicados en el apartado precedente, se procederá al cambio en las siguientes condiciones:</p>
          <p>El valor del producto a cambiar será el precio pagado por el Usuario originalmente por el mismo.</p>

          <p>&nbsp;4) Para realizar un cambio en nuestro local el cliente deberá enviarnos un mail (tal como indica el punto 2) con anterioridad y recien cuando nosotros le comuniquemos que está listo podrá venir a retirarlo.</p>

        </div>
      </div>
      


    </div>
  )
}

export default PoliticaDeDevolucion
