import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { googleMapsRouteUrl } from '@/utils/constants';
import styles from './Location.module.scss';

export const Location = () => (
  <section className={styles.location} id="location" aria-labelledby="location-title">
    <div className={styles.inner}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.75 }}
      >
        <p className={styles.eyebrow}>Локация</p>
        <h2 className={styles.title} id="location-title">
          Ресторан Мик
        </h2>
        <div className={styles.address}>
          <MapPin size={22} />
          <span>город Токмок</span>
        </div>
        <a className={styles.route} href={googleMapsRouteUrl} target="_blank" rel="noreferrer">
          Построить маршрут
          <Navigation size={18} />
        </a>
      </motion.div>

      <motion.div
        className={styles.map}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.75, delay: 0.12 }}
      >
        <iframe
          title="Ресторан Мик на карте"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%20%D0%9C%D0%B8%D0%BA%20%D0%A2%D0%BE%D0%BA%D0%BC%D0%BE%D0%BA&output=embed"
        />
      </motion.div>
    </div>
  </section>
);
