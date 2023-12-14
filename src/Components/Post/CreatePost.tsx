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
        className="bg-white flex justify-start p-5 h-screen scale-75"
      >
        <div className="p-32w-auto h-96  flex-col space-y-10">
          <div className=" ml-auto">
            <ImageUpload />
          </div>
          <textarea
            placeholder="New Post Title Here..."
            className="bg-white text-black max-full resize-none outline-none font-bold px-4 text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-lgxl h-full"
            style={{ overflow: "hidden" }}
          />
        </div>
      </motion.div>
    </PostContextProvider>
  );
};

export default CreatePost;
