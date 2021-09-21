import React, { useState } from "react";
import ReactDOM from "react-dom";


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const  Notify =()=> {

  const [Order,setOrder]=useState(null);
  const [price, setPrice] = useState(0);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          reference_id: "order1",
          amount: {
            currency_code: "USD",
            value: 30,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: 30
              }
            }
          },
          items: [
            {
              name: "soda",
              unit_amount: {
                currency_code: "USD",
                value: "10"
              },
              quantity: "2"
            },
            {
              name: "salad",
              unit_amount: {
                currency_code: "USD",
                value: "10"
              },
              quantity: "1"
            }
          ]
        }
      ],
    });
  };


  
  const onApprove = async(data, actions) => {
      const order = await actions.order.capture();
      setOrder(order);
      //console.log(order)
    //return actions.order.capture();
  }
  function handleChange(e) {
    setPrice(e.target.value);
  }
  return (
    <center>
      {console.log(Order)}
      <div className="App">
        <h1>Doname {price} $</h1>
        <input
          type="text"
          onChange={handleChange}
          value={price}
          style={{ margin: 20 }}
        ></input>
        <br />
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
}
