import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
      <div>
        <a href="https://www.linkedin.com/in/zhenzhe-he-5128231a4/" className="mr-2 text-blue text-[0.9rem]">
          LinkedIn
        </a>
        <a href="" className="mr-2 text-blue text-[0.9rem]">
          GitHub
        </a>
      </div>
      <div className="text-[0.9rem] text-blue">
        &#169; 2023 All rights deserved.
      </div>
    </div>
  );
};

export default Footer;
