import React from "react";
import "../../styles/style.mincd2e.css";
// import "../styles/hamroclassName.css";
// import "../styles/learnpress.min20b9.css";
import "../../styles/pfc-stylecd2e.css";
import "../../styles/style20b9.css";
import "../../styles/tcy-front-style.min8a54.css";
// import "../styles/theeventcalendar.min20b9.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div
        id="content"
        className="site-content"
        style={{ width: "100%" }}
      >
        <div
          className="main-banner-slider-wrapper"
          style={{ marginBottom: "30px" }}
        >
          <div
            className="cycle-slideshow hamroclassName-main-banner hamroclass-main-banner overlay-enabled"
            // data-cycle-fx="fade"
            // data-cycle-speed="3000"
            // data-cycle-pause-on-hover="true"
            // data-cycle-loader="true"
            // data-cycle-log="false"
            // data-cycle-swipe="true"
            // data-cycle-auto-height="container"
            // data-cycle-timeout="3000"
            // data-cycle-slides="article"
          >
            <Carousel
              autoPlay={true}
              interval={8000}
              transitionTime={3000}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
            >
              <div className="banner_div">
                <img
                  width="1200"
                  height="400"
                  src="../wp-content/uploads/2021/07/collegebuilding.jpg"
                  className="banner_img"
                  alt=""
                />{" "}
              </div>
              <div className="banner_div">
                <img
                  width="1200"
                  height="400"
                  src="../wp-content/uploads/2021/07/college.jpg"
                  className="banner_img"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="hmc-container-fluid">
          <div className="hmc-home-middle-section hmc-clearfix">
            <div className="hmc-container">
              <div className="middle-primary">
                <section
                  id="hamroclass_page_block_widget-5"
                  className="widget widget-layout2 hamroclassName_page_block_widget hamroclass_page_block_widget hmc-full-widget"
                >
                  {" "}
                  <div
                    className="about-us-wrapper"
                    style={{
                      backgroundColor: "#ffffff",
                      backgroundImg: "url()",
                    }}
                  >
                    <div className="hmc-container">
                      <div className="row about-content-media-wrap">
                        <div className="about-content-part">
                          <div className="about-content-inner">
                            <div className="about-block-title">
                              <h3>WELCOME TO JSS POLYTECHNIC</h3>
                            </div>
                            <p>
                              The polytechnic is situated on an extensive 6
                              hectares of land in ‘JSS TECHNICAL INSTITUTIONS’
                              CAMPUS, to the west of University of Mysore,
                              Manasagangothri. It is located at about 6 kms from
                              KSRTC Bus stand and 5 kms from the Railway
                              station. It is recognized by the Government of
                              Karnataka and approved by the All India Council
                              for Technic
                            </p>
                            <div className="about-btns-wrap buttons-wrap">
                              <Link to={"/jsspolytechnic"}>
                                <a className="custom-button button-secondary">
                                  Read More
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="about-media-part">
                          <figure className="page-thumbnail-wrap"></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>{" "}
              </div>
              <div className="middle-aside">
                <section id="pfcwidget-3" className="widget pfc-widget">
                  <div className="pfc-posts-wrap">
                    <h4 className="hmc-block-title">
                      <span className="title-wrapper">Notification</span>
                    </h4>
                    <div className="pfc-posts-inner"></div>
                  </div>
                </section>{" "}
              </div>
            </div>
          </div>
          <div className="hmc-home-bottom-section">
            <section
              id="hamroclass_testimonial_section_widget-3"
              className="widget widget-layout2 hamroclassName_testimonial_section_widget hamroclass_testimonial_section_widget hmc-full-widget"
            >
              {" "}
              <div
                className="hamroclassName-testimonial-wrapper hamroclass-testimonial-wrapper"
                style={{ backgroundImage: "url('')" }}
              >
                <span
                  className="testimonial-overlay"
                  style={{ backgroundColor: "#81d742" }}
                >
                  &nbsp;
                </span>
                <div className="hmc-container">
                  <h2 className="section-title">
                    <span className="title-wrapper">PROGRAMS OFFERED</span>
                  </h2>{" "}
                  <ul className="hamroclassName-testimonial-list hamroclass-testimonial-list column2 layout2">
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Civil engineering is a professional engineering
                            discipline that deals with the design, construction,
                            and maintenance of the physical and naturally built
                            environment, including public works such as roads,
                            bridges, canals, dams, airports, sewerage systems,
                            pipelines, structural components of buildings, and
                            railways.
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/CIVIL.png"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              CIVIL ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Computer Science Engineering (CSE) is an academic
                            programme which integrates the field of Computer
                            Engineering and Computer Science. The programme,
                            which emphasises the basics of computer programming
                            and networking, comprises a plethora of topics. The
                            said topics are related to computation, algorithms,
                            programming languages, program design, computer
                            software, computer hardware, etc.
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/CS.jpg"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              COMPUTER SCIENCE &amp; ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Information Science and Engineering is a discipline
                            which includes theories, standards, methods and
                            innovations of various different domains like
                            mathematics, cognitive science and information
                            theory to solve complex IT problems.
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/bsis-venn-diagram.jpg"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              INFORMATION SCIENCE &amp; ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Electronics and Communications Engineering (ECE)
                            involves researching, designing, developing and
                            testing of electronic equipment used in various
                            systems. ... It also deals with the manufacturing of
                            electronic devices, circuits, and communications
                            equipment.
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/ELECRICAL-COMMUNICATION.jpg"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              ELECTRONICS &amp; COMMUNICATION ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Electrical engineering is an engineering discipline
                            concerned with the study, design and application of
                            equipment, devices and systems which use
                            electricity, electronics, and electromagnetism.{" "}
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/electrical-and-electronics-engineering-500x500-1.jpg"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              ELECTRICAL AND ELECTRONICS ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Mechanical engineering is an engineering branch that
                            combines engineering physics and mathematics
                            principles with materials science to design,
                            analyze, manufacture, and maintain mechanical
                            systems
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/01/MECH.png"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              MECHANICAL ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-container">
                        <div className="client-words">
                          <p>
                            Mechatronics engineering, is a multidisciplinary
                            branch of engineering that focuses on the
                            engineering of both electrical and mechanical
                            systems, and also includes a combination of
                            robotics, electronics, computer, telecommunications,
                            systems, control, and product engineering
                          </p>
                        </div>
                        <div className="client-logo-details-wrap">
                          <figure className="client-logo">
                            <img
                              src="wp-content/uploads/2020/10/mech.jpg"
                              title=""
                              alt=""
                            />
                          </figure>
                          <div className="client-details">
                            <span className="client-name">
                              MECHATRONICS ENGINEERING
                            </span>
                            <span className="client-position"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section
              id="media_image-6"
              className="widget widget-layout2 widget_media_image"
            >
              <h2 className="section-title">
                <span className="title-wrapper">OUR Recruiters</span>
              </h2>
              <img
                width="1200"
                height="399"
                src="wp-content/uploads/2020/10/Recuiters-e1602658278748.jpg"
                className="image wp-image-394 aligncenter attachment-1200x399 size-1200x399"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
                title="Recruiter"
              />
            </section>
            <section
              id="hamroclassName_partner_block_widget-2"
              className="widget widget-layout2 hamroclassName_our_team_widget hmc-full-widget"
            >
              {" "}
              <div className="hmc-container">
                <h2 className="section-title">
                  <span className="title-wrapper">OUR FACILITIES</span>
                </h2>{" "}
                <div className="hamroclassName-partner-blocks column4">
                  <ul
                    className="partner-block-list flex"
                    style={{ width: "100%" }}
                  >
                    <li className="partner-block-item">
                      <div className="partner-image-block">
                        <figure className="has-team-image">
                          <img
                            src="wp-content/uploads/2020/02/lib.jpg"
                            title=""
                            alt=""
                          />
                        </figure>
                        <div className="partner-info-wrap">
                          <h4 className="partner-name">LIBRARY</h4>
                        </div>
                      </div>
                    </li>
                    <li className="partner-block-item">
                      <div className="partner-image-block">
                        <figure className="has-team-image">
                          <img
                            src="wp-content/uploads/2020/02/hostel.jpg"
                            title=""
                            alt=""
                          />
                        </figure>
                        <div className="partner-info-wrap">
                          <h4 className="partner-name">HOSTEL</h4>
                        </div>
                      </div>
                    </li>
                    <li className="partner-block-item">
                      <div className="partner-image-block">
                        <figure className="has-team-image">
                          <img
                            src="wp-content/uploads/2020/02/canteen.jpg"
                            title=""
                            alt=""
                          />
                        </figure>
                        <div className="partner-info-wrap">
                          <h4 className="partner-name">CANTEEN</h4>
                        </div>
                      </div>
                    </li>
                    <li className="partner-block-item">
                      <div className="partner-image-block">
                        <figure className="has-team-image">
                          <img
                            src="wp-content/uploads/2020/02/labs1.jpg"
                            title=""
                            alt=""
                          />
                        </figure>
                        <div className="partner-info-wrap">
                          <h4 className="partner-name">LABS</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
