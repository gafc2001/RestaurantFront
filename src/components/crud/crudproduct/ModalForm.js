import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./../../Login/form.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor : "#1F1D2B",
        border: "0px",
        width : "60rem",
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(23, 22, 32, 0.900)'
      },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
function ModalForm() {
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
                    <div >Add new dish</div>
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
                    <h2 className="page-name">Edit product</h2>
                    <h2 className="date">Producto</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label for="username">Product</label>
                        <div className="input-container">
                            <i className="fas fa-user-circle"></i>
                            <input type="text" id="username" placeholder="Your username" className="input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="username">Price</label>
                        <div className="input-container">
                            <i className="fas fa-user-circle"></i>
                            <input type="text" id="username" placeholder="Your username" className="input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="username">Is Avaia</label>
                        <div className="input-container">
                            <i className="fas fa-user-circle"></i>
                            <input type="text" id="username" placeholder="Your username" className="input" />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Save
                    </button>
                    <button className="btn btn-secondary">
                        Discard
                    </button>
                </form>
                
            </Modal>
        </div>
    );
}

export { ModalForm };