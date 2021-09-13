const CartItem = ({data,delFromCart}) => {
    let {idProduct,nameProduct,priceProduct,quantity} = data;
    return(
        <div >
            <h4>plato: {nameProduct}</h4>
            <h3>precio: {priceProduct}</h3>
            <h5>cantidad: {quantity}</h5>
            <h6>total: {quantity*priceProduct}</h6>
            <button onClick={()=> delFromCart(idProduct)}>Eliminar de uno</button>
            <button onClick={() => delFromCart(idProduct,true)}>Eliminar categoria</button>
            
        </div>
    );
};
export default CartItem