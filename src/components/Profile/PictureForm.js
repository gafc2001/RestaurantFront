import React,{useState} from 'react';
const PictureForm = ({imgPreview}) => {
    return (
        <>
            <h1 className="mb-1">Cambiar imagen</h1>
            <div className="mb-1">
            <img src={imgPreview} />
            </div>
            <div className="btn-container">
                <div className="btn btn-primary">Aplicar cambios</div>
                <div className="btn btn-secondary">Cancelar</div>
            </div>
        </>
    )
}
export default PictureForm;