import React ,{ Component } from 'react';
import Body from './Body';
import Dish from './Dish'
import Header from './Header';
class Home extends Component{
    constructor() {
        super()
        this.state = {
            active: true,
        }

    }
    Desplegar = () => {
        this.setState({
            active: !this.state.active,
        });
    };
    render(){
        const { active } = this.state
        return(
            <div className={active ? "body" : "body_move"} >
                <h4>este es el Home </h4>
                <div className={active ? "menu__side" : "menu__side_move"}>
                <Header
                    DesplegarMenu={this.Desplegar}
                />
                </div>
                <Dish/> 
            </div>
            
        );
    }
}
export default Home;