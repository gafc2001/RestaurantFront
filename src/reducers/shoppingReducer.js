import { TYPES } from "../acctions/shoppingAction";

export const shoppingInitialState = {
    products:
    [
        { id:1 ,name: 'tallarines rojos' ,image: 'https://decomidaperuana.com/wp-content/uploads/2020/02/tallarines-con-atun-receta.jpg',price: 100 },
        { id:2 ,name: 'pollo al horno' ,image: 'https://i2.wp.com/irecetasfaciles.com/wp-content/uploads/2020/07/pollo-al-horno-1.jpg',price: 200 },
        { id:3 ,name: 'cuy chactado' ,image: 'https://jameaperu.com/wp-content/uploads/2019/09/cuy-chactado_700x467.jpg',price: 300},
        { id:4 ,name: 'papa huancaina' ,image: 'https://decomidaperuana.com/wp-content/uploads/2017/08/papa-a-la-huancaina.jpg',price: 400 },
    ],
    user: 'gustavo farfan',
    cart:[],
};

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem =state.products.find(
                (product) => product.id === action.payload
            );

            let itemInCart= state.cart.find(item=> item.id === newItem.id)
            return itemInCart?
            {
                ...state,
                cart:state.cart.map(item=> item.id===newItem.id?{...item,quantity:item.quantity+1}:item),
            }
            :{
                ...state,
                cart:[...state.cart,{...newItem,quantity:1}],
            };
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            
            return itemToDelete.quantity > 1 ? 
            {
                ...state,
                cart:state.cart.map(item => item.id === action.payload ?{...item,quantity:item.quantity-1}:item),
            } 
            :{
                ...state,cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
            
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }

}