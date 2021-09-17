import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import "./../../../assets/css/form.css";
import { Message } from "../Message";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1F1D2B",
    border: "0px",
    width: "60rem",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(23, 22, 32, 0.900)",
  },
};
const initialForm = {
  idProduct: null,
  category: { idCategory: "", nameCategory: null },
  nameProduct: "",
  priceProduct: "",
  availableProduct: true,
  img: null,
  description: "",
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
export const ModalForm = ({
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
        if (res.length > 0) {
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
      //console.log(dataToEdit);
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  //sirve para manipular el cambio de estado de initialForm

  const selectChange = (e) => {
    let categoryId = e.target.value;
    db2.map((el) =>
      el.idCategory == categoryId
        ? setform({
            ...form,
            category: {
              idCategory: el.idCategory,
              nameCategory: el.nameCategory,
            },
          })
        : null
    );
  };

  const handleChange = (e) => {
    // let valor = e.target.value;
    // if (e.target.type === "select-one") {
    //   valor = e.target.options[e.target.selectedIndex].text;
    // }
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.nameProduct ||
      !form.priceProduct ||
      !form.description ||
      form.category.idCategory === ""
    ) {
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
  const fileChange = (e) => {
    let selectedFile = e.target.files[0];
    setform({ ...form, img: selectedFile });
  };
  const handleAvariable = (e) => {
    if (e.target.value === "sold out") {
      setform({ ...form, availableProduct: false });
    } else {
      setform({ ...form, availableProduct: true });
    }
  };

  return (
    <>
      <div className="page-info">
        {Error && (
          <Message
            msg={"Error al comunicarse con el servidor"}
            bgColor="#dc3545"
          />
        )}
        <h2 className="page-name">{dataToEdit ? "Edit" : "Add"}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {db2 && (
          <select value={form.category.idCategory} onChange={selectChange}>
            <option disabled value="">
              seleccion
            </option>
            {db2 &&
              db2.map((Elemento) => (
                <option key={Elemento.idCategory} value={Elemento.idCategory}>
                  {Elemento.nameCategory}
                </option>
              ))}
          </select>
        )}
        <div className="form-group">
          <label htmlFor="product">Product</label>
          <div className="input-container">
            <i className="fas fa-user-circle"></i>
            <input
              type="text"
              placeholder="Name product.."
              className="input"
              name="nameProduct"
              onChange={handleChange}
              value={form.nameProduct}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <div className="input-container">
            <i className="fas fa-user-circle"></i>
            <input
              type="number"
              name="priceProduct"
              placeholder="Price.."
              className="input"
              onChange={handleChange}
              value={form.priceProduct}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="file">File</label>
          <div className="input-container">
            <i className="fas fa-user-circle"></i>
            <input type="file" name="file0" onChange={fileChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="desct">Description</label>
          <div className="input-container">
            <i className="fas fa-user-circle"></i>
            <input
              type="text"
              placeholder="description.."
              className="input"
              name="description"
              onChange={handleChange}
              value={form.description}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="avariable">Availability</label>
          <input
            type="radio"
            name="Availability"
            id="available"
            onClick={handleAvariable}
            value="available"
            defaultChecked
          />
          <label htmlFor="sold out">avariable</label>
          <input
            type="radio"
            name="Availability"
            id="sold out"
            onClick={handleAvariable}
            value="sold out"
          />
          <label htmlFor="avariable">sold out</label>
        </div>
        <button className="btn btn-primary" value="Enviar" type="submit">
          Save
        </button>
        <button
          type="reset"
          className="btn btn-secondary"
          value="limpiar"
          onClick={handleReset}
        >
          Discard
        </button>
      </form>
    </>
  );
};
