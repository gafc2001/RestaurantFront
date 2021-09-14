import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";

import "bootstrap/dist/css/bootstrap.min.css";
const initialForm = {
  idProduct: null,
  category: {idCategory:'',nameCategory:null},
  nameProduct: "",
  priceProduct: "",
  availableProduct: true,
  img:null,
  description: "",
};

export const CrudFormPro = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  
  let url = "https://restaurantrestapi.herokuapp.com/api/categories";
  const [db2, setDb2] = useState(null);
  const [Error, setError] = useState(null);
  //controlar respuestas del servidor
  useEffect(() => {
    
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb2(res);
          setError(null);
        } else {
          setDb2(null);
          setError(res);
        }

      });
  }, []);

  const [form, setform] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      console.log(dataToEdit)
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  //sirve para manipular el cambio de estado de initialForm

   const selectChange = (e) => {
    let categoryId = e.target.value;
    db2.map((el) => el.idCategory == categoryId ? setform({...form,category:{idCategory:el.idCategory,nameCategory:el.nameCategory}}) :null);

   };

  const handleChange = (e) => {
    // let valor = e.target.value;
    // if (e.target.type === "select-one") {
    //   valor = e.target.options[e.target.selectedIndex].text;
    // }
    setform({
      ...form,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(form)
    e.preventDefault();
    if (!form.nameProduct || !form.priceProduct || !form.description || form.category.idCategory === '') {
      alert("datos incompletos");
      
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

  const handleReset = () => {
    setform(initialForm);
    setDataToEdit(null);
  };
  const fileChange = (e) =>{
    let selectedFile = e.target.files[0]
    setform({...form,img:selectedFile})
    //console.log(form)
  }
  //console.log(form)

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        {db2 && (
          <select  value={form.category.idCategory} onChange={selectChange}>
            <option disabled selected value =''>seleccion</option>
            {db2 && db2.map((Elemento) => (
              <option key={Elemento.idCategory} value={Elemento.idCategory}>
                {Elemento.nameCategory}
              </option>
            ))}
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
        {/* <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="flexRadioDefault1"
            value={}
            onChange={radioChange}
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Agotado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="flexRadioDefault2"
            value={}
            onChange={radioChange}
          ></input>
          <label class="form-check-label" for="flexRadioDefault2">
            Disponible
          </label>
        </div> */}
        <input
          type="file"
          name="file0"
          onChange={fileChange}
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
