import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* =============================================================== */
import { Pagination } from "antd";
/* =============================================================== */
import request from "../../server/request";
import { IMG_URL, LIMIT } from "../../constants/const";
import "../../css/allcategory.css";

function AllCategory() {
  const { id } = useParams(); // Get id
  const [posts, setPost] = useState([]); // Set posts
  const [total, setTotal] = useState(); // Pagination page total
  const [page, setPage] = useState(); // Pagination page
  const [title, setTitle] = useState(""); // All posts title
  const [description, setDescription] = useState(""); // All posts desciption
  const [searching, setSearching] = useState(""); // Search

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await request.get(
          `post?page=${page}&limit=${LIMIT}&search=${searching}&category=${id}`
        );
        const res = await request.get(`category/${id}`);
        setTitle(res.data.name);
        setDescription(res.data.description);
        setPost(data.data);
        setTotal(data.pagination?.total);
        setPage(data.pagination?.page);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [id, page, searching]); // Get data

  const onChange = (page) => {
    setPage(page);
  }; // Pagination
  const handleSearch = (e) => {
    setSearching(e.target.value);
  }; // Search
  return (
    <section>
      <div className="container">
        <div className="category">
          <div className="searching">
            <input
              className="search"
              onChange={handleSearch}
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="category__title">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="allCategory">
            {posts.map((el) => {
              return (
                <div className="category-cards" key={el.id}>
                  <div className="category__img">
                    <img
                      src={IMG_URL + el.photo._id + "." + el.photo.name.split(".")[1]}
                      alt="Photo"
                    />
                  </div>
                  <div className="category__information">
                    <span>{el.category.name}</span>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            className="pagination"
            current={page}
            onChange={onChange}
            total={total}
          />
        </div>
      </div>
    </section>
  );
}

export default AllCategory;
