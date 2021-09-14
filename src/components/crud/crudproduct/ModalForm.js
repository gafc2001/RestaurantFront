import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import Modal from "react-modal";
import "./../../Login/form.css";

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
Modal.setAppElement("#root");
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
      console.log(dataToEdit);
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
    console.log(form);
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
    //console.log(form)
  };
  //console.log(form)

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="product new-product center" onClick={openModal}>
        <div>
          <div className="plus">+</div>
          <div>Add new dish</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="page-info">
          <h2 className="page-name">{dataToEdit ? "Editar" : "Agregar"}</h2>
          <h2 className="date">Producto</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {db2 && (
            <select value={form.category.idCategory} onChange={selectChange}>
              <option disabled selected value="">
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
            <label for="username">Product</label>
            <div className="input-container">
              <i className="fas fa-user-circle"></i>
              <input
                type="text"
                id="username"
                placeholder="Your username"
                className="input"
                name="nameProduct"
                onChange={handleChange}
                value={form.nameProduct}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="username">Price</label>
            <div className="input-container">
              <i className="fas fa-user-circle"></i>
              <input
                type="text"
                id="username"
                name="priceProduct"
                placeholder="Your username"
                className="input"
                onChange={handleChange}
                value={form.priceProduct}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="username">File</label>
            <div className="input-container">
              <i className="fas fa-user-circle"></i>
              <input
                type="file"
                id="username"
                placeholder="Your username"
                name="file0"
                onChange={fileChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="username">Description</label>
            <div className="input-container">
              <i className="fas fa-user-circle"></i>
              <input
                type="text"
                id="username"
                placeholder="Your username"
                className="input"
                name="description"
                onChange={handleChange}
                value={form.description}
              />
            </div>
          </div>
          <button className="btn btn-primary" value="Enviar" type="submit">
            Save
          </button>
          <button className="btn btn-secondary" value="limpiar">Discard</button>
        </form>
      </Modal>
    </div>
  );
};
