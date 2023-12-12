const Button = ({ btnName }: { btnName: string }) => {
  return (
    <>
      <button className="btn btn-outline btn-success">{btnName}</button>
    </>
  );
};

export default Button;
