import { useContext, useState } from "react";
import Cookies from "js-cookie";
import request from "../../server/request";
import { EXPIRE_DATE, ROLE, TOKEN } from "../../constants/const";
import "../../css/login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button/Button";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setisAuthenticated, setRole } = useContext(AuthContext);
  setisAuthenticated;
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    try {
      const {
        data: { token, role, expire },
      } = await request.post("auth/login", user);
      setRole(role)
      Cookies.set(TOKEN, token);
      Cookies.set(ROLE, role);
      Cookies.set(EXPIRE_DATE, expire);
      if (role === "admin") {
        navigate("/dashboard");
        window.location.reload()
      } else if (role === "user") {
        navigate("/my-posts");
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form__title">
      <h1>Login</h1>
      <div id="form_login">
        <form className="forms" onSubmit={submit}>
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
          <Button title="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
