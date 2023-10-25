/* =============================================================== */
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
/* =============================================================== */
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
/* =============================================================== */
import request from "../../server/request";
import Button from "../../components/Button/Button";
import VerticalCards from "../../components/Cards/VerticalCards";
import blogs from "../../assets/image/blogs.png";
import blogs2 from "../../assets/image/blogs2.png";
import blogs3 from "../../assets/image/blogs3.png";
import "../../css/main.css";
import { IMG_URL } from "../../constants/const";
/* =============================================================== */
/* =============================================================== */
/* =============================================================== */

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await request.get("category");
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  function id(_id) {
    console.log(_id);
  }
  /* =============================================================== */
  return (
    <Fragment>
      <section id="main_news">
        <div className="container">
          <div className="main">
            <div className="main-news">
              <div className="author">
                <p>
                  Posted on <span>startup</span>
                </p>
              </div>
              <div className="title">
                <h1>Step-by-step guide to choosing great font pairs</h1>
              </div>
              <div className="date__printed">
                <p>
                  By <span>James West</span> | May 23, 2022
                </p>
              </div>
              <div className="description">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div className="read__more">
                <Button
                  title="Read more"
                  icons={<ion-icon name="chevron-forward-outline"></ion-icon>}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="popular__blogs">
            <div className="blogs__title">
              <h1>Popular blogs</h1>
            </div>
          </div>
          <div className="popular__blogs__slider">
            <div className="slider">
              <Slider centerPadding="32px" {...settings}>
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs2}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs3}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
                <VerticalCards
                  img={blogs}
                  date="By John Doe   l   Aug 23, 2021"
                  postTitle="A UX Case Study Creating a Studious Environment for Students:"
                  postText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                />
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="select__categories">
            <div className="categories__title">
              <h1>Choose A Catagory</h1>
            </div>
            <div className="categories__items">
              <Swiper
                className="mySwiper"
                spaceBetween={50}
                breakpoints={breakpoints}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                {data.map((el, index) => (
                  <SwiperSlide key={index} className="items">
                    <div className="categories__icons">
                      <img
                        src={
                          IMG_URL +
                          el.photo._id +
                          "." +
                          el.photo.name.split(".")[1]
                        }
                        alt={el.name}
                      />
                    </div>
                    <div className="categories__item__title">
                      <h4>{el.name}</h4>
                    </div>
                    <div className="categories__item__subtitle">
                      <p>{el.description}</p>
                    </div>
                    <button>
                      <Link to={`${el._id}`} onClick={() => id(el._id)}>
                        Read more
                      </Link>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Main;
