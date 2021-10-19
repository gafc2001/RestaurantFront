import React, { useState, useEffect } from "react";
import { Message } from "../Message";
import { Loader } from "../Loader";
import { helpHttp } from "../../helpers/helpHttp";

const TotalPrice = () => {
  let url = "https://restaurantrestapi.herokuapp.com/api/order/summary";
  const [totalPrice, settotalPrice] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          settotalPrice(res);
          setError(null);
        } else {
          settotalPrice(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  return (
    <section className="box-content total-summary-item">
      <header className="total-header ">
        <span className="icon-total">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" stroke="#3B5162" strokeWidth="1.8" />
            <path
              d="M10.459 9.94112C10.459 9.34702 10.916 8.97489 11.5362 8.90307V10.9988C11.471 10.9857 11.4122 10.9661 11.3534 10.9465C10.7593 10.7507 10.459 10.4112 10.459 9.94112ZM13.7233 14.015C13.7233 14.6548 13.2337 15.0792 12.5417 15.1379V12.8855C12.5874 12.8986 12.6331 12.9116 12.6722 12.9182C13.4034 13.1206 13.7233 13.4796 13.7233 14.015ZM12.5547 17.3772L12.5482 16.5481C14.337 16.3783 15.473 15.3925 15.473 13.8387C15.473 12.2588 14.4088 11.5929 13.0966 11.3121L12.5417 11.1946V8.91613C13.2337 9.02712 13.6189 9.54941 13.6385 10.0717H15.3098C15.2837 8.71374 14.2195 7.68222 12.5678 7.50595V6.65723H11.5101V7.49942C9.9302 7.64305 8.68976 8.51136 8.68976 10.0782C8.68976 11.5602 9.76046 12.3175 10.9748 12.5852L11.5362 12.7093V15.1379C10.7006 15.0269 10.2632 14.5242 10.2305 13.9236H8.52002C8.53308 15.1314 9.34263 16.4045 11.5036 16.5611L11.4971 17.3772H12.5547Z"
              fill="#3B5162"
            />
          </svg>
        </span>
        {totalPrice && <span className="porcentage negative">{totalPrice.percentage}</span>}
        <span className="icon-status negative">
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
        </span>
      </header>
      <div className="total-content">
        {totalPrice && <span className="total-number">{totalPrice.current}</span>}
        <span className="total-msg">Ganancias totales</span>
      </div>
    </section>
  );
};

export default TotalPrice;
