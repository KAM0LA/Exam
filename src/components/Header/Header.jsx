import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <Link to="/">
              {isAuthenticated ? <h1>My Blogs</h1> : <h1>WorldViewNews</h1>}
            </Link>
          </div>
          <div className={styles.header__menu}>
            <nav>
              <ul className={styles.menu__items}>
                <li>
                  <NavLink className={styles.items} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.items} to="/posts">
                    All posts
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.items} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.items} to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className={styles.header__btn}>
              {isAuthenticated ? (
                <>
                  <Link to="account">Account</Link>
                </>
              ) : (
                <Link to="login">Login</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
