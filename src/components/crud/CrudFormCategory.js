import React from 'react'
import { useState, useEffect } from 'react';


const initialForm ={
    nameCategory:"",
    description:"",
    idCategory:null,
}


export const CrudFormCategory = ({createData, updateData,dataToEdit,setDataToEdit}) => {
    const [form, setform] = useState(initialForm);
    

    useEffect(()=> {
        if(dataToEdit){
            setform(dataToEdit);
        }else{
            setform(initialForm);
        }

    },[dataToEdit])

    //sirve para manipular el cambio de estado de initialForm
    const  handleChange = (e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const  handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.nameCategory || !form.description){
            alert("datos incompletos");
            return;
        }
        //le pasamos los valores de estado de la variable form en las funciones create y update
        if(form.idCategory === null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    };

    const  handleReset = (e)=>{
        setform(initialForm)
        setDataToEdit(null);

    };
    
    return (
        <div>
            <h3>{dataToEdit ? "Edit":"Add"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nameCategory" placeholder="nameCategory" onChange={handleChange} value={form.nameCategory}></input>
                <input type="text" name="description" placeholder="description" onChange={handleChange} value={form.description}></input>
                <input type="submit" value="Enviar"></input>
                <input type="reset" value="limpiar" onClick={handleReset}></input>
            </form>
        </div>
    );
};

