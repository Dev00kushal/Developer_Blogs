import { useContext } from "react";
import PostContext,{PostContextType} from "./PostContext";
import PostContextProvider from "./PostContext";
const ImageUpload = () => {
  const {onImageChange} = useContext<PostContextType |null>(PostContext);
  return (
    <input
      accept=".jpg, .jpeg"
      type="file"
      className="file-input file-input-bordered file-input-accent w-full max-w-xs ml-3"
      onChange={onImageChange}
    />

  );
};

export default ImageUpload;
