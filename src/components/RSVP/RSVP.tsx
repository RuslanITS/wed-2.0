import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react';
import { FirebaseConfigurationError, submitRSVP } from '@/firebase/rsvpService';
import type { AttendanceStatus, RSVPFormValues, ToastState } from '@/types/wedding';
import styles from './RSVP.module.scss';

const initialValues: RSVPFormValues = {
  name: '',
  phone: '',
  attendance: 'attending',
  guests: 1,
  comment: '',
};

export const RSVP = () => {
  const [values, setValues] = useState<RSVPFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 4_500);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const updateField = <K extends keyof RSVPFormValues>(key: K, value: RSVPFormValues[K]): void => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleGuestsChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    updateField('guests', Number(event.target.value));
  };

  const handleAttendanceChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    updateField('attendance', event.target.value as AttendanceStatus);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await submitRSVP(values);
      setValues(initialValues);
      setToast({
        title: 'Спасибо!',
        message: 'Будем рады видеть вас!',
        tone: 'success',
      });
    } catch (error) {
      const isConfigError = error instanceof FirebaseConfigurationError;
      setToast({
        title: isConfigError ? 'Firebase не настроен' : 'Не удалось отправить',
        message: isConfigError
          ? 'Добавьте VITE_FIREBASE_DATABASE_URL перед публикацией.'
          : 'Проверьте соединение и попробуйте еще раз.',
        tone: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.rsvp} id="rsvp" aria-labelledby="rsvp-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.7 }}
        >
          <p>RSVP</p>
          <h2 id="rsvp-title">Подтвердите присутствие</h2>
          <span>Пожалуйста, отправьте ответ до 20 июля 2026, чтобы мы успели все подготовить.</span>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={(event) => {
            void handleSubmit(event);
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <label>
            Имя
            <input
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              minLength={2}
              placeholder="Ваше имя"
              required
            />
          </label>

          <label>
            Телефон
            <input
              value={values.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              type="tel"
              placeholder="+996 ..."
              required
            />
          </label>

          <div className={styles.row}>
            <label>
              Ответ
              <select value={values.attendance} onChange={handleAttendanceChange}>
                <option value="attending">Приду</option>
                <option value="declined">Не приду</option>
              </select>
            </label>

            <label>
              Гостей
              <select value={values.guests} onChange={handleGuestsChange}>
                {[1, 2, 3, 4, 5].map((count) => (
                  <option value={count} key={count}>
                    {count}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Комментарий
            <textarea
              value={values.comment}
              onChange={(event) => updateField('comment', event.target.value)}
              placeholder="Пожелания по меню, детали или теплые слова"
              rows={5}
            />
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправляем...' : 'Отправить ответ'}
            <Send size={18} />
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {toast ? (
          <motion.div
            className={`${styles.toast} ${styles[toast.tone]}`}
            role="status"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
          >
            <strong>{toast.title}</strong>
            <span>{toast.message}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
