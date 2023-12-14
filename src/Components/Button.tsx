import { Link } from "react-router-dom";

const Button = ({
  btnName,
  styler,
  onclick,
}: {
  btnName: string;
  styler: string;
  onclick: any;
}) => {
  return (
    <>
      <Link
        onClick={onclick}
        to={"/post"}
        className={`btn btn-outline btn-${styler}`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default Button;
