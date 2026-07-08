import { motion } from 'framer-motion';
import { timelineItems } from '@/utils/constants';
import styles from './Timeline.module.scss';

export const Timeline = () => (
  <section className={styles.timeline} id="timeline" aria-labelledby="timeline-title">
    <div className={styles.inner}>
      <div className={styles.heading}>
        <p>Программа</p>
        <h2 id="timeline-title">Вечер, разложенный по красивым моментам</h2>
      </div>

      <div className={styles.list}>
        {timelineItems.map((item, index) => (
          <motion.article
            className={styles.item}
            key={item.time}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <time>{item.time}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
