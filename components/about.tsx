"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       An undergraduate student studying Computer Science and Engineering
        at BIT, MESRA. I am on a journey to become a proficient{" "}
        <span className="font-medium">full-stack developer</span>. Programming
        has become my passion and my path to creating innovative solutions. I
        thrive on the excitement of <span className="italic">solving complex problems.</span>, 
         
        My expertise lies in a robust tech stack including{" "}
        <span className="font-medium">React, Next.js, Node.js, Express, Tailwind and MongoDB</span>. 
        Additionally, I am well-versed in TypeScript and Prisma. My thirst for 
        knowledge is unending, and I am always on the lookout for emerging 
        technologies that can broaden my skill set. Currently, I am actively 
        seeking a <span className="font-medium">full-time software developer position</span> 
        that will allow me to contribute my skills and learn even more in a 
        professional setting.
      </p>

      
    </motion.section>
  );
}
