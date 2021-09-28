import React from 'react';
import { helpHttp } from './helpers/helpHttp';
const Error = () =>{

    // useEffect(() => {
    //     generateOrder()
    
    //   }, []);
    
    //   const generateOrder=()=>{
      
    //     var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic  QVdOOEQyaXA3dUhvdHlnWHVJTVZoeHJjY2ZnYlFfRl9HV2JHZ1dpcXV4Rm13ZktmbVVDN0N3cUVuc1pEV1hmS1ZTOFNYVGdiSEpWd044Szk6RUNlRW00TVRCQnFTZEF4ZmVTdkN0YUkweFRkMC1hVEs3aEdySGVjTDMwanY4TUJrcm13YlJLNENzdE1hSWVUaGc2NlF0X29DSlZSNjVONWg=");
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // myHeaders.append("Cookie", "cookie_check=yes; d_id=ee9ad172906d458a9b495b6cf755e1ee1632095107752; ts=vreXpYrS%3D1726802909%26vteXpYrS%3D1632110309%26vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa%26vtyp%3Dreturn; ts_c=vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa");
    
    // var urlencoded = new URLSearchParams();
    // urlencoded.append("grant_type", "client_credentials");

    
    
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: urlencoded,
    //   redirect: 'follow'
    // };
    
    // fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log( JSON.parse(result)))
    //   .catch(error => console.log('error', error));
    
    //   }

    //   const createOrder=()=>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer A21AALOmttGhd0P2xiOdJSOWZvSl_Zh9W1uaBHmRmGHlC7ayHOG_FMX8lILtQ6JcwzKfMPsTUPA96but0Ig4jDjj8ipIlNyrg");
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Cookie", "cookie_check=yes; d_id=ee9ad172906d458a9b495b6cf755e1ee1632095107752; ts=vreXpYrS%3D1726802909%26vteXpYrS%3D1632110309%26vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa%26vtyp%3Dreturn; ts_c=vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa; tsrce=unifiedloginnodeweb");
        
    //     var raw = JSON.stringify({
    //       "intent": "CAPTURE",
    //       "purchase_units": [
    //         {
    //           "reference_id": "order1",
    //           "amount": {
    //             "currency_code": "USD",
    //             "value": 30,
    //             "breakdown": {
    //               "item_total": {
    //                 "currency_code": "USD",
    //                 "value": 30
    //               }
    //             }
    //           },
    //           "items": [
    //             {
    //               "name": "soda",
    //               "unit_amount": {
    //                 "currency_code": "USD",
    //                 "value": "10"
    //               },
    //               "quantity": "2"
    //             },
    //             {
    //               "name": "salad",
    //               "unit_amount": {
    //                 "currency_code": "USD",
    //                 "value": "10"
    //               },
    //               "quantity": "1"
    //             }
    //           ]
    //         }
    //       ],
    //       "application_context": {
    //         "brand_name": "Delibakery",
    //         "return_url": "http://localhost:3000/home",
    //         "cancel_url": "http://localhost:3000/settings"
    //       }
    //     }); 
    //     var requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       body: raw,
    //       redirect: 'follow'
    //     };
        
    //     fetch("https://api.sandbox.paypal.com/v2/checkout/orders", requestOptions)
    //       .then(response => response.text())
    //       .then(result => console.log(result))
    //       .catch(error => console.log('error', error));
    
    //   }
    //   const aproveOrder=()=>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer A21AALOmttGhd0P2xiOdJSOWZvSl_Zh9W1uaBHmRmGHlC7ayHOG_FMX8lILtQ6JcwzKfMPsTUPA96but0Ig4jDjj8ipIlNyrg");
    //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //     myHeaders.append("Cookie", "cookie_check=yes; d_id=ee9ad172906d458a9b495b6cf755e1ee1632095107752; ts=vreXpYrS%3D1726802909%26vteXpYrS%3D1632110309%26vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa%26vtyp%3Dreturn; ts_c=vr%3D0072f81917c0a602060d2387ff5891a5%26vt%3D013f7ad917c0a6022c7ff5cbff5290aa");
        
    //     var raw = JSON.stringify({
    //       "tokens": "CAPTURE",
        
    //     }); 
        
        
    //     var requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       body: raw,
    //       redirect: 'follow'
    //     };
        

    //     fetch("https://api.sandbox.paypal.com/v2/checkout/orders/1PP21267DL940713E/capture", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    
    //   }

const generarOrder=()=>{
    let order_detail={
      iduser:"25",
      status:"ACEPTED",
      subtotal: 100,
      orders:[
        {idproduct:'25',
        quantity:'1'},
        {idproduct:'15',
        quantity:'1'}
      ],
      create_time:"2021-09-28T03:17:55",
      payment_method: 5
    }
    let options = {
      body: order_detail,
      headers: { "content-type": "application/json" },
    };
  
    helpHttp().post('https://restaurantrestapi.herokuapp.com/api/order', options).then((res) => {console.log(res)
    });
  
  }
    
    return (
        <>
            <h2>Página no encontrada</h2>
            <button onClick={generarOrder}>click aqui</button>


        </>
    );
}
export default Error;