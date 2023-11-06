import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
            src='/threejs.png'
            alt="logo"
            className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <h1 className="head-text">
              LET'S <br className="x1:block hidden"/> DO IT
            </h1>
          </motion.div>
          <motion.div>
            <p>
              lorem
            </p>
            <CustomButton
             type="filled"
             title="Customize it"
             handleClick={() => state.intro = false}
             customStyle="w-fit py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home