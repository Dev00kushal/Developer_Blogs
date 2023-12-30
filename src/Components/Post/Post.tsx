import PostContextProvider from './PostContext'
import { Editor } from '@tinymce/tinymce-react'

const Post = () => {
  return (
    <PostContextProvider>
      <Editor/>
    </PostContextProvider>
  )
}

export default Post
