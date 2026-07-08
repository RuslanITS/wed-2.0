import { motion } from 'framer-motion';
import { storyImages } from '@/utils/constants';
import styles from './Story.module.scss';

export const Story = () => (
  <section className={styles.story} id="story" aria-labelledby="story-title">
    <div className={styles.inner}>
      <div className={styles.media}>
        {storyImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={index === 0 ? 'Свадебная прогулка в теплых оттенках' : 'Романтичный вечер пары'}
            loading="lazy"
            initial={{ opacity: 0, y: index === 0 ? 36 : -24, rotate: index === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -1.2 : 1.2 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.85, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <motion.div
        className={styles.copy}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.eyebrow}>Наша история</p>
        <h2 id="story-title">Любовь, которая стала домом</h2>
        <p>
          Мы долго шли к этому дню маленькими шагами: через разговоры до утра, общие планы,
          тихие прогулки и моменты, в которых становилось ясно - рядом именно тот человек.
        </p>
        <p>
          09 августа мы хотим разделить с вами начало новой главы. Пусть этот вечер будет
          наполнен светом, музыкой, красивыми словами и теплом людей, которых мы любим.
        </p>
      </motion.div>
    </div>
  </section>
);
