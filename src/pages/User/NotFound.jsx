import { Button, Result } from "antd";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <Result
        className="notfound"
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/login"><Button type="primary">Back Home</Button></Link>}
      />
    </div>
  );
}

export default NotFound;
