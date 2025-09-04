import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../constants";
import styles from "../style";

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1, delay: index * 0.1 }}
    >
      <div className="flex flex-row items-center">
        <img
          src={achievement.icon}
          alt={achievement.event}
          className="w-[50px] h-[50px] rounded-full mr-4"
        />
        <div className="flex flex-col">
          <h3 className="font-poppins font-semibold text-[18px] text-white leading-[24px]">
            {achievement.event}
          </h3>
          <p className="font-poppins font-medium text-[16px] text-teal-200 leading-[20px]">
            {achievement.position}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px] mb-2">
          {achievement.content1}
        </p>
        {achievement.content2 && (
          <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px] mb-2">
            {achievement.content2}
          </p>
        )}
        {achievement.content3 && (
          <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px] mb-2">
            {achievement.content3}
          </p>
        )}
        
        {/* Links section */}
        <div className="flex flex-wrap gap-2 mt-3">
          {achievement.article && (
            <a
              href={achievement.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 text-sm underline"
            >
              Article
            </a>
          )}
          {achievement.project && (
            <a
              href={achievement.project}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 text-sm underline"
            >
              Project
            </a>
          )}
          {achievement.github && (
            <a
              href={achievement.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 text-sm underline"
            >
              GitHub
            </a>
          )}
          {achievement.youtube && (
            <a
              href={achievement.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 text-sm underline"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div id="achievements" className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <motion.h2
          className="font-poppins font-semibold ss:text-[48px] text-[40px] text-white ss:leading-[76px] leading-[75px] mb-16"
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h2>

        <div className="flex flex-wrap gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
