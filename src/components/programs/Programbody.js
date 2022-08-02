import React from "react";
import "./Programbody.css";
import { Link } from "react-router-dom";
function Programbody() {
  return (
    <div>
      <div id="content" className="site-content" style={{ marginTop: "30px" }}>
        <div className="hmc-container">
          <div
            id="primary"
            className="content-area main-content-area"
            style={{ width: "100%" }}
          >
            <main id="main" className="site-main" role="main">
              <article
                id="post-98"
                className="post-98 page type-page status-publish hentry"
              >
                <div className="hmc-article-thumb"></div>
                <header className="entry-header">
                  <h1 className="entry-title">PROGRAMS</h1>{" "}
                </header>
                <div className="entry-content">
                  <div style={{ overflowX: "auto", width: "1200px" }}>
                    <table>
                      <tbody>
                        <tr>
                          <th>PROGRAMS</th>
                          <th>HOD</th>
                          <th>COURSE DURATION</th>
                          <th>DEGREE LEVEL</th>
                          <th>MORE INFORMATION</th>
                        </tr>
                        <tr>
                          <td>CIVIL ENGINEERING</td>
                          <td>MR.MAHADEVAPRABHU K M</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/civil"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>COMPUTER SCIENCE AND ENGINEERING</td>
                          <td>MRS.SHINU KOSHY</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/computer"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>ELECTRONICS &amp; COMMUNICATION ENGINEERING</td>
                          <td>MRS.ASHA KULKARNI</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/electronic-communication"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>ELECTRICAL &amp; ELECTRONICS ENGINEERING</td>
                          <td>MRS.PRATHIBHA D</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/electric-electronic"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>INFORMATION SCIENCE &amp; ENGINEERING</td>
                          <td>MR.SHIVASWAMY.M</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/informationScience"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>MECHANICAL ENGINEERING</td>
                          <td>MR.RAJASHEKARA.H.M</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/mechanical"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>MECHATRONICS ENGINEERING</td>
                          <td>MRS.MANJULA.M</td>
                          <td>3 YEARS</td>
                          <td>DIPLOMA</td>
                          <td>
                            <Link to={"/mechatronic"}>
                              <a className="button">Read More</a>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programbody;
