import React from "react";
import { Link } from "react-router-dom";
function Gallarybody() {
  return (
    <div>
      <div id="content" className="site-content" style={{ marginTop: "30px" }}>
        <div className="hmc-container">
          <div id="primary" className="content-area main-content-area">
            <main id="main" className="site-main" role="main">
              <article
                id="post-255"
                className="post-255 page type-page status-publish hentry"
              >
                <div className="hmc-article-thumb"></div>
                <header className="entry-header">
                  <h1 className="entry-title">GALLERY</h1>{" "}
                </header>
                <div className="entry-content">
                  <div
                    className="aigpl-gallery-album-wrp aigpl-gallery-album aigpl-clearfix aigpl-album-design-1 "
                    id="aigpl-gallery-1"
                    style={{ width: "1200px" }}
                  >
                    <div className="aigpl-cnt-wrp aigpl-col-3 aigpl-columns aigpl-first">
                      <div className="aigpl-inr-wrp">
                        <div className="aigpl-img-wrp">
                          <Link to={"/Photo1"}>
                            <img
                              className="aigpl-img"
                              src="../wp-content/uploads/2020/11/harangi-dam-visit-ED-copy-2.jpg"
                              alt="Industrial Visits"
                              style={{ width: "600px" }}
                            />
                          </Link>
                        </div>

                        <a
                          className="aigpl-img-link"
                          href="indexee14.html?album=474"
                          target="_self"
                        >
                          <div className="aigpl-img-title aigpl-center">
                            Industrial Visits
                          </div>
                        </a>

                        <div className="aigpl-img-count aigpl-center">
                          2 Photos
                        </div>
                      </div>
                    </div>
                    <div className="aigpl-cnt-wrp aigpl-col-3 aigpl-columns">
                      <div className="aigpl-inr-wrp">
                        <div className="aigpl-img-wrp">
                          <Link to={"/Photo2"}>
                            <img
                              className="aigpl-img"
                              src="../wp-content/uploads/2020/02/hostel.jpg"
                              alt="Campus Area"
                              style={{ width: "600px" }}
                            />
                          </Link>
                        </div>

                        <a
                          className="aigpl-img-link"
                          href="indexa903.html?album=260"
                          target="_self"
                        >
                          <div className="aigpl-img-title aigpl-center">
                            Campus Area
                          </div>
                        </a>

                        <div className="aigpl-img-count aigpl-center">
                          1 Photos
                        </div>
                      </div>
                    </div>
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

export default Gallarybody;
