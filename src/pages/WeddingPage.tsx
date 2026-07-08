import { Suspense, lazy } from 'react';
import { Countdown } from '@/components/Countdown/Countdown';
import { Hero } from '@/components/Hero/Hero';
import styles from './WeddingPage.module.scss';

const Story = lazy(() => import('@/components/Story/Story').then((module) => ({ default: module.Story })));
const Timeline = lazy(() =>
  import('@/components/Timeline/Timeline').then((module) => ({ default: module.Timeline })),
);
const DressCode = lazy(() =>
  import('@/components/DressCode/DressCode').then((module) => ({ default: module.DressCode })),
);
const Location = lazy(() =>
  import('@/components/Location/Location').then((module) => ({ default: module.Location })),
);
const Wishes = lazy(() =>
  import('@/components/Wishes/Wishes').then((module) => ({ default: module.Wishes })),
);
const RSVP = lazy(() => import('@/components/RSVP/RSVP').then((module) => ({ default: module.RSVP })));

export const WeddingPage = () => (
  <main>
    <Hero />
    <Suspense fallback={<div className={styles.fallback}>Загружаем приглашение...</div>}>
      <Story />
      <Countdown />
      <Timeline />
      <DressCode />
      <Location />
      <Wishes />
      <RSVP />
    </Suspense>
  </main>
);
