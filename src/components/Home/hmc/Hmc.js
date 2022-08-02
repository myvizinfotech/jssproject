import React from "react";
import { Link } from "react-router-dom";
import "./Hmc.css";
var msg = false;
function Hmc(props) {
  var date = new Date();
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    ,
    "November",
    "December",
  ];
  const [show, setShow] = React.useState();
  return (
    <div>
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <div id="page" className="site">
        <div className="custom-header-media"></div>
        {props.msg ? (
          <div className="hmc-notice-wrapper">
            <div className="hmc-container">
              <div className="hmc-notice-block hmc-clearfix">
                <span className="notice-caption">Notices</span>
                <div className="notice-content-wrapper"></div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="hmc-top-header-wrap">
          <div className="hmc-container">
            <div className="hmc-top-left-section-wrapper">
              <div className="date-section">
                {day[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}
                , {date.getFullYear()}
              </div>
              <nav
                id="top-navigation"
                className="top-navigation"
                role="navigation"
              >
                <div className="menu-topmenus-container">
                  <ul id="top-menu" className="menu">
                    <li
                      id="menu-item-279"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-279"
                    >
                      {/* <a href="http://www.jsspgrc.org/"></a> */}
                    </li>
                  </ul>
                </div>{" "}
              </nav>
            </div>
            <div className="hmc-top-right-section-wrapper"></div>
          </div>
        </div>
        <div className="hmc-logo-section-wrapper">
          <div className="hmc-container">
            <div className="site-branding">
              <div className="site-logo">
                <a href="/" className="custom-logo-link" rel="home">
                  <img
                    width="300px"
                    height="76px"
                    src="wp-content/uploads/2020/02/jsslogo.png"
                    className="custom-logo"
                    alt=""
                  />
                </a>{" "}
              </div>
            </div>
            <div className="hmc-header-banner-area ">
              <div className="header-info-wrapper flex">
                <div className="header-info-item hmm ">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <div className="info-inner-wrap">
                    <span>call-us&nbsp;&nbsp;</span>
                    0821-2548318
                  </div>
                </div>
                <div className="header-info-item hmm">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <div className="info-inner-wrap">
                    <span>email-us&nbsp;&nbsp;</span>
                    jssp418@yahoo.co.in
                  </div>
                </div>
                <div className="header-info-item hmm">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <div className="info-inner-wrap">
                    <span>location&nbsp;&nbsp;</span>
                    JSSTIS' Campus
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div id="hmc-menu-wrap" className="hmc-header-menu-wrapper">
          <div className="hmc-header-menu-block-wrap">
            <div className="hmc-container">
              <div className="hmc-navigation">
                {/* <a href="" className="menu-toggle hide">
                  {" "}
                  <i className="fa fa-navicon"> </i>{" "}
                </a> */}
                <nav
                  id="site-navigation"
                  className="main-navigation"
                  role="navigation"
                >
                  <div className="menu-main-menu-container">
                    <ul id="primary-menu" className="menu">
                      <li
                        id="menu-item-56"
                        className="menu-item menu-item-type-custom menu-item-object-custom  current_page_item menu-item-home menu-item-56  listbtn"
                      >
                        <Link to={"/"}> HOME</Link>
                      </li>
                      <li
                        id="menu-item-57"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-57"
                      >
                        <a>ABOUT US</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-89"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-89"
                          >
                            <Link to={"/Mahavidyapeetha"}>
                              JSS MAHAVIDYAPEETHA
                            </Link>
                          </li>
                          <li
                            id="menu-item-95"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"
                          >
                            <Link to={"/Jsspolytechnic"}>JSS POLYTECHNIC</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-58"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-58"
                      >
                        <Link to={"/program"}>PROGRAM</Link>
                      </li>
                      <li
                        id="menu-item-59"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59"
                      >
                        <a>RESULTS</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-169"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-169"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_CE.pdf">
                              CIVIL ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-167"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-167"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_CS.pdf">
                              COMPUTER SCIENCE AND ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-171"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-171"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_EC.pdf">
                              ELECTRONICS AND COMMUNICATION ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-173"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-173"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_EE.pdf">
                              ELECTRICAL AND ELECTRONICS ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-175"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-175"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_IS.pdf">
                              INFORMATION SCIENCE AND ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-179"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-179"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_MC.pdf">
                              MECHATRONICS ENGINEERING
                            </a>
                          </li>
                          <li
                            id="menu-item-177"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-177"
                          >
                            <a href="wp-content/uploads/2022/02/Result_M21_418_ME.pdf">
                              MECHANICAL ENGINEERING
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-60"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-60"
                      >
                        <a>ACTIVITIES</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-149"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-149"
                          >
                            <Link to={"/Ncc"}>NCC</Link>
                          </li>
                          <li
                            id="menu-item-157"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-157"
                          >
                            <Link to={"/Nss"}> NSS</Link>
                          </li>
                          <li
                            id="menu-item-159"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-159"
                          >
                            <a href="wp-content/uploads/2022/02/Committees.pdf">
                              COMMITTEES
                            </a>
                          </li>
                          <li
                            id="menu-item-161"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-161"
                          >
                            <a href="wp-content/uploads/2022/07/EOA-Report-22-23.pdf">
                              AICTE
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-677"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-677"
                      >
                        <a>Online Grievance</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-680"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-680"
                          >
                            <Link to={"/Complaints"}>Complaints</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-689"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-689"
                      >
                        <a href="wp-content/uploads/2022/06/SNQ.pdf">SNQ</a>
                      </li>
                      <li
                        id="menu-item-555"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-555"
                      >
                        <a href="governing-council-2/index.html">
                          Governing Council
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-515"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-515"
                          >
                            <Link to={"/GCM"}>Government Council Members</Link>
                          </li>
                          <li
                            id="menu-item-568"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-568"
                          >
                            <a>GC Proceedings</a>
                            <ul className="sub-menu">
                              <li
                                id="menu-item-669"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-669"
                              >
                                <a href="wp-content/uploads/2022/02/Proceedings-11th-GC.pdf">
                                  11th
                                </a>
                              </li>
                              <li
                                id="menu-item-670"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-670"
                              >
                                <a href="wp-content/uploads/2022/02/Proceedings-12th-GC.pdf">
                                  12th
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-257"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-257"
                      >
                        <Link to={"/Gallary"}>GALLERY</Link>
                      </li>
                      <li
                        id="menu-item-269"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-269"
                      >
                        <Link to={"/contact"}>CONTACT US</Link>
                      </li>
                    </ul>
                  </div>{" "}
                </nav>

                <div className="hmc-header-search-wrapper">
                  <span className="search-main" onClick={() => setShow(!show)} onChange={()=>{}}>
                    <i className="fa fa-search"></i>
                  </span>
                  <div className={show ? "search-form-main hmc-clearfix active-search" : "search-form-main hmc-clearfix"}>
                    <form
                      role="search"
                      method="get"
                      className="search-form"
                      action="http://www.jsspolytechnic.org/"
                    >
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search &hellip;"
                          value=""
                          name="s"
                        />
                      </label>
                      <input
                        type="submit"
                        className="search-submit"
                        value="Search"
                      />
                    </form>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hmc;
