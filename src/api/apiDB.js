const sourceURL="https://restaurantrestapi.herokuapp.com";
export const URL ={
    PRODUCT_DB:`${sourceURL}/api/products`,
    ALL_ORDERS:`${sourceURL}/api/order`,
    CLIENT_ORDERS:`${sourceURL}/api/order/users/${sessionStorage.getItem("id")}`,
    PAYMENT_STRIPE:`${sourceURL}/api/payments/stripe`,
    CLIENT_PROFILE:`${sourceURL}/api/users/${sessionStorage.getItem("id")}/profile`,
    USERS_DB:`${sourceURL}/api/users`,
    PRODUCT_CATEGORY:`${sourceURL}/api/categories`,
    SIGNIN_AUTH:`${sourceURL}/api/auth/signin`,
    SIGNUP_AUTH:`${sourceURL}/api/auth/signup`,
    CHART_CATEGORY:`${sourceURL}/api/categories/chart`,
    USERS_SUMARY:`${sourceURL}/api/users/summary`,
    ORDERS_SUMARY:`${sourceURL}/api/order/summary`,
    ORDERS_DETAILS_SUMARY:`${sourceURL}/api/orderdetails/summary`,
}