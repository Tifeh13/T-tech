import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Kwara State University (2023 - till date)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Command Day Secondary School (2010 - 2017)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Command Day Primary School (2004 - 2009)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Engineer"
            subTitle="Freelancer - (2023 - Present)"
            result="Work in progress"
            des="Working on personal project and also learning while being a free-lancer."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Intern, Fireswitch Technologies - (2022 - 2023)"
            result="IBADAN"
            des="This innovative technology company is focused on developing cutting-edge solutions to transform industries through advanced software, hardware, and artificial intelligence."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Sheda - (2021 - 2022)"
            result="Sheda House"
            des="Sheda House is everything I am or would ever be. It is a huge part in my soon to be success story."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education