import { Editor } from "@tinymce/tinymce-react";
import { useContext } from "react";
import { PostContext } from "./PostContext";

const TextEditor = () => {
  const { editorContent, handleEditorChange } = useContext(PostContext);

  return (
  
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        initialValue={editorContent}
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
  );
};

export default TextEditor;
