import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createAmbientMusic } from "@/utils/ambientMusic";
import styles from "./IntroScreen.module.scss";

type Props = {
  onOpen: () => void;
};

export const IntroScreen = ({ onOpen }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = async () => {
    if (isClosing) return;

    setIsClosing(true);

    try {
      await createAmbientMusic().start();
    } catch (error) {
      console.error(error);
    }

    window.setTimeout(() => {
      onOpen();
    }, 1700);
  };

  return (
    <AnimatePresence>
      <motion.section
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isClosing ? 0 : 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.div
          className={styles.background}
          animate={{
            scale: isClosing ? 1.08 : 1.02,
          }}
          transition={{
            duration: 12,
            ease: "linear",
          }}
        />

        <div className={styles.overlay} />

        <main className={styles.content}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isClosing ? 0 : 1,
              y: isClosing ? -20 : 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            <p className={styles.invitation}>
              Приглашение
            </p>

            <h1 className={styles.names}>
              Руслан
              <span>&</span>
              Алпеим
            </h1>
          </motion.div>

          <motion.span
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isClosing ? 0 : 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            Мы будем счастливы,
            <br />
            если Вы разделите
            <br />
            вместе с нами
            <br />
            этот особенный день.
          </motion.span>

          <motion.div
            className={styles.dateCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isClosing ? 0 : 1,
              y: isClosing ? -10 : 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
          >
  <span className={styles.weekday}>
    ВОСКРЕСЕНЬЕ
  </span>

            <div className={styles.date}>
              <span className={styles.day}>09</span>

              <div className={styles.month}>
                <strong>августа</strong>
                <span>2026</span>
              </div>
            </div>

            <p className={styles.time}>
              Начало в 17:00
            </p>

            <div className={styles.separator} />

            <p className={styles.place}>
              Ресторан «МИК»
            </p>

            <span className={styles.city}>
    г. Токмок
  </span>
          </motion.div>

          <motion.button
            className={styles.button}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isClosing ? 0 : 1,
              y: isClosing ? 30 : 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              void handleOpen();
            }}
          >
            Открыть приглашение
          </motion.button>

          <motion.small
            className={styles.hint}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
          >
            Нажмите, чтобы продолжить
          </motion.small>
        </main>
      </motion.section>
    </AnimatePresence>
  );
};