import { motion } from "framer-motion";
import Button from "../Button";
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="navbar p-4 shadow-md"
    >
      <div className="flex items-center justify-between">
        <motion.a
          className="text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
        >
          shittyDevBlogs
        </motion.a>
        <div className="flex items-center space-x-4">
          <motion.div className="space-x-2">
            <Search />
          </motion.div>
          <motion.div className="ml-4">
            <Button btnname={"Create Post"} />
          </motion.div>
          <motion.div className="ml-4">
            <User />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
