export interface AmbientMusicController {
  start: () => Promise<void>;
  stop: () => void;
  isPlaying: () => boolean;
}

const audio = new Audio('/wedding.mp3');

audio.loop = true;
audio.volume = 0.35;
audio.preload = 'auto';

const controller: AmbientMusicController = {
  start: async () => {
    if (!audio.paused) return;

    await audio.play();
  },

  stop: () => {
    audio.pause();
    audio.currentTime = 0;
  },

  isPlaying: () => !audio.paused,
};

export const createAmbientMusic = () => controller;