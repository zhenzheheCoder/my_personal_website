import React from "react";
import zhenzhe from "../assets/zhenzhe.jpg"
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={zhenzhe}
            alt="zhenzhe-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4">MSCS@Santa Clara University</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Zhenzhe(Andreas) He
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Hello world! I am Zhenzhe. I am a Computer Science master student@Santa Clara University. I used to study Physics and Electrical and Computer Engineering at University of California, San Diego. My coding experience started in September 2022. I am fluent in Java, Golang, Python, MATLAB and C++. 
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href="https://drive.google.com/file/d/1jjBdxs_WMLEHV_Kc_gdD601qjoE6RINZ/view?usp=sharing"
              className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
