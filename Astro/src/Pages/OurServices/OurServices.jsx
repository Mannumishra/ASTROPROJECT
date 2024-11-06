import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import pray from "../../Assets/pray.png";
import Servicetop from "../../Assets/Bithchart.jpg";
import Planet from "../../Assets/Kundli-Design.png";
import Match from "../../Assets/Match.png";
import Love from "../../Assets/Love.png";
import Children from "../../Assets/Children.png";
import Study from "../../Assets/Study.png";
import Carrier from "../../Assets/Carrier.png";
import Naamkaran from "../../Assets/Naamkaran.png";
import Muhurat from "../../Assets/Muhurat.png";
import Goodtime from "../../Assets/Goodtime.png";
import Health from "../../Assets/Health.png";
import Relation from "../../Assets/Relation.png";
import Questionimg from "../../Assets/Question.png";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import './OurServices.css';
import AOS from "aos";
import axios from "axios";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const [active, setActive] = useState(false);
  const handleActiveChange = () => {
    setActive(!active);
  };

  const [services, setServices] = useState([])

  const getServiceData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-service")
      console.log(res)
      const reverseData = res.data.data
      setServices(reverseData.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getServiceData()
  }, [])
  // const services = [
  //   { title: "Kundali Analysis Overall with 3 areas of concern", originalPrice: "15000", discountedPrice: "11000", image: Planet },
  //   { title: "Match - Matching", originalPrice: "25000", discountedPrice: "15000", image: Match },
  //   { title: "Marriage Consultation", originalPrice: "25000", discountedPrice: "15000", image: Love },
  //   { title: "Progeny/Children", originalPrice: "6000", discountedPrice: "5000", image: Children },
  //   { title: "Education", originalPrice: "6000", discountedPrice: "5000", image: Study },
  //   { title: "Career/Profession", originalPrice: "6000", discountedPrice: "5000", image: Carrier },
  //   { title: "Name Correction", originalPrice: "6000", discountedPrice: "5000", image: Naamkaran },
  //   { title: "Muhurata", originalPrice: "30000", discountedPrice: "25000", image: Muhurat },
  //   { title: "Good/Bad Times", originalPrice: "5000", discountedPrice: "2500", image: Goodtime },
  //   { title: "Relationship", originalPrice: "5000", discountedPrice: "2500", image: Relation },
  //   { title: "Health", originalPrice: "5000", discountedPrice: "2500", image: Health },
  // ];

  return (
    <>
      <Helmet>
        <title>Our Services | Kundali Consultation</title>
        <meta name="description" content="Explore our various Kundali consultation services including marriage consultation, education, and more. Get insights tailored to your needs." />
        <meta property="og:title" content="Our Services" />
        <meta property="og:description" content="Explore our various Kundali consultation services." />
      </Helmet>
      <section>
        <div className="container">
          <div className="row">
            <div className="pagetop py-2">
              <div className="pagetitle">
                <h1>Services</h1>
              </div>
              <div className="changepage">
                <p>
                  <Link onClick={handleActiveChange} to={"/"} className="render">Home</Link>
                  <span><FaAngleRight /> Services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <hr className="divide m-0" />
          </div>
        </div>
      </section>

      <section className="mainbg">
        <section>
          <div className="container-fluid py-3">
            <div className="row">
              <div className="col-md-12 py-2">
                <div className="serviceContainer pt-4">
                  <div className="service_title py-2">
                    <h2>Our Services</h2>
                  </div>
                  <div className="hinditext">
                    <div className="closehand">
                      <img src={pray} alt="Pray Hand" />
                      <p>लोकाः समस्ताः सुखिनो भवन्तु</p>
                    </div>
                  </div>
                  <div className="container">
                    <div className="topbanner mt-3">
                      <div className="bannerimg">
                        <img src={Servicetop} alt="Panchang img" />
                      </div>
                      <div className="topbannerText1">
                        <p>Order Hard Copy of Kundali (Birth Chart) for convenient reference, personal keepsake, detailed layout and easy annotations ₹1100</p>
                      </div>
                      <div className="arrowrender">
                        <Link onClick={handleActiveChange} to={"/Kundali"} className="render">
                          <IoMdArrowForward className="Arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="container py-5">
                    <div className="row">
                      {services.map((service, index) => (
                        <div key={index} className="col-md-4 col-6 any">
                          <div className="text-center">
                            <img data-aos="fade-up" data-aos-duration="2000" src={`https://www.api.vedicjyotishe.com/${service.serviceLogo}`} alt={service.title} className="img-fluid mb-2" style={{ height: "100px" }} />
                            <div className="imagetitle">
                              <h5>{service.serviceName}</h5>
                            </div>
                            <p>
                              <span className="text-muted"><s>₹{service.sericePrice}</s></span>{" "}
                              <span className="text-danger">₹{service.sericeFinalPrice}</span>
                            </p>
                            <Link to={`/Service-Details/${service.serviceName}`}>
                                <button className="servicedetails">Get Details</button>
                              </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="servicdownimg">
                <img src={Questionimg} alt="Question" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="servicdowntitle">
                <h1>Every Problem Has A Solution</h1>
                <p>Choose from our services offerings or submit your query if it is a unique ask and not listed.</p>
              </div>
              <div className="problembtn">
                <Link to="/Question">
                  <button className="Questionbtn">Click here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonial />
      </section>
    </>
  );
};

export default OurServices;
