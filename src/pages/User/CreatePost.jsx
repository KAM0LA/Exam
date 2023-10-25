import "../../css/create.css";
import { Form, Input, message } from "antd";
import request from "../../server/request";
import { useState } from "react";
import axios from "axios";

function CreatePost() {
  // const [form] = Form.useForm();
  const [imageId, setImageId] = useState("");

  const getImage = async (e) => {
    try {
      const form = new FormData();
      console.log(form);
      form.append("file", e.target.files[0]);
      const response = await request.post("upload", form);
      setImageId(response.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  async function submit(values) {
    try {
      const { title, description, category, tags } = values;
      const toArr = tags ? tags.split(",").map((el) => el.trim()) : [];
      const sendData = {
        title,
        description,
        category,
        tags: toArr,
        photo: imageId,
      };
      console.log(sendData);
      await axios.post("post", sendData);
      message.success("Add success 👌");
    } catch (error) {
      console.error("Error while sending the post:", error);
      message.error("Failed to add post. Please try again later.");
    }
  }

  return (
    <section>
      <div className="container">
        <div className="create_post">
          <h1>Create Post</h1>
        </div>
        <Form
          className="systems"
          onFinish={submit}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please fill this field!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please fill this field!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tags"
            label="Tags"
            rules={[{ required: true, message: "Please fill this field!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please fill this field!" }]}
          >
            <Input />
          </Form.Item>
          <input type="file" onChange={getImage} />
          <button className="create_post_btn" type="submit">
            Create post
          </button>
        </Form>
      </div>
    </section>
  );
}

export default CreatePost;
