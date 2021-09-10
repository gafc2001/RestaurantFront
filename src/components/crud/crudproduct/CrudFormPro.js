import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";

const initialForm = {
  idProduct: null,
  nameCategory: null,
  nameProduct: "",
  priceProduct: "",
  availableProduct: "",
  description: "",
};

export const CrudFormPro = ({
    data2,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
}
) => {

  let api = helpHttp();
  let url = "https://restaurantrestapi.herokuapp.com/categories";
  const [db2, setDb2] = useState(null);
  const [Error, setError] = useState(null);
  //  cargando
  const [Loading, setLoading] = useState(false);
  //controlar respuestas del servidor 
  useEffect(() => {
      setLoading(true);
      helpHttp().get(url).then((res) =>{
          //console.log(res);
          if(!res.err){
              setDb2(res);
              setError(null);
          } else {
              setDb2(null);
              setError(res);               
          }
      setLoading(false);
         
      });
  }, []);



  
    const [form, setform] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  //sirve para manipular el cambio de estado de initialForm

  const handleSelectChange=(e)=> {
    let categoryName = e.target.options[e.target.selectedIndex].text;
    let categoryId = e.target.value;
    setform({idProduct: null,nameProduct: form.nameProduct,
      priceProduct: form.priceProduct,
      availableProduct: form.availableProduct,
      description: form.description,category:{idCategory:categoryId,nameCategory:categoryName}});
      
  }
      

  const handleChange = (e) => {
    let valor = e.target.value;
    if (e.target.type === 'select-one') { 
    valor = e.target.options[e.target.selectedIndex].text;
    }
    setform({
      ...form,
      [e.target.name]: valor,
  });
  console.log(form)
  };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nameProduct || !form.priceProduct || !form.description || !form.nameCategory) {
      alert("datos incompletos");
      console.log(form)
      return;
    }
    
    //le pasamos los valores de estado de la variable form en las funciones create y update
    if (form.idProduct === null) {
      
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setform(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
      {db2 && (
          <select name="categoria" onChange={handleSelectChange}>
          <option value="">seleccion</option>
            {db2.map(Elemento =>(
              <option 
              key={Elemento.idCategory} value={Elemento.idCategory}>{Elemento.nameCategory}</option>
            )) 
            }
          </select>
          )}

        <input
          type="text"
          name="nameProduct"
          placeholder="nameProduct"
          onChange={handleChange}
          value={form.nameProduct}
        ></input>
        <input
          type="number"
          name="priceProduct"
          placeholder="priceProduct"
          onChange={handleChange}
          value={form.priceProduct}
        ></input>
        <input
          type="text"
          name="availableProduct"
          placeholder="availableProduct"
          onChange={handleChange}
          value={form.availableProduct}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={form.description}
        ></input>
        <input type="submit" value="Enviar"></input>
        <input type="reset" value="limpiar" onClick={handleReset}></input>
      </form>
    </div>
  );
};
