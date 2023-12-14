import { motion } from "framer-motion";
import ImageUpload from "./ImageUpload";
import PostContextProvider from "./PostContext";

const CreatePost = () => {
  // need to add a scrolling bar when the div is active
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
        className="bg-white flex justify-start p-5 h-screen scale-75 overflow-auto rounded-xl"
      >
        <div className="flex-col space-y-10 w-full">
          <div className=" ml-auto">
            <ImageUpload />
          </div>
          <textarea
            autoComplete="off"
            placeholder="New Post Title Here..."
            className="bg-white text-black outline-none w-full font-semibold  lg:text-4xl  h-full"
            style={{ overflow: "hidden" }}
          />
        </div>
      </motion.div>
    </PostContextProvider>
  );
};

export default CreatePost;
