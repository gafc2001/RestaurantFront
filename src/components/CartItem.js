const CartItem = ({data,delFromCart}) => {
    let {id,name,price,quantity} = data;
    return(
        <div >
            <h4>plato: {name}</h4>
            <h3>precio: {price}</h3>
            <h5>cantidad: {quantity}</h5>
            <h6>total: {quantity*price}</h6>
            <button onClick={()=> delFromCart(id)}>Eliminar de uno</button>
            <button onClick={() => delFromCart(id,true)}>Eliminar categoria</button>
            
        </div>
    );
};
export default CartItem