import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Projects,
  Footer,
  Button,
  Stats,
  Loading,
  BlogPosts,
  Achievements,
  Contact,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            <div className={`bg-primary ${styles.flexStart} pt-[80px]`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                <SkillsAndExperience />
                <Education />
              </div>
            </div>
            
            <Achievements />
            
            <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                <Projects />
                <BlogPosts enabled={false} />
              </div>
            </div>
            
            <Contact />
            <Footer />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

