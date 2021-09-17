import { TYPES } from "../acctions/shoppingAction";

export const shoppingInitialState = {
    db:null,
    cart:[]
};

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.READ_ALL_DATA:{
            return{
                ...state,
               db:action.payload.map(data=>data),
            }

        }
        case TYPES.ADD_TO_CART:{
            let newItem =state.db.find(
                (product) => product.idProduct === action.payload
            );

            let itemInCart= state.cart.find(item=> item.idProduct === newItem.idProduct)
            return itemInCart?
            {
                ...state,
                cart:state.cart.map(item=> item.idProduct===newItem.idProduct?{...item,quantity:item.quantity+1}:item),
            }
            :{
                ...state,
                cart:[...state.cart,{...newItem,quantity:1}],
            };
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.idProduct === action.payload);
            
            return itemToDelete.quantity > 1 ? 
            {
                ...state,
                cart:state.cart.map(item => item.idProduct === action.payload ?{...item,quantity:item.quantity-1}:item),
            } 
            :{
                ...state,cart: state.cart.filter((item) => item.idProduct !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            
            return{
                ...state,
                cart: state.cart.filter((item) => item.idProduct !== action.payload),
            };
            
        }
        case TYPES.NO_DATA:
            return shoppingInitialState;
        default:
            return state;
    }

}