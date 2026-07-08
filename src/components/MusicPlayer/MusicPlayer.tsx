import { Music, Pause, Play } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { createAmbientMusic } from '@/utils/ambientMusic';
import styles from './MusicPlayer.module.scss';

export const MusicPlayer = () => {
  const music = useMemo(() => createAmbientMusic(), []);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(music.isPlaying());
  }, [music]);

  const togglePlayback = async () => {
    if (music.isPlaying()) {
      music.stop();
      setIsPlaying(false);
      return;
    }

    await music.start();
    setIsPlaying(true);
  };

  return (
    <button
      className={styles.player}
      type="button"
      onClick={() => {
        void togglePlayback();
      }}
      aria-label={isPlaying ? 'Поставить музыку на паузу' : 'Включить музыку'}
      title={isPlaying ? 'Пауза' : 'Музыка'}
    >
      <Music size={18} className={styles.musicIcon} />
      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
    </button>
  );
};