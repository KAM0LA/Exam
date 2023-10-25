import { useEffect, useState } from "react";
import "../../css/post.css";
import { useParams } from "react-router-dom";
import request from "../../server/request";
import { IMG_URL } from "../../constants/const";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await request.get(`/post/${id}`);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [id]);
  console.log(post.photo);
  const [collapse, setCollapse] = useState(true);
  return (
    <section id="separate">
      <div className="container">
        <div className="post_image">
          <img src={IMG_URL + post?.photo?._id + "." + post?.photo?.name.split(".")[1]} alt="" />
        </div>
        <div className="separate_post">
          <div className="user">
            <div className="user_image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="30x30"
              />
            </div>
            <div className="user_info">
              <h5>{post?.user?.first_name}</h5>
              <p>{post.createdAt}</p>
            </div>
          </div>
          <div className="post_title">
            <h1>{post.title}</h1>
          </div>
          <div className="post_hashtag">
            <span> {post?.category?.name}</span>
          </div>
          <div className="show-more-container">
            <div
              className={`post_description  ${
                collapse ? "gradient maxHeight" : ""
              }`}
            >
              <p>{post.description}</p>
            </div>
          </div>
          <div className="button">
            {collapse && (
              <span className="show-more">
                <p onClick={() => setCollapse(false)}>Show</p>
              </span>
            )}
            {!collapse && (
              <span onClick={() => setCollapse(true)} className="show-less">
                <p>Hide</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
