import React ,{ Component } from 'react';
import Dishes from './Dishes';
import Header from './Header';
export default function Home(){

        return(
            <div>
                <h1>Menu de hoy </h1>
                <Header/>
                <Dishes/>

            </div>
            
        );
}