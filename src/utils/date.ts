export interface TimeLeft {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

export const getTimeLeft = (targetDate: Date, now = new Date()): TimeLeft => {
  const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const formatTwoDigits = (value: number): string => value.toString().padStart(2, '0');
