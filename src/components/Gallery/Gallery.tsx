import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { galleryImages } from '@/utils/constants';
import type { GalleryImage } from '@/types/wedding';
import styles from './Gallery.module.scss';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  useLockBodyScroll(Boolean(selectedImage));

  return (
    <section className={styles.gallery} id="gallery" aria-labelledby="gallery-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p>Галерея</p>
          <h2 id="gallery-title">Настроение нашего дня</h2>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((image, index) => (
            <motion.button
              className={`${styles.tile} ${styles[image.height]}`}
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className={styles.close}
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть галерею"
            >
              <X size={22} />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
