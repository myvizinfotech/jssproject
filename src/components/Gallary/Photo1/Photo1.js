import React from "react";
import Hmc from "../../Home/hmc/Hmc";
import Footer from "../../Home/Home_footer/Footer";
import { Link } from "react-router-dom";

function Photo1() {
  return (
    <div>
      <Hmc />

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
                  <div className="aigpl-breadcrumb-wrp">
                    <Link to={"/Gallary"} className="aigpl-breadcrumb">Main Album</Link>
                   {" "}
                    &raquo; Industrial Visits
                  </div>
                  <div
                    className="aigpl-gallery aigpl-gallery-wrp aigpl-gallery-grid aigpl-clearfix aigpl-design-1 aigpl-popup-gallery "
                    id="aigpl-gallery-2"
                    style={{ width: "1200px" }}
                  >
                    <div
                      className="aigpl-cnt-wrp aigpl-col-3 aigpl-columns aigpl-first"
                      data-item-index="1"
                    >
                      <div className="aigpl-inr-wrp">
                        <div className="aigpl-img-wrp">
                          <a
                            class="aigpl-img-link"
                            href="../wp-content/uploads/2020/11/harangi-dam-visit-ED-copy-2.jpg"
                          >
                            <img
                              className="aigpl-img"
                              src="../wp-content/uploads/2020/11/harangi-dam-visit-ED-copy-2.jpg"
                              alt="Harangi dam visit"
                              style={{ width: "400px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="aigpl-cnt-wrp aigpl-col-3 aigpl-columns"
                      data-item-index="2"
                    >
                      <div className="aigpl-inr-wrp">
                        <div className="aigpl-img-wrp">
                          <a
                            class="aigpl-img-link"
                            href="../wp-content/uploads/2020/11/IISc-copy.jpg"
                          >
                            <img
                              className="aigpl-img"
                              src="../wp-content/uploads/2020/11/IISc-copy.jpg"
                              alt=""
                              style={{ width: "400px" }}
                            />
                          </a>
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

      <Footer />
    </div>
  );
}

export default Photo1;
