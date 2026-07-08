import type { PropsWithChildren } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { MusicPlayer } from '@/components/MusicPlayer/MusicPlayer';
import { Navbar } from '@/components/Navbar/Navbar';

export const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <MusicPlayer />
  </>
);
