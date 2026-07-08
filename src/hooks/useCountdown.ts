import { useEffect, useState } from 'react';
import { getTimeLeft, type TimeLeft } from '@/utils/date';

export const useCountdown = (targetDate: Date): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1_000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
};
