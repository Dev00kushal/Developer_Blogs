import { useContext } from "react";
import { PostContext } from "./PostContext";
import ".././../index.css"; 
const ImageUpload = () => {
  const { onImageChange, imgSrc } = useContext(PostContext);

  return (
    <div className="max-w-md mx-auto mt-3">
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        {!imgSrc && (
          <input
            type="file"
            name="image"
            accept=".png,.jpg,.jpeg"
            onChange={onImageChange}
            className="mt-1 p-2 border rounded-md"
          />
        )}
      </label>

      {imgSrc && (
        <div className="mt-4">
          <img
            src={imgSrc}
            alt="Uploaded"
            className="h-90 w-full object-cover rounded-md "
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
