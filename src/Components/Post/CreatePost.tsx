import { motion } from "framer-motion";
import ImageUpload from "./ImageUpload";
import PostContextProvider from "./PostContext";

const CreatePost = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <PostContextProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white flex flex-col justify-center items-center h-screen"
      >
        <div className="p-16 w-auto h-96  rounded-md shadow-lg  bg-gray-100 flex-col space-y-10">
          <ImageUpload />
          <input
            type="text"
            placeholder="New Post Title Here..."
            className="bg-gray-100 text-black w-full max-w-xs focus:border-none outline-none 
   font-bold px-4 text-2xl"
          />
        </div>
      </motion.div>
    </PostContextProvider>
  );
};

export default CreatePost;
