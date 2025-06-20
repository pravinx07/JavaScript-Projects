import {motion} from "framer-motion"

const boxvariants = {
     hidden:{opacity:0},
     visible:{opacity:1}
}
export function Fade(){

     return(
          <>
          <motion.div
          variants={boxvariants}
          initial="hidden"
          animate="visible"
          transition={{duration:4}}
          className="bg-green-500 w-64 text-center mx-auto mt-20 rounded-lg text-white p-6">
           👋 I faded in!
          </motion.div>

          <motion.button initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           
           transition={{duration:1.5}}
           whileHover={{scale:1.1}}
           whileTap={{scale:0.3}}
           
          className="bg-blue-600 px-5 py-3 flex m-3 rounded-lg mx-auto text-white font-bold cursor-pointer hover:bg-blue-700 ">
               Send
          </motion.button>
               </>
     )
}