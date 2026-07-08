import { motion } from 'framer-motion';
import { dressCodeGroups } from '@/utils/constants';
import styles from './DressCode.module.scss';

export const DressCode = () => (
  <section className={styles.dressCode} aria-labelledby="dress-code-title">
    <div className={styles.inner}>
      <div className={styles.heading}>
        <p>Dress code</p>
        <h2 id="dress-code-title">Элегантная палитра вечера</h2>
      </div>

      <div className={styles.cards}>
        {dressCodeGroups.map((group, index) => (
          <motion.article
            className={styles.card}
            key={group.title}
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
          >
            <h3>{group.title}</h3>
            <p>{group.note}</p>
            <div className={styles.palette} aria-label={`Палитра: ${group.title}`}>
              {group.colors.map((color) => (
                <span key={color.hex}>
                  <i style={{ backgroundColor: color.hex }} />
                  {color.name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
