import React from "react";

import Sidebar from "./sidebar/Sidebar";

export const Notify = () => {
  const prueba = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer A21AALSJmqKm9WD79QM57uJthgGGIBtUJTosNykM9g1BzJe9kMHf6A18rDr9GQFLUROzTPc_uzldElSA_YE_HNqFSUq58t-eg"
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "cookie_check=yes; d_id=AWN8D2ip7uHotygXuIMVhxrccfgbQ_F_GWbGgWiquxFmwfKfmUC7CwqEnsZDWXfKVS8SXTgbHJVwN8K9"
    );

    var raw = JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: "order1",
          amount: {
            currency_code: "USD",
            value: 30,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: 30,
              },
            },
          },
          items: [
            {
              name: "soda",
              unit_amount: {
                currency_code: "USD",
                value: "10",
              },
              quantity: "2",
            },
            {
              name: "salad",
              unit_amount: {
                currency_code: "USD",
                value: "10",
              },
              quantity: "1",
            },
          ],
        },
      ],
      application_context: {
        brand_name: "Delibakery",
        return_url: "http://localhost:3000/home",
        cancel_url: "http://localhost:3000/home",
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.sandbox.paypal.com/v2/checkout/orders", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {/* <Sidebar /> */}
      <h3>Botonpaypal</h3>
      <button onClick={prueba}>prueba</button>
    </>
  );
};
