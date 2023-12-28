import { useContext } from "react";
import { PostContext } from "./PostContext";
import ".././../index.css";
import Button from "../Button/Button";
const ImageUpload = () => {
  const { onImageChange, imgSrc, onImageChangeAgain, cancelOnChange } =
    useContext(PostContext);

  return (
    <div className="max-w-md mx-auto mt-3">
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        {!imgSrc ? (
          <input
            type="file"
            name="image"
            accept=".png,.jpg,.jpeg"
            onChange={onImageChange}
            className="mt-1 p-2 border rounded-md"
          />
        ) : (
          <div className="flex space-x-5 justify-center ">
            <Button btnName="Cancel" styler="error" onclick={cancelOnChange} />
            <Button
              btnName="Change"
              styler="success"
              onclick={onImageChangeAgain}
            />
          </div>
        )}
      </label>

      {imgSrc && (
        <div className="max-w-screen-xl mx-auto">
          <img
            src={imgSrc}
            alt="Uploaded"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
