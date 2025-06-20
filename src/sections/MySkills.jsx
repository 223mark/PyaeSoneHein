// icons
import { IoMdLeaf } from "react-icons/io";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaLaravel,
  FaCss3Alt,
  FaHtml5,
  FaSass,
} from "react-icons/fa6";
import {
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";
import { motion } from "motion/react";

const MySkills = () => {
  return (
    <section id="experiences" className="max-w-[1000px] mx-auto">
      <h1 className="underline underline-offset-6 decoration-2 decoration-primary font-bold text-[1.5rem] text-black text-center">
        Experience With
      </h1>
      <p className="text-justify my-[2rem] indent-8 tracking-wide px-2">
        At the moment, I'm using these technologies for building pixel-perfect
        frontends and roubst backend api. If there is another technologies
        coming from in my path , I won't take a blink to learn those. I love
        learning new things. Here is my current frameworks and tools.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 md:gap-2 ">
        <motion.div
          initial={{ y: -100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300"
        >
          <SiJavascript className=" text-yellow-300" />
        </motion.div>
        <motion.div
          initial={{ y: -200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300"
        >
          <FaNodeJs className=" text-green-700" />
        </motion.div>
        <motion.div  initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: 1, ease: "easeIn" }} className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300">
          <SiPhp className=" text-[#0f32cf]" />
        </motion.div>
        <motion.div
          initial={{ y: 200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] "
        >
          <SiTypescript className=" text-blue-700" />
        </motion.div>
        <motion.div
          initial={{ y: 100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] "
        >
          <SiBootstrap className=" text-blue-700" />
        </motion.div>

        <motion.div 
         initial={{ y: -100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiTailwindcss className=" text-[#38BDF8]" />
        </motion.div>
        <motion.div
         initial={{ y: -200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaReact className="text-[#61DAFB]" />
        </motion.div>
        <motion.div
        initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: 1, ease: "linear" }}
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaVuejs className=" text-[#17cc4d]" />
        </motion.div>
        <motion.div
        initial={{ y: 200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiExpress className=" text-[#000000]" />
        </motion.div>

        <motion.div
         initial={{ y: 100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaLaravel className=" text-[#F9322C]" />
        </motion.div>

        <motion.div
        initial={{ y: -100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiRedux className=" text-blue-700" />
        </motion.div>
        <motion.div
        initial={{ y: 200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }} 
         className="  w-[135px] h-[80px] md:w-[200px] md:h-[95px]  ">
          <img
            src="https://images.seeklogo.com/logo-png/46/1/pinia-logo-png_seeklogo-467284.png"
            alt=""
            className="w-[75%]   md:w-[60%] mx-auto h-full bg-amber-100 rounded-lg"
          />
        </motion.div>

        <motion.div 
         initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: 1, ease: "easeIn" }} 
        className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiMysql className=" text-blue-700" />
        </motion.div>

        <motion.div 
         initial={{ y: -200 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }} 
        className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <IoMdLeaf className=" text-[#47A248]" />
        </motion.div>
        <motion.div
         initial={{ y: -100 }} 
          whileInView={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }} 
         className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaGitAlt className=" text-[#F05032]" />
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;
