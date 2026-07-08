import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroPosterUrl, heroVideoUrl } from '@/utils/constants';
import styles from './Hero.module.scss';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0.35]);

  const openInvitation = (): void => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero" aria-label="Свадебное приглашение">
      <motion.video
        className={styles.video}
        style={{ y }}
        autoPlay
        muted
        loop
        playsInline
        poster={heroPosterUrl}
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </motion.video>
      <div className={styles.overlay} />

      <motion.div className={styles.content} style={{ opacity }}>
        <motion.p
          className={styles.kicker}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Свадебное приглашение
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          Руслан
          <span>&</span>
          Алпеим
        </motion.h1>
        <motion.div
          className={styles.date}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <span>09 августа 2026</span>
          <span>17:00</span>
        </motion.div>
        <motion.p
          className={styles.phrase}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Есть моменты, которые меняют жизнь навсегда...
        </motion.p>
        <motion.button
          className={styles.cta}
          type="button"
          onClick={openInvitation}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
        >
          Открыть приглашение
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};
