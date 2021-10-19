import React, { useState, useEffect} from "react";
import { Message } from "../Message";
import { Loader } from "../Loader";
import { helpHttp } from "../../helpers/helpHttp";

const TotalProducts = () => {
  let url = "https://restaurantrestapi.herokuapp.com/api/orderdetails/summary";
  const [OrderDetails, setOrderDetails] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setOrderDetails(res);
          setError(null);
        } else {
          setOrderDetails(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);
    return (
<section className="box-content total-summary-item">
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
                        d="M14.9857 2C18.0482 2 20 3.43503 20 6.25765V20.3309C20 20.7736 19.8285 21.1982 19.5232 21.5112C19.2179 21.8242 18.8038 22 18.3608 22C18.0965 21.9957 17.8368 21.9291 17.5863 21.7971L11.974 18.6635L6.38442 21.8037C5.7112 22.1624 4.89545 21.9969 4.38431 21.3975L4.28627 21.2719L4.19263 21.1174C4.07042 20.8782 4.00448 20.613 4 20.3309V6.43434C4 3.49929 5.90915 2 9.01434 2H14.9857ZM14.9857 3.44775H9.01434C6.61925 3.44775 5.41205 4.39579 5.41205 6.43434L5.41195 20.3189C5.41267 20.3631 5.42346 20.4065 5.41172 20.3897L5.44919 20.4519C5.51373 20.5421 5.63485 20.5715 5.71962 20.5265L11.3068 17.3883C11.7233 17.1576 12.225 17.1576 12.6435 17.3894L18.2463 20.5173C18.2887 20.5397 18.3355 20.5517 18.372 20.5523C18.4293 20.5523 18.4842 20.529 18.5247 20.4875C18.5652 20.446 18.5879 20.3897 18.5879 20.3309V6.25765C18.5879 4.35788 17.35 3.44775 14.9857 3.44775ZM15.4079 8.31663C15.7978 8.31663 16.1139 8.64072 16.1139 9.0405C16.1139 9.40697 15.8483 9.70984 15.5037 9.75777L15.4079 9.76438H8.54042C8.1505 9.76438 7.8344 9.44029 7.8344 9.0405C7.8344 8.67404 8.10001 8.37117 8.44462 8.32324L8.54042 8.31663H15.4079Z"
                        fill="#3B5162"
                      />
                    </svg>
                  </span>
                  {OrderDetails&&<span className="porcentage negative">{OrderDetails.percentage.toFixed(2)}%</span>}
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
                {OrderDetails&&<span className="total-number">{OrderDetails.current}</span>}
                  <span className="total-msg">Total productos ordenados</span>
                </div>
              </section>
    )
}

export default TotalProducts
