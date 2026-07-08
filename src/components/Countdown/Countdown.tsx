import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTwoDigits } from '@/utils/date';
import { weddingDate } from '@/utils/constants';
import styles from './Countdown.module.scss';

const units = [
  { key: 'days', label: 'дни' },
  { key: 'hours', label: 'часы' },
  { key: 'minutes', label: 'минуты' },
  { key: 'seconds', label: 'секунды' },
] as const;

export const Countdown = () => {
  const timeLeft = useCountdown(weddingDate);

  return (
    <section className={styles.countdown} aria-labelledby="countdown-title">
      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          До встречи
        </motion.p>
        <motion.h2
          className={styles.title}
          id="countdown-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Осталось совсем немного
        </motion.h2>
        <div className={styles.grid}>
          {units.map((unit, index) => (
            <motion.div
              className={styles.card}
              key={unit.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
            >
              <strong>{unit.key === 'days' ? timeLeft[unit.key] : formatTwoDigits(timeLeft[unit.key])}</strong>
              <span>{unit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
