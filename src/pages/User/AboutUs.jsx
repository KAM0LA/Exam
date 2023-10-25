import { Image } from "antd";
import "../../css/about.css";

function AboutUs() {
  const aboutHeadItems = [
    {
      title: "Our mision",
      headTitle: "Creating valuable content for creatives all around the world",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
    {
      title: "Our mision",
      headTitle: "A platform that empowers individuals to improve",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
  ];
  const creatives = [
    {
      title: "Our team of creatives",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      img: "/src/assets/image/aboutUsLeft.png",
    },
    {
      rightTitle: "Why we started this Blog",
      rightSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rightText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      rightImg: "/src/assets/image/aboutUsRight.png",
    },
  ];
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about__infotext">
            {aboutHeadItems.map((el, index) => {
              return (
                <div className="infotext" key={index}>
                  <h1>{el.title}</h1>
                  <h2>{el.headTitle}</h2>
                  <p>{el.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="second_about_information">
        <div className="container">
          <div className="creative">
            {creatives.map((el, index) => {
              return (
                <>
                  <div className="aboutPosts" key={index}>
                    <div className="information">
                      <h1>{el.title}</h1>
                      <h2>{el.subtitle}</h2>
                      <p>{el.text}</p>
                    </div>
                    <div className="about_image">
                      <Image src={el.img} />
                    </div>
                  </div>
                  <div className="aboutPosts" key={index}>
                    <div className="about_image">
                      <Image src={el.rightImg} />
                    </div>
                    <div className="information">
                      <h1>{el.rightTitle}</h1>
                      <h2>{el.rightSubtitle}</h2>
                      <p>{el.rightText}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
