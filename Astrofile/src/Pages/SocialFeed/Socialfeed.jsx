import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Designstar from "../../Assets/DesignStar.png";


const Socialfeed = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

      const [active, setActive] = useState(false);

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>

<section>
        <div className="container">
          <div className="row">
            <div className="pagetop py-2">
              <div className="pagetitle">
                <h1>Social Media Feed</h1>
              </div>
              <div className="changepage">
                <p>
                  <Link
                    onClick={handleActiveChange}
                    to={"/"}
                    className="render"
                  >
                    Home
                  </Link>{" "}
                  <span>
                    <FaAngleRight />Feed
                  </span>
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

      <section>
          <div className="container-fluid">
            <div className="row">
              <div className="designstar">
                <img src={Designstar} alt="Design star" />
              </div>
              <div className="blogpage">
                <h1>Blogs & Articles</h1>
              </div>
            </div>
          </div>
        </section>

        

    </>
  )
}

export default Socialfeed