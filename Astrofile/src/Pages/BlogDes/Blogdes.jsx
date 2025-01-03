import React, { useState, useEffect } from "react";
import "./Blogdes.css";
import { FaAngleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Designstar from "../../Assets/DesignStar.png";
import BlogImg from "../../Assets/Blog.png";
import Article from "../../Assets/Article.png";
import { Helmet } from "react-helmet";
import axios from "axios";

const Blogdes = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState([])
  const getBlogData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-blog")
      setBlog(res.data.data)
      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlogData()
  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const [singleData, setSingleData] = useState({})

  const getSingleBlogData = async () => {
    try {
      const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-single-blog/" + id)
      console.log(res)
      setSingleData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleBlogData()
  }, [id])
  const [active, setActive] = useState(false);

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
      <Helmet>
        <title>Blog Description - Vedic Jyotishe</title>
        <meta
          name="description"
          content="Discover more about the Muruga Powertime and Vedic events with detailed articles from Vedic Jyotishe. Stay updated on spiritual news."
        />
        <meta
          name="keywords"
          content="Vedic astrology blog, Muruga Powertime, Vedic articles, karma-busting, spiritual events"
        />
        <meta property="og:title" content="Blog Description - Vedic Jyotishe" />
        <meta
          property="og:description"
          content="A detailed blog on Muruga Powertime, including spiritual insights and events at Vedic Jyotishe."
        />
        <meta property="og:image" content="/images/blog-description.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vedicjyotishe.com/blogdes" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <div className="container">
          <div className="row">
            <div className="pagetop py-2">
              <div className="pagetitle">
                <h1>Blog & Articles</h1>
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
                    <FaAngleRight /> Blog
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

      <section className="mainbg1">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="designstar">
                <img src={Designstar} alt="Design star" />
              </div>
              <div className="blogdes">
                <h1> {singleData.blogHeading} </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-3">
            <div className="col">
              <div className="blogtext py-2">
                <p>{singleData.blogDetails}</p>
              </div>
              <div className="blogtext py-2">
                <div className="blogimg py-3">
                  <img src={`https://www.api.vedicjyotishe.com/${singleData.blogImage}`} alt="Blog Img" style={{height:"400px"}}/>
                </div>
                <p dangerouslySetInnerHTML={{ __html: singleData.blogDescription }}></p>

                {/* <div className="blogtitle py-2">
                  <h4>A list looks like this:</h4>
                  <div className="bloglist">
                    <ul>
                      <li>First item in the list</li>
                      <li>
                        Second item in the list lorem ipsum dolor sit amet nunc
                        felis dolor lorem ipsum sit amet
                      </li>
                      <li>Third item in the list</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="container-fluid">
            <div className="row">
              <div className="designstar">
                <img src={`https://www.api.vedicjyotishe.com/${singleData.blogImage}`} alt="Design star" />
              </div>
              <div className="blogdes">
                <h1>Recommended</h1>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="container my-5">
            <div className="row">
              {blog.map((item, index) => (
                <div className="col-md-4 col-6 mb-4" key={index}>
                  <div className="news-card px-3 py-2">
                    <h5 className="card-title py-2">{item.title}</h5>
                    <img src={`https://www.api.vedicjyotishe.com/${item.blogImage}`} className="card-img-top" alt="news" />
                    <div className="card-body">
                      <p className="card-text">{item.blogHeading}</p>
                      <p className="card-description">{item.blogDetails}</p>
                      <Link
                        onClick={handleActiveChange}
                        to={`/blog-details/${item._id}`}
                        className="card-link"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blogdes;
