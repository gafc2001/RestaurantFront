import React from 'react'
import { useState,useEffect} from 'react';


const initialForm ={
    idOrder:null,
    statusOrder:"",
    
}

const UpdateForm = ({updateOrder,dataToEdit}) => {
    const [form, setform] = useState(initialForm);

    useEffect(()=> {
     
        if(dataToEdit){
            setform(dataToEdit);
        }else{
            setform(initialForm);
        }

    },[dataToEdit])


    const  handleChange = (e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value,
        });
    };


    const  handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.statusOrder){
            alert("datos incompletos");
            return;
        }
        updateOrder(form);
        handleReset();
    };



    const  handleReset = (e)=>{
        setform(initialForm)

    };
    return (
        <div className="content-form"> 
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="EstatusOrder">Estado de la orden</label>
                    <div className="input-container">
                        <input type="text" name="statusOrder" id="statusOrder"  placeholder="Estado de la orden" className="input" onChange={handleChange} value={form.statusOrder}></input>
                    </div>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn btn-primary" >CAMBIAR ESTADO</button>
                    <button type="reset" onClick={handleReset} className="btn btn-secondary">CANCELAR</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm
