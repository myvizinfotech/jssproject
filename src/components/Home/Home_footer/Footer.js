import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="bottom-footer hmc-clearfix">
          <div className="hmc-container">
            {" "}
            <div className="site-info">
              <span className="hmc-copyright-text">Copyright @ 2020 </span>
              <span className="sep"></span>
            </div>
            <nav
              id="footer-navigation"
              className="footer-navigation"
              role="navigation"
            >
              <div id="footer-menu" className="menu">
                <ul>
                  <li className="page_item page-item-564">
                  <a href="wp-content/uploads/2022/02/Proceedings-11th-GC.pdf" target="_blank"> 11th </a>
                  </li>
                  <li className="page_item page-item-562">
                    <a href="wp-content/uploads/2022/02/Proceedings-12th-GC.pdf" target="_blank">12th</a>
                  </li>
                  <li className="page_item page-item-71">
                  <Link to={"/Mahavidyapeetha"}>
                      About JSS MAHAVIDYAPEETHA
                      </Link>
                  </li>
                  <li className="page_item page-item-90">
                  <Link to={"/Jsspolytechnic"}>
                      About JSS Polytechnic
                      </Link>
                  </li>
                  <li className="page_item page-item-604">
                  <Link to={"/Jsspolytechnic"}>Alumni </Link>
                  </li>
                  <li className="page_item page-item-606">
                  <Link to={"/Jsspolytechnic"}>
                      Alumni Governing Body Members
                      </Link>
                  </li>
                  <li className="page_item page-item-110">
                    <a href="wp-content/uploads/2022/02/Result_M21_418_CE.pdf" target="_blank">
                      CIVIL ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-678">
                    <a href="complaints/index.html">Complaints</a>
                  </li>
                  <li className="page_item page-item-118">
                    <a href="wp-content/uploads/2022/02/Result_M21_418_CS.pdf">
                      COMPUTER SCIENCE &#038; ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-267">
                    <a href="contact-us/index.html">CONTACT US</a>
                  </li>
                  <li className="page_item page-item-129">
                    <a href="wp-content/uploads/2022/02/Result_M21_418_EE.pdf" target="_blank">
                      ELECTRICAL AND ELECTRONICS ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-122">
                    <a href="wp-content/uploads/2022/02/Result_M21_418_EC.pdf" target="_blank">
                      ELECTRONIC &#038; COMMUNICATION ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-255">
                    <a href="gallery/index.html">GALLERY</a>
                  </li>
                  <li className="page_item page-item-558">
                    <a href="gc-proceedings/index.html">GC Proceedings</a>
                  </li>
                  <li className="page_item page-item-553">
                    <a href="governing-council-2/index.html">
                      Governing Council
                    </a>
                  </li>
                  <li className="page_item page-item-507">
                    <a href="governing-council/index.html">
                      Governing Council Members
                    </a>
                  </li>
                  <li className="page_item page-item-5 page_item_has_children current_page_item">
                    <a href="index.html" aria-current="page">
                      Home Page
                    </a>
                  </li>
                  <li className="page_item page-item-133">
                    <a href="information-science-engineering/index.html">
                      INFORMATION SCIENCE &#038; ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-137">
                    <a href="mechanical-engineering/index.html">
                      MECHANICAL ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-143">
                    <a href="wp-content/uploads/2022/02/Result_M21_418_ME.pdf" target="_blank">
                      MECHATRONICS ENGINEERING
                    </a>
                  </li>
                  <li className="page_item page-item-148">
                  <Link to={"/Ncc"}>NCC</Link>
                  </li>
                  <li className="page_item page-item-153">
                  <Link to={"/Nss"}> NSS</Link>
                  </li>
                  <li className="page_item page-item-484">
                    <a href="time-table/index.html">Offline Time Table</a>
                  </li>
                  <li className="page_item page-item-675">
                  <Link to={"/Complaints"}>Online Grievance</Link>
                  </li>
                  <li className="page_item page-item-496">
                    <a href="parent-consent-form/index.html">
                      Parent Consent letter
                    </a>
                  </li>
                  <li className="page_item page-item-98">
                    <a href="departments/index.html">PROGRAMS</a>
                  </li>
                  <li className="page_item page-item-576">
                    <a href="python/index.html">PYTHON</a>
                  </li>
                  <li className="page_item page-item-643">
                    <a href="snq/index.html">SNQ</a>
                  </li>
                  <li className="page_item page-item-492">
                    <a href="sop-from-govt/index.html">SOP from Govt.</a>
                  </li>
                  <li className="page_item page-item-572">
                    <a href="webinar-2021/index.html">
                      STATISTICS &#038; ANALYTICS LAB
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
      <div id="hmc-scrollup" className="animated arrow-hide">
        <i className="fa fa-chevron-up"></i>
      </div>
    </div>
  );
}

export default Footer;
