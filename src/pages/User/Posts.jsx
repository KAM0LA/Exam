import { useEffect, useState } from "react";
import "../../css/allposts.css";
import request from "../../server/request";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

function Posts() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [page, setPage] = useState();
  const [searching, setSearching] = useState("");
  const LIMIT = 5;
  useEffect(() => {
    async function getData() {
      try {
        const res = await request.get(
          `post?page=${page}&limit=${LIMIT}&search=${searching}`
        );
        setData(res.data.data);
        setTotal(res.data.pagination?.total);
        setPage(res.data.pagination?.page);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [page, total, searching]);
  function id(e) {
    console.log(e);
  }
  const onChange = (page) => {
    setPage(page);
  };
  const handleSearch = (e) => {
    setSearching(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section>
      <div className="container">
        <div className="all_posts">
          <div className="searching">
            <input
              className="search"
              onChange={handleSearch}
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="posts__title">
            <h1>All posts</h1>
          </div>
          {data.map((el) => {
            return (
              <div className="posts__cards" key={el._id}>
                <div className="post_image">
                  <img src={el.category.photo} alt="300" />
                </div>
                <div className="post_about">
                  <span>{el.category.name}</span>
                  <h2>{el.title}</h2>
                  <p>{el.category.description}</p>
                  <Link to={`${el._id}`} onClick={() => id(el._id)}>
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Pagination current={page} onChange={onChange} total={total} />
        </div>
      </div>
    </section>
  );
}

export default Posts;
