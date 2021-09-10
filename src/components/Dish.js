const Dish =({data,addToCart}) =>{
    let {id,name,price,image} =data;
    return (
    <div className="card">
         <img src={image}/>
         <h4>{name}</h4>
         <h5>${price}.00</h5>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde</p>
         <button onClick={()=> addToCart(id)}>Agregar</button>
    </div>
    );
};
export default Dish