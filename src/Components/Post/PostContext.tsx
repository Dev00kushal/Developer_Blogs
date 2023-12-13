import { createContext, useState } from "react";

const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const addPost = () => {
    if (input.length >= 0) {
      setPost([...post, input]);
      setInput("");
    }
  };

  const value = {
    post,
    addPost,
    setPost,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
