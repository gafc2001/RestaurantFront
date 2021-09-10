import { useReducer } from "react"
import { TYPES } from "../acctions/shoppingAction";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import CartItem from "./CartItem";
import Dish from "./Dish";

const Dishes =() =>{
    const[state,dispatch]=useReducer(shoppingReducer,shoppingInitialState);
    const{products,cart,user}=state;

    const addToCart=(id)=>{

        dispatch({type: TYPES.ADD_TO_CART,payload:id});

    };
    const delFromCart=(id,all = false)=>{
        console.log(id,all);
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id});
        } else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART,payload:id});
        }

    };
    const clearCart=()=>{
        dispatch({type:TYPES.CLEAR_CART});

    };
    
    return(
        <div>
            <h2>Seleccione platos: {user}</h2>
            <h3>Platos</h3>
            <div className="container">
                {products.map((product)=>(
                <Dish key={product.id} data={product} addToCart={addToCart} />
                ))}
            </div>
            
            <div className="cart-container">
            <h3>carrito</h3>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {cart.map((item,index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart}/>
                ))}
                <button>Comprar</button>
            </div>
        </div>
    );
};
export default Dishes