import React, { useState, useEffect, useMemo } from "react";
import { helpHttp } from "../../helpers/helpHttp";
//URL DELYBAKERY
import { URL } from "../../../api/apiDB";
const TotalClients = () => {
  
  const initialDetails = useMemo(() => {
    return { status: "", percentage: null, current: null }
  },[]);
  const [UserDetails, setUserDetails] = useState(initialDetails);
  useEffect(() => {
    helpHttp()
      .get(URL.USERS_SUMARY)
      .then((res) => {
        if (!res.err) {
          setUserDetails(res);
        } else {
          setUserDetails(initialDetails);
        }
      });
  }, [initialDetails]);

  return (
    <section className="box-content total-summary-item">
      {UserDetails.status && (
        <header className="total-header">
          <span className="icon-total">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59149 14.4563L9.91127 14.4576C14.5557 14.4981 17.1835 15.4361 17.1835 17.9983C17.1835 20.5061 14.665 21.4736 10.2236 21.5546L9.59149 21.5603C4.74715 21.5603 2.00049 20.6394 2.00049 18.0183C2.00049 15.3937 4.75808 14.4563 9.59149 14.4563ZM9.59149 15.9563C5.57414 15.9563 3.50049 16.6612 3.50049 18.0183C3.50049 19.3667 5.56916 20.0603 9.59149 20.0603C13.6091 20.0603 15.6835 19.3552 15.6835 17.9983C15.6835 16.6505 13.6129 15.9563 9.59149 15.9563ZM17.5872 13.7481C18.1677 13.7876 18.7449 13.8708 19.2996 13.9938C20.4877 14.2301 21.371 14.6713 21.7757 15.5204C22.0745 16.1491 22.0745 16.8806 21.7757 17.5092C21.3733 18.3563 20.4992 18.7942 19.3044 19.04C18.8987 19.1234 18.5021 18.8622 18.4187 18.4565C18.3352 18.0507 18.5965 17.6542 19.0022 17.5707C19.771 17.4126 20.2827 17.1562 20.4209 16.8654C20.5261 16.6441 20.5261 16.3856 20.4213 16.165C20.2822 15.8732 19.7678 15.6163 18.9912 15.4616C18.4938 15.3515 17.991 15.279 17.4854 15.2446C17.0721 15.2165 16.7599 14.8587 16.788 14.4455C16.8161 14.0322 17.1739 13.72 17.5872 13.7481ZM9.59149 2.49976C12.4395 2.49976 14.7265 4.78636 14.7265 7.63376C14.7265 10.482 12.4397 12.7688 9.59149 12.7688C6.74341 12.7688 4.45749 10.4821 4.45749 7.63376C4.45749 4.78622 6.74359 2.49976 9.59149 2.49976ZM16.0202 3.56936C18.2551 3.56936 20.0672 5.38183 20.0672 7.61636C20.0672 9.85157 18.2554 11.6634 16.0202 11.6634C15.606 11.6634 15.2702 11.3276 15.2702 10.9134C15.2702 10.4991 15.606 10.1634 16.0202 10.1634C17.427 10.1634 18.5672 9.02314 18.5672 7.61636C18.5672 6.21019 17.4266 5.06936 16.0202 5.06936C15.606 5.06936 15.2702 4.73357 15.2702 4.31936C15.2702 3.90514 15.606 3.56936 16.0202 3.56936ZM9.59149 3.99976C7.57207 3.99976 5.95749 5.6146 5.95749 7.63376C5.95749 9.65379 7.57195 11.2688 9.59149 11.2688C11.6113 11.2688 13.2265 9.65354 13.2265 7.63376C13.2265 5.61484 11.6111 3.99976 9.59149 3.99976Z"
                fill="#3B5162"
              />
            </svg>
          </span>

          <span className={`porcentage ${UserDetails.status}`}>
            {UserDetails.percentage.toFixed(2)}%
          </span>

          <span  className={`icon-status ${UserDetails.status}`} >
          {UserDetails.status === "positive" ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 21C11.5795 21 11.2321 20.6922 11.1771 20.2928L11.1696 20.1818L11.17 5.799L5.91871 10.9953C5.59515 11.3155 5.06942 11.3166 4.74446 10.9978C4.44905 10.7079 4.42125 10.2534 4.66174 9.9326L4.74193 9.84067L11.4111 3.24067L11.4285 3.22449C11.4465 3.20773 11.4652 3.19176 11.4846 3.17661L11.4111 3.24067C11.4432 3.20887 11.4773 3.18022 11.513 3.15472C11.5355 3.1393 11.5588 3.12434 11.5828 3.11054C11.6364 3.07936 11.6924 3.0552 11.7501 3.03737C11.7704 3.03137 11.7911 3.02579 11.8122 3.02099C11.8283 3.0171 11.8446 3.01389 11.861 3.01117C11.8788 3.00845 11.8965 3.00608 11.9145 3.00427C11.9325 3.00223 11.9509 3.00097 11.9694 3.00031C11.9796 3.00018 11.9897 3 11.9999 3L12.0275 3.00024C12.0479 3.00092 12.0683 3.00234 12.0887 3.00449L11.9999 3C12.0473 3 12.0938 3.00392 12.139 3.01144C12.1596 3.0148 12.1803 3.01906 12.2009 3.0241C12.2172 3.02814 12.2332 3.03258 12.2491 3.03748C12.2679 3.04327 12.2868 3.04988 12.3055 3.05718C12.3249 3.06477 12.3438 3.07297 12.3623 3.08183C12.3765 3.08855 12.3911 3.09607 12.4055 3.10404C12.4325 3.11908 12.4579 3.135 12.4823 3.15219C12.4861 3.1549 12.4903 3.15793 12.4945 3.161C12.5316 3.18829 12.5643 3.21657 12.5946 3.24718L19.258 9.84062C19.5816 10.1608 19.5805 10.6788 19.2556 10.9977C18.9602 11.2876 18.4989 11.313 18.1743 11.0747L18.0813 10.9953L12.831 5.8L12.8302 20.1818C12.8302 20.6337 12.4585 21 11.9999 21Z"
                  fill="#3B5162"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0001 3C12.4205 3 12.7679 3.3078 12.8229 3.70716L12.8304 3.81818L12.83 18.201L18.0813 13.0047C18.4049 12.6845 18.9306 12.6834 19.2555 13.0022C19.551 13.2921 19.5787 13.7466 19.3383 14.0674L19.2581 14.1593L12.5889 20.7593L12.5715 20.7755C12.5535 20.7923 12.5348 20.8082 12.5154 20.8234L12.5889 20.7593C12.5568 20.7911 12.5227 20.8198 12.487 20.8453C12.4645 20.8607 12.4412 20.8757 12.4172 20.8895C12.3636 20.9206 12.3076 20.9448 12.2499 20.9626C12.2296 20.9686 12.2089 20.9742 12.1878 20.979C12.1717 20.9829 12.1554 20.9861 12.139 20.9888C12.1212 20.9915 12.1035 20.9939 12.0855 20.9957C12.0675 20.9978 12.0491 20.999 12.0306 20.9997C12.0204 20.9998 12.0103 21 12.0001 21L11.9725 20.9998C11.9521 20.9991 11.9317 20.9977 11.9113 20.9955L12.0001 21C11.9527 21 11.9062 20.9961 11.861 20.9886C11.8404 20.9852 11.8197 20.9809 11.7991 20.9759C11.7828 20.9719 11.7668 20.9674 11.7509 20.9625C11.7321 20.9567 11.7132 20.9501 11.6945 20.9428C11.6751 20.9352 11.6562 20.927 11.6377 20.9182C11.6235 20.9114 11.6089 20.9039 11.5945 20.896C11.5675 20.8809 11.5421 20.865 11.5177 20.8478C11.5139 20.8451 11.5097 20.8421 11.5055 20.839C11.4684 20.8117 11.4357 20.7834 11.4054 20.7528L4.74198 14.1594C4.41839 13.8392 4.41948 13.3212 4.74441 13.0023C5.0398 12.7124 5.50114 12.687 5.8257 12.9253L5.91866 13.0047L11.169 18.2L11.1698 3.81818C11.1698 3.36631 11.5415 3 12.0001 3Z"
                  fill="#3B5162"
                />
              </svg>
            )}
          </span>
        </header>
      )}
      {UserDetails && (
        <div className="total-content">
          <span className="total-number">{UserDetails.current}</span>

          <span className="total-msg">Total clientes</span>
        </div>
      )}
    </section>
  );
};

export default TotalClients;
