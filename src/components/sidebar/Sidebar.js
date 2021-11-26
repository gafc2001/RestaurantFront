import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sidebar/sidebar.css";
import "../../assets/css/style.css";
import logo from "../../assets/images/logo.png";
import { isAuthenticated } from "../../auth/authentications";
export default function Sidebar() {
  let role = sessionStorage.getItem("role");
  let Auth=isAuthenticated();
  const logoutSession = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  };
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="menu-responsive center"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`sidebar ${toggle ? "toggleRight" : "toggleLeft"}`}>
        <ul className="sidebar-menu">
          <NavLink to="/">
            <li className="sidebar-item">
              <span className="center logo">
                <img src={logo} alt="delibakery logo" width="80%" />
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/home"
            className="sidebar-item center"
            activeClassName="sidebar-item-active"
          >
            <li className="center">
              <span className="center">
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.73049 2.78823C11.0005 1.77923 12.7805 1.73923 14.0895 2.66823L14.2505 2.78823L20.3395 7.65923C21.0095 8.17823 21.4205 8.94923 21.4905 9.78823L21.5005 9.98923V18.0982C21.5005 20.1882 19.8495 21.8882 17.7805 21.9982H15.7905C14.8395 21.9792 14.0705 21.2392 14.0005 20.3092L13.9905 20.1682V17.3092C13.9905 16.9982 13.7595 16.7392 13.4505 16.6882L13.3605 16.6782H10.6895C10.3705 16.6882 10.1105 16.9182 10.0705 17.2182L10.0605 17.3092V20.1592C10.0605 20.2182 10.0495 20.2882 10.0405 20.3382L10.0305 20.3592L10.0195 20.4282C9.90049 21.2792 9.20049 21.9282 8.33049 21.9892L8.20049 21.9982H6.41049C4.32049 21.9982 2.61049 20.3592 2.50049 18.2982V9.98923C2.50949 9.13823 2.88049 8.34823 3.50049 7.79823L9.73049 2.78823ZM13.3805 3.87823C12.6205 3.26823 11.5405 3.23923 10.7405 3.76823L10.5895 3.87823L4.50949 8.77923C4.16049 9.03823 3.95049 9.42823 3.90049 9.83823L3.88949 9.99823V18.0982C3.88949 19.4282 4.92949 20.5182 6.25049 20.5982H8.20049C8.42049 20.5982 8.61049 20.4492 8.63949 20.2392L8.66049 20.0592L8.67049 20.0082V17.3092C8.67049 16.2392 9.49049 15.3692 10.5405 15.2882H13.3605C14.4295 15.2882 15.2995 16.1092 15.3805 17.1592V20.1682C15.3805 20.3782 15.5305 20.5592 15.7305 20.5982H17.5895C18.9295 20.5982 20.0195 19.5692 20.0995 18.2582L20.1105 18.0982V9.99823C20.0995 9.56923 19.9205 9.16823 19.6105 8.86923L19.4805 8.75823L13.3805 3.87823Z"
                    fill="#3B5162"
                  />
                </svg>
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/notifications"
            className="sidebar-item center"
            activeClassName="sidebar-item-active"
          >
            <li className="center">
              <span className="center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z"
                    fill="#3B5162"
                  />
                </svg>
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/message"
            className="sidebar-item center"
            activeClassName="sidebar-item-active"
          >
            <li className="center">
              <span className="center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3212 2.75806C17.8351 2.77511 19.2761 3.41599 20.3085 4.5315C21.3408 5.64701 21.8745 7.13976 21.7865 8.61703L21.7852 14.854C21.8745 16.3763 21.3408 17.8691 20.3085 18.9846C19.2761 20.1001 17.8351 20.741 16.3127 20.7581H7.25208C4.08255 20.7581 1.7959 18.1965 1.7959 14.8991V8.61703C1.7959 5.31957 4.08255 2.75806 7.25208 2.75806H16.3212ZM16.3043 4.28644H7.25208C4.95869 4.28644 3.31334 6.12961 3.31334 8.61703V14.8991C3.31334 17.3865 4.95869 19.2297 7.25208 19.2297H16.3043C17.4032 19.2173 18.4491 18.7521 19.1985 17.9424C19.9479 17.1327 20.3352 16.0492 20.2691 14.8991L20.2704 8.57194C20.3352 7.46693 19.9479 6.38339 19.1985 5.57368C18.4491 4.76397 17.4032 4.29878 16.3043 4.28644ZM17.8199 8.39642C18.058 8.69598 18.0359 9.12067 17.7841 9.39357L17.7017 9.47061L13.5947 12.7817C12.5972 13.5648 11.219 13.6039 10.1789 12.8956L10.0176 12.7775L5.88316 9.47259C5.55494 9.21022 5.50002 8.72952 5.76051 8.39891C5.99731 8.09837 6.41326 8.02533 6.73353 8.21166L6.82647 8.27537L10.9557 11.5762C11.4187 11.9396 12.0534 11.9676 12.5367 11.6649L12.6542 11.5823L16.7535 8.27736C17.0806 8.01361 17.5581 8.06692 17.8199 8.39642Z"
                    fill="#3B5162"
                  />
                </svg>
              </span>
            </li>
          </NavLink>
          {Auth&&(role !== "ROLE_USER" && (
            <NavLink
              to="/maindashboard"
              className="sidebar-item center"
              activeClassName="sidebar-item-active"
            >
              <li className="center">
                <span className="center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z"
                      fill="#3B5162"
                    />
                  </svg>
                </span>
              </li>
            </NavLink>
          ))}

          <NavLink
            to="/profile"
            className="sidebar-item center"
            activeClassName="sidebar-item-active"
          >
            <li className="center">
              <span className="center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594 -662 -63 -99 -186 -351 -230 -471 -421 -1149 41 -2445 1097 -3078 414 -248 913 -376 1397 -357 533 20 1028 196 1460 519 126 95 377 346 476 477 488 645 650 1442 449 2209 -48 180 -92 297 -180 476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193 -740 235 -147 23 -475 34 -615 20z m570 -185 c678 -100 1284 -488 1662 -1065 81 -124 192 -345 243 -484 48 -130 99 -332 121 -481 22 -143 25 -480 6 -620 -40 -293 -117 -545 -241 -788 -57 -114 -177 -307 -190 -307 -4 0 -15 24 -25 53 -64 183 -221 444 -371 618 -191 220 -473 429 -716 530 -41 17 -76 33 -78 35 -2 2 20 29 49 61 120 131 226 317 269 473 105 376 -8 798 -286 1072 -43 43 -103 96 -133 119 -82 61 -262 145 -375 176 -90 24 -117 27 -275 27 -158 0 -185 -3 -275 -27 -113 -31 -293 -115 -375 -176 -30 -23 -90 -76 -133 -119 -278 -274 -391 -696 -286 -1072 43 -156 149 -342 269 -473 29 -32 51 -59 49 -61 -2 -2 -37 -18 -78 -35 -250 -104 -543 -324 -732 -549 -146 -175 -293 -423 -355 -600 -10 -28 -21 -52 -25 -52 -13 0 -133 193 -190 307 -124 243 -201 495 -241 788 -19 140 -16 477 6 620 39 258 110 485 226 721 365 741 1083 1237 1915 1323 127 14 429 6 565 -14z m-169 -761 c338 -64 621 -315 723 -643 158 -505 -140 -1044 -654 -1183 -123 -33 -357 -33 -480 0 -514 139 -812 678 -654 1183 140 450 605 730 1065 643z m-673 -1908 c162 -81 321 -119 502 -119 181 0 340 38 502 119 37 19 75 34 85 34 10 0 67 -20 126 -44 502 -205 899 -633 1071 -1154 l28 -82 -31 -38 c-39 -50 -198 -201 -287 -274 -245 -199 -580 -369 -887 -447 -414 -106 -800 -106 -1214 0 -306 78 -643 248 -887 447 -89 73 -248 224 -287 274 l-31 38 28 82 c147 445 459 825 871 1057 96 55 295 141 326 141 10 0 48 -15 85 -34z" />
                  </g>
                </svg>

              </span>
            </li>
          </NavLink>
          {!Auth&&(<NavLink
            to="/login"
            className="sidebar-item center"
            activeClassName="sidebar-item-active"
          >
            <li className="center">
              <span className="center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2975 4946 c-94 -41 -124 -169 -58 -247 51 -60 36 -59 700 -59 686 0 691 -1 833 -72 148 -74 271 -220 323 -383 l22 -70 0 -1555 0 -1555 -22 -70 c-62 -196 -225 -360 -423 -428 -64 -21 -78 -22 -717 -27 -638 -5 -652 -5 -679 -26 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134 27 -21 36 -21 689 -21 725 0 706 -1 866 61 242 96 449 303 545 545 65 167 61 40 61 1789 0 1481 -1 1590 -18 1654 -46 182 -128 327 -257 457 -129 131 -264 210 -449 262 -74 21 -95 21 -731 24 -533 2 -661 0 -685 -11z" />
                    <path d="M2015 4306 c-41 -18 -83 -69 -91 -111 -17 -91 -49 -54 689 -792 l682 -683 -1597 -2 c-1595 -3 -1597 -3 -1624 -24 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134 27 -21 29 -21 1624 -24 l1597 -2 -682 -683 c-740 -740 -706 -701 -688 -794 9 -49 69 -109 118 -118 94 -18 40 -66 949 843 743 744 837 841 843 874 18 95 65 41 -833 942 -481 482 -840 834 -859 842 -40 17 -89 17 -128 0z" />
                  </g>
                </svg>

              </span>
            </li>
          </NavLink>)}
          {Auth&&(<NavLink
            to="/"
            className="sidebar-item center"
            onClick={logoutSession}
          >
            <li className="center">
              <span className="center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z" fill="#3B5162" />
                </svg>

              </span>
            </li>
          </NavLink>)}
        </ul>
      </nav>
    </>
  );
}
