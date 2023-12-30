import { createContext, useState } from "react";

export const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
  const [editorContent, setEditorContent] = useState(
    "<p>This is the initial content of the editor</p>"
  );

  const handleEditorChange = (content) => {
    console.log("Content was updated:", content);
    setEditorContent(content);
  };

  const value = {
    editorContent,
    handleEditorChange,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
export default PostContextProvider;
