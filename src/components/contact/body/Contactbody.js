import React from "react";
import "./Contactbody.css";
function Contactbody() {
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
                id="post-267"
                className="post-267 page type-page status-publish hentry"
              >
                <div className="hmc-article-thumb"></div>
                <header className="entry-header">
                  <h1 className="entry-title">CONTACT US</h1>{" "}
                </header>
                <div className="entry-content">
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%20JSS%20Polytechnic%20SJCE%20Campus%2C%20Manasa%20Gangothri%2C%20Mysuru%2C%20Karnataka%20570006&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            width="1170"
                            height="500"
                            frameborder="0"
                          ></iframe>
                          <a href="https://www.embedgooglemap.net/">
                            embedgooglemap.net
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4>Contact info</h4>

                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container">
                      <pre className="wp-block-verse">
                        {" "}
                        JSSTIs' Campus
                        <br /> Mysuru-570006
                        <br /> Karnataka
                        <br /> Phone No: 0821-2548318
                        <br /> Mob: +91-9686677237
                        <br /> Email: jssp418@yahoo.co.in
                        <br /> Timings: 08:00 AM to 05:45 PM{" "}
                      </pre>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
          <aside
            id="secondary"
            className="sidebar-main-area widget-area hamroclassName_right_sidebar"
            role="complementary"
          ></aside>
        </div>
      </div>
    </div>
  );
}

export default Contactbody;
