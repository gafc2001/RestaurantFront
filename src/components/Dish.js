import React, { Component } from 'react';
class Dish extends Component {
    state = {
        dishes: [
            { name: 'tallarines rojos', image: 'https://decomidaperuana.com/wp-content/uploads/2020/02/tallarines-con-atun-receta.jpg' },
            { name: 'pollo al horno', image: 'https://i2.wp.com/irecetasfaciles.com/wp-content/uploads/2020/07/pollo-al-horno-1.jpg' },
            { name: 'cuy chactado', image: 'https://jameaperu.com/wp-content/uploads/2019/09/cuy-chactado_700x467.jpg' },
            { name: 'papa huancaina', image: 'https://decomidaperuana.com/wp-content/uploads/2017/08/papa-a-la-huancaina.jpg' }
        ]
    }
    render() {
        return (
            <div className="dashboard-dishes">
                <h2>Platos</h2>
                <div className="dish">
                    {
                        this.state.dishes.map((dish, i) => {
                            return (
                                
                                <div  className= "dish-info">
                                <div className ="image-wrap">
                                    <img src={dish.image} alt={dish.name}/>
                                </div>
                                <h2>{dish.name}</h2>
                                <a >seleccione dish</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Dish;