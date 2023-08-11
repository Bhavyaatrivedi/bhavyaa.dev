"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Bhavyaa.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "} a passion for crafting seamless web experiences. 
        With a versatile skill set spanning {" "}
        <span className="italic">frontend to backend</span>. I thrive on 
        architecting and implementing robust 
        applications.  

      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV-1.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/bhavyaa-trivedi-872122203/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Bhavyaatrivedi"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
