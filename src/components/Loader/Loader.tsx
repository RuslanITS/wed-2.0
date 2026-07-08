import { motion } from 'framer-motion';
import styles from './Loader.module.scss';

interface LoaderProps {
  readonly isVisible: boolean;
}

export const Loader = ({ isVisible }: LoaderProps) => (
  <motion.div
    className={styles.loader}
    initial={{ opacity: 1 }}
    animate={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden={!isVisible}
  >
    <motion.div
      className={styles.mark}
      animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.72, 1, 0.72] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      R<span>&</span>A
    </motion.div>
    <motion.div
      className={styles.line}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.div>
);
