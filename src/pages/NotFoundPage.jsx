import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const NotFoundPage = () => {
  return (
    <Result
      status={404}
      title="404"
      subTitle="Sorry, the page does not exist"
      extra={
        <Link to="/">
          <Button type="primary"> Back to home</Button>
        </Link>
      }
    />
  );
};
export default NotFoundPage;
