import React from "react";
import Slider from "react-slick";
import testimonial from "../../Assets/testimonial.png"; // Image of testimonial
import Arrow from "../../Assets/Arrow.png"; // Arrow image
import DesignStar from "../../Assets/DesignStar.png"; // Star design image
import "./Testimonial.css"; // Custom styles

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      id: 1,
      img: testimonial,
      desc: `I am incredibly grateful for the educational guidance we received from Ms. Divya Parihar for my daughter. The insights and strategies made a significant difference in my child's learning journey and the attitude. Ms. Divya took the time to understand my child's unique strengths and challenges, providing tailored advice that truly resonated. As a result, my child has become more engaged and confident in their studies. I wholeheartedly recommend to any parent seeking expert support in navigating their child's educational path!`,
      rating: 4.5,
      name: "Triveni Ranjith Battulla",
      position: "Manager",
      zodiac: "Leo",
    },
    {
      id: 2,
      img: testimonial,
      desc: `Accumsan lacus vel facilisis volutpat est. Ornare suspendisse sed nisi
            lacus sed viverra tellus in. Lobortis scelerisque fermentum dui faucibus. Et
            odio pellentesque diam volutpat commodo. Odio morbi quis commodo
            odio aenean sed. Velit laoreet id donec ultrices tincidunt arcu non
            sodales. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
            Aliquet enim tortor at auctor.`,
      rating: 5,
      name: "John Doe",
      position: "CEO",
      zodiac: "Virgo",
    },
    {
      id: 3,
      img: testimonial,
      desc: `Accumsan lacus vel facilisis volutpat est. Ornare suspendisse sed nisi
            lacus sed viverra tellus in. Lobortis scelerisque fermentum dui faucibus. Et
            odio pellentesque diam volutpat commodo. Odio morbi quis commodo
            odio aenean sed. Velit laoreet id donec ultrices tincidunt arcu non
            sodales. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
            Aliquet enim tortor at auctor.`,
      rating: 4,
      name: "Emily",
      position: "Developer",
      zodiac: "Aries",
    },
  ];

  return (
    <section className="mainbg1">
      <div className="container">
        <div className="row">
          <div className="designstar py-3">
            <img src={DesignStar} alt="Star" />
          </div>
          <div className="customertitle pb-1">
            <h1>Our Customer Thoughts</h1>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="container cardbg">
              <div className="row">
                <div className="mainflex">
                  {/* Testimonial Image */}
                  <div className="testimonialImg">
                    <img src={testimonial.img} alt="testimonial" />
                  </div>
                  {/* Testimonial Description */}
                  <div className="testimonialDesc">
                    <p>{testimonial.desc}</p>

                    {/* Rating Section */}
                    <div className="testimonialRating">
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.round(testimonial.rating)
                                ? "star-filled"
                                : "star-empty"
                            }
                          >
                            <h1>★</h1>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Name and Position */}
                    <div className="testimonialName">
                      <h2>
                        {testimonial.name} - {testimonial.position}
                      </h2>
                      <p>Zodiac - {testimonial.zodiac}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="sidearrow">
                    <img src={Arrow} alt="Arrow" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
