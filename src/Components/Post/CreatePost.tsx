import PostContextProvider from "./PostContext";
import { Editor } from "@tinymce/tinymce-react";
import.meta.env.REACT_APP_TINYMCE_API_KEY
const CreatePost = () => {

  const handleEditorChange = (content: string) => {
    console.log("Content was updated:", content);
  };


  return (
    <PostContextProvider>
    
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
    </PostContextProvider>
  );
};

export default CreatePost;
