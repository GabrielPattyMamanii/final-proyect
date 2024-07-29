import "../styles/PaymentCard.css"

const PaymentCard = ({image}) => {
  return (
    <div className="payment-container">
        <img src={image} style={{width:"47.5px", height:"30px"}}/>
    </div>
  )
}

export default PaymentCard
