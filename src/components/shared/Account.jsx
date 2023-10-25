import { Fragment, useContext, useEffect, useState } from "react";
import "../../css/profile.css";
import { Form, Input, Upload, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import request from "../../server/request";
import Button from "../Button/Button";
import { EXPIRE_DATE, IMG_URL, ROLE, TOKEN } from "../../constants/const";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Account() {
  const [form] = Form.useForm();
  const [useFormPassword] = Form.useForm();
  const [imgloading, setImgLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { setisAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const uploadButton = (
    <div>
      {imgloading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  
  async function handleChange(e) {
    try {
      setImgLoading(true);
      let form = new FormData();
      form.append("file", e.file.originFileObj);
      await request.post("auth/upload", form);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    request.get("auth/me").then(({ data }) => {
      form.setFieldsValue(data);
      setImageUrl(data.photo);
    });
  }, [form]);

  function logout() {
    setisAuthenticated(false);
    Cookies.remove(TOKEN);
    Cookies.remove(ROLE);
    Cookies.remove(EXPIRE_DATE);
    navigate("/login");
  }

  async function submit(values) {
    try {
      request.put("auth/details", values);
      message.success("Edited success 👌");
    } catch (error) {
      console.log(error.message);
    }
  }
  async function submitPassword(values) {
    try {
      await request.put("auth/password", values);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Fragment>
      <div className="container">
        <div className="profile__settings">
          <div className="profile__image">
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  className="avatar_img"
                  src={IMG_URL + imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div className="doubleProfileSettings">
            <div className="user_information">
              <Form
                className="systems"
                form={form}
                onFinish={submit}
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  name="first_name"
                  label="First name"
                  rules={[
                    { required: true, message: "Please fill this field!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  label="Last name"
                  rules={[
                    { required: true, message: "Please fill this field!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    { required: true, message: "Please fill this field!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone"
                  rules={[
                    { required: true, message: "Please fill this field!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div className="profileBtn">
                  <Button title="Save" />
                  <button onClick={logout}>Logout</button>
                </div>
              </Form>
            </div>
            <div className="password">
              <h1>User Information</h1>
              <Form
                form={useFormPassword}
                onFinish={submitPassword}
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item name="currentPassword" label="Current Password">
                  <Input />
                </Form.Item>
                <Form.Item name="newPassword" label="New Password">
                  <Input />
                </Form.Item>
                <Button title="Change password" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Account;
