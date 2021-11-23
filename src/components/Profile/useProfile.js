import { useState, useEffect } from "react";
import { URL } from "../../api/apiDB";
import { helpHttp } from "../helpers/helpHttp";
export const useProfile = (initialForm, validateForm,checkout) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [Error, setError] = useState(false);
  const idcli = sessionStorage.getItem("id");
  useEffect(() => {
    helpHttp()
      .get(`${URL.USERS_DB}/${idcli}/profile`)
      .then((res) => {
        setForm(res);
      });
  }, [checkout]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const fileChange = (e) => {
    let selectedFile = e.target.files[0];
    setForm({ ...form, profilePicture: selectedFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Cambios");
      setLoading(true);
      let dataClient = {
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNumber: form.phoneNumber,
        address: form.address,
      };
      helpHttp()
        .post(`${URL.USERS_DB}/${idcli}/profile`, {
          body: dataClient,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          if (!res.err) {
              console.log(form.profilePicture)
            if (form.profilePicture) {
              //guardando imagenes
              const formdata = new FormData();
              formdata.append("file", form.profilePicture);
              let requestOptions = {
                body: formdata,
                method: "POST",
              };
              fetch(`${URL.USERS_DB}/${idcli}/image`, requestOptions)
                .then((resp) => resp)
                .then((resp) => alert("Imagen cambiada y datos actualizados"))
                .catch((error) =>
                  console.log("ERROR NO REGISTRO LA IMAGEN", error)
                );
              return;
            }else{
                alert("datos actualizados")
            }
          }
        });
    } else {
      return;
    }
  };

  return {
    form,
    Error,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    fileChange,
  };
};
