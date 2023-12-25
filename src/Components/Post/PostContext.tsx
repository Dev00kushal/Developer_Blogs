import { createContext, useState } from "react";

export const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [, setFile] = useState([]);
  const [input, setInput] = useState("");
  const addPost = () => {
    if (input.length > 0) {
      setPost([...post, input]);
      setInput("");
    }
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImgSrc(event.target.result as string);
      };

      reader.readAsDataURL(file);
    }
    setFile(file);
  };
  const cancelOnChange = () => {
    setImgSrc("");
    setFile(null);
  };
  const onImageChangeAgain = () => {
    
  };
  const value = {
    post,
    addPost,
    onImageChange,
    onImageChangeAgain,
    imgSrc,
    setPost,
    cancelOnChange,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
