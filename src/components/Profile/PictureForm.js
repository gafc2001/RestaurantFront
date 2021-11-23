import React,{useState} from 'react';
const PictureForm = () => {
    return (
        <>
            <h1 className="mb-1">Cambiar imagen</h1>
            <div className="mb-1">
                <img src="https://fotografias.antena3.com/clipping/cmsimages01/2020/09/28/2658A8D9-ABC5-43E1-B5DC-43A780B1DC21/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply"/>
            </div>
            <div className="btn-container">
                <div className="btn btn-primary">Aplicar cambios</div>
                <div className="btn btn-secondary">Cancelar</div>
            </div>
        </>
    )
}
export default PictureForm;