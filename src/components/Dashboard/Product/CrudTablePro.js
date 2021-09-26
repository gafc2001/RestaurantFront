import React from "react";
import { ProductItem } from "./ProductItem";
import "./../../../assets/css/style.css";
import "./../../../assets/css/configuration.css";
import { ModalForm } from "./ModalForm";
import Modal from "react-modal";
import { Loader } from "../Loader";
Modal.setAppElement("#root");
const CrudTablePro = ({
  data,
  setDataToEdit,
  deleteData,
  createData,
  updateData,
  dataToEdit,
  Loading,
}) => {
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
    <>
      <div className="settings-content">
        {Loading && <Loader />}
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
          <ModalForm
            createData={createData}
            updateData={updateData}
            setDataToEdit={setDataToEdit}
          />
        </Modal>
        {data.length > 0 ? (
          data.map((el) => (
            <ProductItem
              key={el.idProduct}
              el={el}
              deleteData={deleteData}
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          ))
        ) : (
          <tr>
            <h3>Sin datos</h3>
          </tr>
        )}
      </div>
      {/*<div className="btn-container">
                <div className="btn btn-secondary">Discar changes</div>
                <div className="btn btn-primary">Save changes</div>
                </div>*/}
    </>
  );
};

export default CrudTablePro;
