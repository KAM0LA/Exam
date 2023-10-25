import { useContext, useState } from "react";
import Cookies from "js-cookie";
import request from "../../server/request";
import { EXPIRE_DATE, ROLE, TOKEN } from "../../constants/const";
import "../../css/login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button/Button";

function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    // confirmPassword: "",
  });
  const navigate = useNavigate();
  const { setisAuthenticated } = useContext(AuthContext);
  setisAuthenticated;
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  console.log(user);

  async function submit(event) {
    event.preventDefault();
    try {
      const {
        data: { token, role, expire },
      } = await request.post("auth/register", user);
      Cookies.set(TOKEN, token);
      Cookies.set(ROLE, role);
      Cookies.set(EXPIRE_DATE, expire);
      if (role === "user") {
        navigate("/my-posts");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form__title">
      <h1>Register</h1>
      <div id="form_login">
        <form className="forms" onSubmit={submit}>
          <input
            type="text"
            onChange={handleChange}
            value={user.first_name}
            placeholder="Firstname"
            name="first_name"
          />
          <input
            type="text"
            onChange={handleChange}
            value={user.last_name}
            placeholder="Lastname"
            name="last_name"
          />
          <input
            type="text"
            onChange={handleChange}
            value={user.username}
            placeholder="Username"
            name="username"
          />
          <input
            type="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Password"
            name="password"
          />
          {/* <input
            type="password"
            onChange={handleChange}
            value={user.confirmPassword}
            placeholder="Confirm password"
            name="confirmPassword"
          /> */}
          <Button title="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;
