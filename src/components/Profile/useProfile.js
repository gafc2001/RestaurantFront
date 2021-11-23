import { useState, useEffect } from "react";
import { URL } from "../../api/apiDB";
import { helpHttp } from "../helpers/helpHttp";
export const useProfile = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(false);
  const [Error, setError] = useState(false);
  const [checkout, setCheckout] = useState(false);

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


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Cambios");
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
            setResponse(true);
            setTimeout(() => setResponse(false), 5000);
          }
        });
    } else {
      return;
    }
  };
  const handleEdit = () => {
    setCheckout(true);
  };

  const handleReset = () => {
    setErrors({});
    setCheckout(false);
  };

  return {
    form,
    Error,
    errors,
    response,
    checkout,
    handleChange,
    handleBlur,
    handleSubmit,
    handleEdit,
    handleReset,
  };
};


