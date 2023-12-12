import { Link } from "react-router-dom";

const Button = ({ btnName }: { btnName: string }) => {
  return (
    <>
      <Link to={"/post"} className="btn btn-outline btn-success">{btnName}</Link>
    </>
  );
};

export default Button;
