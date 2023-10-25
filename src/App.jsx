import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import FrontLayout from "./components/layout/FrontLayout";
import Main from "./pages/User/Main";
import AboutUs from "./pages/User/AboutUs.Jsx";
import Posts from "./pages/User/Posts";
import Post from "./pages/User/Post";
import Login from "./pages/User/Login";
import Account from "./pages/User/UserAccount";
import NotFound from "./pages/User/NotFound";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import AllPosts from "./pages/Admin/AllPosts";
import Categories from "./pages/Admin/Categories";
import Register from "./pages/User/Register";
import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";
import AdminAccount from "./pages/Admin/AdminAccount";
import AllCategory from "./pages/User/AllCategory";
import CreatePost from "./pages/User/CreatePost";

function App() {
  let { isAuthenticated, role } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="/:id" element={<AllCategory />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {isAuthenticated && role === "user" && (
            <>
              <Route path="my-posts" element={<CreatePost />} />
              <Route path="account" element={<Account />} />
            </>
          )}
        </Route>
        {isAuthenticated && role === "admin" && (
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="all-posts" element={<AllPosts />} />
            <Route path="categories" element={<Categories />} />
            <Route path="account" element={<AdminAccount />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
