const sourceURL="http://localhost:8080";
// const sourceURL="https://restaurantrestapi.herokuapp.com";
export const URL ={
    PRODUCT_DB:`${sourceURL}/api/products`,
    ALL_ORDERS:`${sourceURL}/api/order`,
    CLIENT_ORDERS:`${sourceURL}/api/order/users`,
    PAYMENT_STRIPE:`${sourceURL}/api/payments/stripe`,
    //CLIENT_PROFILE:`${sourceURL}/api/users`,
    USERS_DB:`${sourceURL}/api/users`,
    PRODUCT_CATEGORY:`${sourceURL}/api/categories`,
    SIGNIN_AUTH:`${sourceURL}/api/auth/signin`,
    SIGNUP_AUTH:`${sourceURL}/api/auth/signup`,
    CHART_CATEGORY:`${sourceURL}/api/categories/chart`,
    USERS_SUMARY:`${sourceURL}/api/users/summary`,
    ORDERS_SUMARY:`${sourceURL}/api/order/summary`,
    ORDERS_DETAILS_SUMARY:`${sourceURL}/api/orderdetails/summary`,
    PASSWORD_CHANGE:`${sourceURL}/api/auth`,
}