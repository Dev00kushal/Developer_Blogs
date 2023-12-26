import { Link } from "react-router-dom";

const Button = ({
  btnName,
  styler,
  onclick,
  route,
}: {
  btnName: string;
  styler: string;
  route?: string;
  onclick: any;
}) => {
  return (
    <>
      <Link
        onClick={onclick}
        to={route}
        className={`btn btn-outline btn-${styler}`}
      >
        {btnName}
      </Link>
    </>
  );
};

export default Button;
