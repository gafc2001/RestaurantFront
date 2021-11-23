import React, { useState } from "react";
import { URL } from "../../api/apiDB";
import { Message } from "../Dashboard/Message";
const idcli = sessionStorage.getItem("id");
const HeaderProfile = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [img, setImg] = useState(null)

  const HandleImagefile = (e) => {
    let selected = e.target.files[0];
    setImg(selected)
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
    //setForm({ ...form, profilePicture: selectedFile });
  };
  const ImageSubmit = ()=>{
    if (img) {
      //guardando imagenes
      const data = new FormData();
      data.append("file", img);
      let requestOptions = {
        body: data,
        method: "POST",
      };
      fetch(`${URL.USERS_DB}/${idcli}/image`, requestOptions)
        .then((resp) => resp)
        .then((resp) => {
          console.log(resp);
          setImgPreview(null)
        })
      return;
    } 

  }
  return (
    <header className="profile-header">
      <div className="profile-image-container">
        {!imgPreview && (
          <>
            <label htmlFor="file" >
              <i ></i> Subir una imagen...
              <input
                type="file"
                name="file0"
                id="file"
                onChange={HandleImagefile}
              />
            </label>
            <img src={`${URL.USERS_DB}/${idcli}/image`} />
 
          </>
        )}

        {imgPreview&&<>
        
          <button className="btn btn-secondary" onClick={ImageSubmit}>Aceptar image</button>
        <button className="btn btn-secondary" onClick={()=>setImgPreview(null)}>remover image</button>
        <img src={imgPreview} /> 
        </>}

   
      </div>
      {error && <Message msg="File not suported" />}

      <div className="profile-summary">
        <ul className="profile-summary-list">
          <li className="profile-summary-item">
            <span className="summary-value">20</span>
            <span className="summary-display">Total Ordenes</span>
          </li>
          <li className="profile-summary-item">
            <span className="summary-value">$ 330.52</span>
            <span className="summary-display">Total de gastos</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderProfile;

// console.log(form.profilePicture);
// if (form.profilePicture) {
//   //guardando imagenes
//   const formdata = new FormData();
//   formdata.append("file", form.profilePicture);
//   let requestOptions = {
//     body: formdata,
//     method: "POST",
//   };
//   fetch(`${URL.USERS_DB}/${idcli}/image`, requestOptions)
//     .then((resp) => resp)
//     .then((resp) => {
//       console.log(resp);
//       setResponse(true);
//       setTimeout(() => setResponse(false), 5000);
//     })
//     .catch((error) =>
//       console.log("ERROR NO REGISTRO LA IMAGEN", error)
//     );
//   return;
// } else {

// }

{
  /* <div className="form-group">
<label htmlFor="file" className="file-content">
  <i className="fas fa-upload file-icon"></i> Subir una imagen...
  <input type="file" name="file0" id="file" onChange={fileChange} />
</label>
</div> */
}
{
  /* <img src={`${URL.USERS_DB}/${idcli}/image`} /> */
}
