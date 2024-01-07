import { Editor } from "@tinymce/tinymce-react";
import React from "react";
const TextEditor = () => {
  const handleEditorChange = (content: any) => { 
    console.log("Content was updated:", content);
  }

  return (
      <Editor
        apiKey={import.meta.env.VITE_TINY_API_KEY}
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
