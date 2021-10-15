import  React,{ useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import OrderTable from "./OrderTable";
import UpdateForm from "./UpdateForm";
const UpdateState = () => {

    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);

    let url = "https://restaurantrestapi.herokuapp.com/api/order";  
    //controlar respuestas del servidor
    useEffect(() => {
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            setDb(res);
          } else {
            setDb(null);
          }
        });
    }, [url]);

    const updateOrder = (data) => {
        let endpoint = `${url}/${data.idOrder}/status`;
        //console.log(endpoint);
        var raw = data.statusOrder;
        let options = {
          body: raw,
          headers: { "content-type": "application/json" },
        };
    
        helpHttp().patch(endpoint, options).then((res) => {
          console.log(res)
          if (!res.err) {
            let newData = db.map((el) =>
              el.idOrder === data.idOrder ? data : el
            );
            setDb(newData);
          }
        });
      };
    return (
        <>
        <UpdateForm
          updateOrder={updateOrder}
          dataToEdit={dataToEdit}
        />
        {db && (
          <OrderTable
          setDataToEdit={setDataToEdit}
            data={db}
          />
        )}
      </>
    )
}

export default UpdateState
