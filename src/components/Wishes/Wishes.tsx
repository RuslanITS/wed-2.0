import { motion } from 'framer-motion';
import { wishCards } from '@/utils/constants';
import styles from './Wishes.module.scss';

export const Wishes = () => (
  <section className={styles.wishes} aria-labelledby="wishes-title">
    <div className={styles.inner}>
      <div className={styles.heading}>
        <p>Пожелания</p>
        <h2 id="wishes-title">Несколько нежных просьб</h2>
      </div>
      <div className={styles.grid}>
        {wishCards.map((wish, index) => (
          <motion.article
            className={styles.card}
            key={wish.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{wish.title}</h3>
            <p>{wish.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
