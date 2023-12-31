import { motion } from "framer-motion";

import Search from "./Search";
import User from "./User";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="navbar-container mt-5  space-x-8 "
    >
      <div className="flex items-center px-3 justify-between">
        <Name />
        <div className="flex items-center space-x-6">
          <motion.div>
            <Search />
          </motion.div>
          <motion.div>
            <Button
              styler="btn btn-outline"
              route="/post"
              btnName={"Create post"}
            />
          </motion.div>
          <motion.div>
            <User />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  function Name() {
    return (
      <motion.a
        className="text-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/"
      >
        DevBlogs
      </motion.a>
    );
  }
};

export default Navbar;
